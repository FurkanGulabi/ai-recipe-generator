"use client";

import { recipeSchema } from "@/lib/recipe-schema";

import { useLimit } from "@/hooks/use-limit";
import {
  allRecipeSuggestions,
  getRandomElements,
  RecipeSuggestion,
} from "@/lib/suggestions";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { Annoyed, ChefHat, Clock, Loader2, Users } from "lucide-react";
import type React from "react";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";
import { mutate } from "swr";
import RecipeError from "./recipe-error";
import RecipeNoLimit from "./recipe-nolimit";
import RemainingTooltip from "./remaining-tooltip";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

interface RecipeGeneratorProps {
  modelId: string;
}

export default function RecipeGenerator({ modelId }: RecipeGeneratorProps) {
  const {
    error: limitError,
    isLoading: isLimitLoading,
    isLimitReached,
    resetAtEpoch,
  } = useLimit();
  const { object, submit, isLoading, error } = useObject({
    api: "/api/chat",
    schema: recipeSchema,

    headers: {
      model: modelId,
    },

    onError: (error) => {
      if (error.message == "rate_limit_exceded") {
        toast.error("Rate limit exceeded. Please try again later.");
      } else if (error.message === "no_prompt") {
        toast.error("Please enter a dish name.");
      } else if (error.message === "no_response") {
        toast.error("Something went wrong. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
        console.log(error.message);
      }
    },
    onFinish: async (data) => {
      console.log("Recipe generated:", data);
      await mutate("/api/limit");
    },
  });
  const [inputValue, setInputValue] = useState("");
  const [clientSuggestions, setClientSuggestions] = useState<
    RecipeSuggestion[]
  >([]);

  useEffect(() => {
    setClientSuggestions(getRandomElements(allRecipeSuggestions, 3));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    submit({ prompt: inputValue });
  };

  const hasMetadata =
    object?.prepTime ||
    object?.cookTime ||
    object?.servings ||
    object?.difficulty;

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-2 relative">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a dish name (e.g., Chocolate Chip Cookies)"
          disabled={isLoading || isLimitReached}
          className="flex-grow"
        />
        <Button
          type="submit"
          className="min-w-[140px]"
          disabled={isLoading || isLimitReached}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
            </>
          ) : isLimitReached ? (
            <Annoyed />
          ) : (
            "Generate Recipe"
          )}
        </Button>
        <RemainingTooltip />
      </form>

      {isLimitReached && <RecipeNoLimit resetAtEpoch={resetAtEpoch} />}
      {error && limitError && <RecipeError />}

      {!object?.recipe &&
        !isLoading &&
        !isLimitLoading &&
        !isLimitReached &&
        !limitError &&
        !error &&
        clientSuggestions.length > 0 && (
          <Suspense fallback={<div>Loading suggestions...</div>}>
            <div className="flex justify-between gap-3">
              {clientSuggestions.map((suggestion, index) => (
                <div
                  key={`suggestion-${index}`}
                  className="p-2 border grow h-20 rounded-md flex flex-col w-full cursor-pointer hover:border-muted transition-colors"
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
          </Suspense>
        )}
      {isLoading && !object?.recipe && (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Generating your recipe...</span>
        </div>
      )}

      {object?.recipe && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {object.recipe}
            </CardTitle>
            {object.description && (
              <CardDescription className="pt-2">
                {object.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {hasMetadata && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-muted-foreground border-b pb-4 mb-4">
                {object.prepTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>Prep: {object.prepTime}</span>
                  </div>
                )}
                {object.cookTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>Cook: {object.cookTime}</span>
                  </div>
                )}
                {object.servings && (
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{object.servings}</span>
                  </div>
                )}
                {object.difficulty && (
                  <div className="flex items-center gap-1.5">
                    <ChefHat className="h-4 w-4" />
                    <span>{object.difficulty}</span>
                  </div>
                )}
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold mb-3">Ingredients:</h3>{" "}
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                {" "}
                {object.ingredients?.map((ingredient, index) => (
                  <li key={`ing-${index}`}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Instructions:</h3>{" "}
              <ol className="list-decimal list-inside space-y-2">
                {" "}
                {object.instructions?.map((instruction, index) => (
                  <li key={`inst-${index}`}>{instruction}</li>
                ))}
              </ol>
            </div>
            {object.tips && object.tips.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Tips & Variations:
                </h3>{" "}
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  {object.tips.map((tip, index) => (
                    <li key={`tip-${index}`}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
