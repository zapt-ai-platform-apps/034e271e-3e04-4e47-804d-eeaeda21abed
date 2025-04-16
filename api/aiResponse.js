import Sentry from './_sentry.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Missing query parameter' });
    }

    const openaiApiKey = process.env.VITE_OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error('Missing OpenAI API key');
    }

    console.log('Processing AI query:', query);

    // Make a request to the OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant specialized in Pakistani cuisine, restaurants, and food culture. Provide concise and informative responses about Pakistani food, cooking methods, restaurants, and regional specialties.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        max_tokens: 300
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      throw new Error(`OpenAI API error: ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    console.log('AI Response received and returning to client');
    
    return res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error('Error in AI response endpoint:', error);
    Sentry.captureException(error);
    return res.status(500).json({ error: error.message || 'Failed to get AI response' });
  }
}