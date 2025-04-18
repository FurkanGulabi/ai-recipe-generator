export const DEFAULT_AI_MODEL = "smart-model";

interface AIModel {
  id: string;
  name: string;
  description: string;
}

export const AIModels: AIModel[] = [
  {
    id: "smart-model",
    name: "Smart Model",
    description: "A smart model that provides accurate and relevant responses.",
  },
  {
    id: "smarter-model",
    name: "Smarter Model",
    description:
      "A smarter model that provides even more accurate and relevant responses.",
  },
  {
    id: "smartest-model",
    name: "Smartest Model",
    description:
      "The smartest model that provides the most accurate and relevant responses.",
  },
];
