import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const calculateEnvironmentalImpact = async (weight: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are an aggressive, raw, neo-brutalist eco-activist calculator.
      Input: ${weight} kg of cardboard waste.
      Task: Calculate the specific environmental savings (Trees saved, Gallons of water saved, CO2 emissions prevented) achieved by recycling this amount.
      
      Output Constraints:
      - Return ONLY a raw list of stats.
      - Use uppercase for labels.
      - Keep it punchy and short.
      - No fluff, no polite introductions.
      - Format: 
        [ICON] STAT: VALUE
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "ERROR: DATA CORRUPTED. TRY AGAIN.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "SYSTEM FAILURE: UNABLE TO CALCULATE IMPACT. CHECK CONNECTION.";
  }
};