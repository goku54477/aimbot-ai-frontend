
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AIMBOT Analytic Intelligence. Your tone is cold, precise, and hyper-analytical. 
You are the voice of a next-generation quantitative platform.
If asked about status, always remind the user that the terminal is in 'PRE-DEPLOYMENT PHASE 2' and many features are currently encrypted.
Use technical terminology: alpha, neural-weights, latency, high-precision, sub-second execution.
Avoid pleasantries. Deliver pure data and status reports.
`;

export async function getMarketInsights(query: string) {
  try {
    // Initializing with the required named parameter and direct process.env.API_KEY
    // Creating the instance inside the function to ensure the latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      // Upgraded to gemini-3-pro-preview for advanced quantitative reasoning tasks
      model: 'gemini-3-pro-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
      },
    });
    
    // .text is a property, not a method
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "SYSTEM_ERROR: ANALYTIC_LINK_SEVERED. RECONNECTING...";
  }
}
