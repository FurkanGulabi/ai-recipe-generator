"use client";

import { useLimit } from "@/hooks/use-limit";
import { recipeSchema } from "@/lib/recipe-schema";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { Annoyed, Loader2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { mutate } from "swr";
import { z } from "zod";
import RecipeCard from "./recipe-card";
import RecipeError from "./recipe-error";
import RecipeNoLimit from "./recipe-nolimit";
import RecipeSuggestions from "./recipe-suggestions";
import RemainingTooltip from "./remaining-tooltip";
import { Button } from "./ui/button";
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
    headers: { model: modelId },
    onError: (error) => {
      if (error.message === "rate_limit_exceded") {
        toast.error("Rate limit exceeded. Please try again later.");
      } else if (error.message === "no_prompt") {
        toast.error("Please enter a dish name.");
      } else if (error.message === "no_response") {
        toast.error("Something went wrong. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
    onFinish: async () => {
      await mutate("/api/limit");
    },
  });

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    submit({ prompt: inputValue });
  };

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

      {isLimitReached && !object && (
        <RecipeNoLimit resetAtEpoch={resetAtEpoch} />
      )}
      {error && limitError && <RecipeError />}

      {!object?.recipe &&
        !isLoading &&
        !isLimitLoading &&
        !isLimitReached &&
        !limitError &&
        !error && (
          <RecipeSuggestions setInputValue={setInputValue} submit={submit} />
        )}
      {isLoading && !object?.recipe && (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Generating your recipe...</span>
        </div>
      )}

      {object?.recipe && !error && (
        <RecipeCard object={object as z.infer<typeof recipeSchema>} />
      )}
    </div>
  );
}
