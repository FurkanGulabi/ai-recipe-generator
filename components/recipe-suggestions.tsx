import { allRecipeSuggestions } from "@/lib/suggestions";
import { useMemo } from "react";

interface RecipeSuggestionProps {
  setInputValue: (value: string) => void;
  submit: (data: { prompt: string }) => void;
}

const RecipeSuggestions = ({
  setInputValue,
  submit,
}: RecipeSuggestionProps) => {
  const suggestions = useMemo(
    () => {
      const shuffled = [...allRecipeSuggestions].sort(
        () => Math.random() - 0.5
      );
      return shuffled.slice(0, 3);
    },
    [] // Empty dependency array for one-time computation
  );

  return (
    <div className="flex gap-3">
      {suggestions.map((suggestion, index) => (
        <div
          key={suggestion.title} // Use unique title instead of index
          className="p-2 border w-sm grow h-24 rounded-md flex flex-col cursor-pointer hover:border-muted transition-colors"
          onClick={() => {
            setInputValue(suggestion.title);
            submit({ prompt: suggestion.title });
          }}
        >
          <p>{suggestion.title}</p>
          <p className="text-xs text-muted-foreground">
            {suggestion.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeSuggestions;
