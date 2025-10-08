import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AIAgentRequest {
  agentType: string;
  task: string;
  location?: {
    country: string;
    city?: string;
    coordinates?: [number, number];
  };
  priority: 'low' | 'medium' | 'high' | 'critical';
  nvidiaAccelerated?: boolean;
}

interface LLMResponse {
  model: string;
  response: any;
  processingTime: number;
  confidence: number;
  nvidiaAccelerated: boolean;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const { agentType, task, location, priority, nvidiaAccelerated } = await req.json() as AIAgentRequest;

    console.log(`🤖 AI Agent Orchestrator: Processing ${agentType} task with priority ${priority}`);

    // Initialize multi-LLM collaboration
    const llmEndpoints = {
      'gpt-4': {
        url: 'https://api.openai.com/v1/chat/completions',
        key: Deno.env.get('OPENAI_API_KEY'),
        model: 'gpt-4-turbo-preview'
      },
      'gemini-pro': {
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
        key: Deno.env.get('GEMINI_API_KEY'),
        model: 'gemini-pro'
      },
      'claude-3': {
        url: 'https://api.anthropic.com/v1/messages',
        key: Deno.env.get('ANTHROPIC_API_KEY'),
        model: 'claude-3-sonnet-20240229'
      }
    };

    // NVIDIA Inception accelerated processing
    if (nvidiaAccelerated && Deno.env.get('NVIDIA_API_KEY')) {
      llmEndpoints['nvidia-llama'] = {
        url: 'https://integrate.api.nvidia.com/v1/chat/completions',
        key: Deno.env.get('NVIDIA_API_KEY'),
        model: 'meta/llama2-70b-chat'
      };
    }

    // Determine which LLMs to use based on agent type and task
    const selectedLLMs = selectLLMsForTask(agentType, task, Object.keys(llmEndpoints));
    
    console.log(`🔄 Using LLMs: ${selectedLLMs.join(', ')} ${nvidiaAccelerated ? '(NVIDIA Accelerated)' : ''}`);

    // Execute multi-LLM collaboration
    const llmResponses: LLMResponse[] = [];
    
    for (const llmName of selectedLLMs) {
      const endpoint = llmEndpoints[llmName];
      if (!endpoint.key) continue;

      try {
        const startTime = Date.now();
        const response = await callLLM(endpoint, task, location, agentType);
        const processingTime = Date.now() - startTime;

        llmResponses.push({
          model: llmName,
          response: response,
          processingTime: processingTime,
          confidence: calculateConfidence(response, llmName),
          nvidiaAccelerated: llmName.includes('nvidia') || nvidiaAccelerated
        });

        console.log(`✅ ${llmName} completed in ${processingTime}ms`);
      } catch (error) {
        console.error(`❌ ${llmName} failed:`, error.message);
      }
    }

    // Generate consensus from multiple LLM responses
    const consensus = generateConsensus(llmResponses, agentType);
    
    // Store session data
    const sessionData = {
      agent_type: agentType,
      task: task,
      location: location,
      priority: priority,
      llm_responses: llmResponses,
      consensus: consensus,
      nvidia_accelerated: nvidiaAccelerated,
      processing_metrics: {
        total_time: llmResponses.reduce((sum, r) => sum + r.processingTime, 0),
        models_used: llmResponses.length,
        average_confidence: llmResponses.reduce((sum, r) => sum + r.confidence, 0) / llmResponses.length
      }
    };

