import { GoogleGenAI } from '@google/genai';

// Enable Edge Runtime for Vercel
export const config = {
  runtime: 'edge',
};

// Initialize Gemini
// Ensure you have GEMINI_API_KEY in your Vercel Environment Variables
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const PRE_PROMPT = `
You are the official Customer Service AI for "National Tire & Auto Hub" located in Central Louisiana (stores in Alexandria, Pineville, etc.). 
Your job is to answer customer questions accurately, warmly, and concisely.
You are a knowledgeable automotive service advisor.

Key Business Info:
- Phone: (318) 427-0477
- Address: 1400 Hwy 165 S, Pineville, LA 71360
- Hours: Monday - Friday: 8:00 AM - 5:00 PM (Closed Weekends)
- Core Services: Oil Changes, Tires (passenger & commercial), Alignments (Hunter Road Force), Auto Repair (Engines, Transmissions), Glass & ADAS Calibration.
- Specialities: We are the ONLY authorized DOT Inspection station in Pineville. We offer heavy-duty fleet services and mobile tire service for 18-wheelers.
- Tone: Professional, welcoming, direct. NO corporate jargon. Use terms like "folks" occasionally to sound local. 

Instructions:
1. ALWAYS prioritize getting the customer to book an appointment by calling (318) 427-0477.
2. If asked about pricing, give general estimates or say "Prices vary by vehicle, but if you call (318) 427-0477 we can give you an exact quote right now."
3. Keep responses under 3-4 sentences. Be punchy and easy to read.
4. Do NOT make up information about services we don't offer (e.g. we do not do auto body/collision repair).
`;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Bad Request: Invalid messages format', { status: 400 });
    }

    // Format messages for Gemini Chat Session
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));
    
    const latestUserMessage = messages[messages.length - 1].content;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: PRE_PROMPT }] },
        { role: 'model', parts: [{ text: "Understood. I will act as the National Tire & Auto Hub advisor." }] },
        ...history,
        { role: 'user', parts: [{ text: latestUserMessage }] }
      ]
    });

    return new Response(JSON.stringify({
      message: response.text,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Gemini Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
