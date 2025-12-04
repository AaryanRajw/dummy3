// Mock service since GenAI was removed
export const calculateEnvironmentalImpact = async (weight: string): Promise<string> => {
  // Static mocked response to keep app functional without AI
  const weightNum = parseFloat(weight) || 0;
  
  if (weightNum <= 0) return "ENTER VALID WEIGHT";

  const trees = (weightNum * 0.017).toFixed(1);
  const water = (weightNum * 7).toFixed(0);
  const co2 = (weightNum * 3.3).toFixed(0);

  return `
    [TREE] TREES SAVED: ${trees}
    [DROP] WATER SAVED: ${water} GAL
    [CLOUD] CO2 PREVENTED: ${co2} KG
  `;
};