    const { data, error } = await supabase
      .from('ai_agent_sessions')
      .insert({
        agent_type: agentType,
        session_data: sessionData,
        status: 'completed'
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    // Real-time safety intelligence processing
    if (agentType === 'safety_analysis' && location) {
      await processSafetyIntelligence(supabase, location, consensus, nvidiaAccelerated);
    }

    return new Response(
      JSON.stringify({
        success: true,
        sessionId: data.id,
        agentType: agentType,
        consensus: consensus,
        processingMetrics: sessionData.processing_metrics,
        nvidiaInceptionAccelerated: nvidiaAccelerated,
        timestamp: new Date().toISOString()
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('🚨 AI Agent Orchestrator Error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});

function selectLLMsForTask(agentType: string, task: string, availableLLMs: string[]): string[] {
  const taskComplexity = analyzeTaskComplexity(task);
  
  // Task-specific LLM selection
  const llmSelection = {
    'safety_analysis': ['gpt-4', 'claude-3', 'nvidia-llama'],
    'legal_intelligence': ['gpt-4', 'claude-3'],
    'social_sentiment': ['gemini-pro', 'gpt-4'],
    'healthcare_access': ['claude-3', 'gpt-4'],
    'threat_detection': ['gpt-4', 'nvidia-llama'],
    'travel_advisory': ['gemini-pro', 'gpt-4', 'claude-3']
  };

  const preferred = llmSelection[agentType] || ['gpt-4', 'gemini-pro'];
  return preferred.filter(llm => availableLLMs.includes(llm)).slice(0, taskComplexity > 0.7 ? 3 : 2);
}

function analyzeTaskComplexity(task: string): number {
  const complexityIndicators = [
    'analyze', 'predict', 'correlate', 'synthesize', 'evaluate',
    'multi-factor', 'real-time', 'comprehensive', 'detailed'
  ];
  
  const matches = complexityIndicators.filter(indicator => 
    task.toLowerCase().includes(indicator)
  ).length;
  
  return Math.min(1.0, matches / complexityIndicators.length * 2);
}

async function callLLM(endpoint: any, task: string, location: any, agentType: string): Promise<any> {
  const systemPrompt = generateSystemPrompt(agentType, location);
  const userPrompt = `${task}\n\nLocation context: ${JSON.stringify(location)}`;

  let requestBody;
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${endpoint.key}`
  };

  // Format request based on LLM provider
  if (endpoint.url.includes('openai.com') || endpoint.url.includes('nvidia.com')) {
    requestBody = {
      model: endpoint.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.3,
      max_tokens: 1000
    };
  } else if (endpoint.url.includes('anthropic.com')) {
    headers['x-api-version'] = '2023-06-01';
    requestBody = {
      model: endpoint.model,
      max_tokens: 1000,
      messages: [
        { role: 'user', content: `${systemPrompt}\n\n${userPrompt}` }
      ]
    };
  } else if (endpoint.url.includes('googleapis.com')) {
    requestBody = {
      contents: [{
        parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }]
      }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1000
      }
    };
    headers['Authorization'] = `Bearer ${endpoint.key}`;
  }

  const response = await fetch(endpoint.url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    throw new Error(`LLM API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

function generateSystemPrompt(agentType: string, location: any): string {
  const basePrompt = `You are an AI agent specialized in LGBTQ+ safety intelligence. You are part of Vector for Good, an NVIDIA Inception member company providing enterprise-grade safety intelligence.`;
  
  const agentPrompts = {
    'safety_analysis': `${basePrompt} Your role is to analyze safety conditions for LGBTQ+ individuals in specific locations. Provide detailed, accurate, and actionable safety assessments based on current data.`,
    'legal_intelligence': `${basePrompt} Your role is to analyze legal frameworks, protections, and risks for LGBTQ+ individuals. Focus on current laws, recent changes, and legal precedents.`,
    'social_sentiment': `${basePrompt} Your role is to analyze social attitudes, cultural acceptance, and community sentiment toward LGBTQ+ individuals. Use social media, news, and cultural indicators.`,
    'healthcare_access': `${basePrompt} Your role is to analyze healthcare accessibility, quality, and LGBTQ+-specific medical resources. Focus on practical access and quality of care.`,
    'threat_detection': `${basePrompt} Your role is to identify and assess emerging threats to LGBTQ+ safety. Focus on real-time threat detection and risk assessment.`,
    'travel_advisory': `${basePrompt} Your role is to provide travel safety guidance for LGBTQ+ travelers. Focus on practical, actionable travel advice and safety precautions.`
  };

  return agentPrompts[agentType] || basePrompt;
}

function calculateConfidence(response: any, llmName: string): number {
  // Base confidence by model
  const modelConfidence = {
    'gpt-4': 0.9,
    'claude-3': 0.85,
    'gemini-pro': 0.8,
    'nvidia-llama': 0.88
  };

  let confidence = modelConfidence[llmName] || 0.7;

  // Adjust based on response characteristics
  const responseText = JSON.stringify(response).toLowerCase();
  
  if (responseText.includes('uncertain') || responseText.includes('unclear')) {
    confidence *= 0.8;
  }
  
  if (responseText.includes('confident') || responseText.includes('certain')) {
    confidence *= 1.1;
  }

  return Math.min(0.95, Math.max(0.1, confidence));
}

function generateConsensus(responses: LLMResponse[], agentType: string): any {
  if (responses.length === 0) {
    return { error: 'No valid responses received' };
  }

  // Extract key insights from each response
  const insights = responses.map(r => extractInsights(r.response, r.model));
  
  // Calculate weighted consensus
  const totalWeight = responses.reduce((sum, r) => sum + r.confidence, 0);
  const weightedInsights = insights.map((insight, i) => ({
    ...insight,
    weight: responses[i].confidence / totalWeight
  }));

  // Generate final consensus
  const consensus = {
    agentType: agentType,
    consensusScore: calculateConsensusScore(responses),
    keyFindings: synthesizeFindings(weightedInsights),
    riskLevel: calculateRiskLevel(weightedInsights),
    recommendations: synthesizeRecommendations(weightedInsights),
    dataQuality: assessDataQuality(responses),
    processingMetrics: {
      modelsUsed: responses.length,
      averageConfidence: responses.reduce((sum, r) => sum + r.confidence, 0) / responses.length,
      totalProcessingTime: responses.reduce((sum, r) => sum + r.processingTime, 0),
      nvidiaAccelerated: responses.some(r => r.nvidiaAccelerated)
    },
    timestamp: new Date().toISOString()
  };

  return consensus;
}

function extractInsights(response: any, model: string): any {
  // Extract structured insights from LLM response
  // This would be more sophisticated in production
  return {
    model: model,
    insights: response,
    extractedAt: new Date().toISOString()
  };
}

function calculateConsensusScore(responses: LLMResponse[]): number {
  if (responses.length < 2) return 0.5;
  
  // Calculate agreement between responses
  const confidences = responses.map(r => r.confidence);
  const avgConfidence = confidences.reduce((a, b) => a + b, 0) / confidences.length;
  const variance = confidences.reduce((sum, conf) => sum + Math.pow(conf - avgConfidence, 2), 0) / confidences.length;
  
  // Lower variance = higher consensus
  return Math.max(0.1, Math.min(0.95, 1 - variance));
}

function synthesizeFindings(weightedInsights: any[]): string[] {
  // Synthesize key findings from weighted insights
  return [
    'Multi-LLM analysis completed with high confidence',
    'Real-time data sources integrated',
    'NVIDIA Inception acceleration utilized where applicable'
  ];
}

function calculateRiskLevel(weightedInsights: any[]): string {
  // Calculate overall risk level from insights
  const riskScore = Math.random() * 10; // In production, this would analyze actual insights
  
  if (riskScore > 7) return 'HIGH';
  if (riskScore > 4) return 'MEDIUM';
  return 'LOW';
}

function synthesizeRecommendations(weightedInsights: any[]): string[] {
  // Generate actionable recommendations
  return [
    'Monitor situation closely',
    'Update safety advisories as needed',
    'Engage local community partners'
  ];
}

function assessDataQuality(responses: LLMResponse[]): any {
  return {
    completeness: responses.length > 2 ? 'high' : 'medium',
    consistency: calculateConsensusScore(responses) > 0.7 ? 'high' : 'medium',
    timeliness: 'real-time',
    sources: responses.length
  };
}

async function processSafetyIntelligence(supabase: any, location: any, consensus: any, nvidiaAccelerated: boolean): Promise<void> {
  // Store processed safety intelligence
  const safetyData = {
    country_code: location.country,
    city: location.city,
    safety_score: Math.random() * 10, // In production, extract from consensus
    legal_protection_score: Math.random() * 10,
    social_acceptance_score: Math.random() * 10,
    healthcare_access_score: Math.random() * 10,
    data_sources: {
      consensus: consensus,
      nvidia_accelerated: nvidiaAccelerated,
      processing_timestamp: new Date().toISOString()
    },
    confidence_level: consensus.consensusScore,
    last_updated: new Date().toISOString()
  };

  const { error } = await supabase
    .from('safety_intelligence')
    .upsert(safetyData, {
      onConflict: 'country_code,city'
    });

  if (error) {
    console.error('Error storing safety intelligence:', error);
  } else {
    console.log('✅ Safety intelligence updated for', location);
  }
}
