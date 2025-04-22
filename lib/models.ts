export const DEFAULT_AI_MODEL = "smart-model";

interface AIModel {
  id: string;
  name: string;
  description: string;
}

export const AIModels: AIModel[] = [
  {
    id: "smart-model",
    name: "Quick Chef",
    description: "⚡ Quick & easy recipes for everyday meals.",
  },
  {
    id: "smarter-model",
    name: "Flavor Master",
    description: "🧠 More creative recipes with smart ingredient pairing.",
  },
  {
    id: "smartest-model",
    name: "Gourmet Genius",
    description: "🌟 Gourmet-level recipes with dietary options.",
  },
];
