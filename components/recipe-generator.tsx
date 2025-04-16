"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, Loader2, Search } from "lucide-react";
import { useState } from "react";

export default function RecipeGenerator() {
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipe.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Enter a recipe name (e.g., Lasagna)"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            className="pl-10 py-6 text-lg pr-32 "
          />
          <Button
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            type="submit"
            disabled={isLoading || !recipe.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating
              </>
            ) : (
              <>
                <ChefHat className="mr-2 h-5 w-5" />
                Generate
              </>
            )}
          </Button>
        </div>
      </form>

      {showResults && (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-2xl font-bold text-center  mb-6">
            {recipe.charAt(0).toUpperCase() + recipe.slice(1)} Recipe
          </h2>

          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="instructions">How to Make</TabsTrigger>
            </TabsList>

            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>Ingredients & Tools</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>500g ground beef (preferably 80% lean)</li>
                    <li>1 large onion, finely chopped</li>
                    <li>3 cloves garlic, minced</li>
                    <li>2 cans (400g each) crushed tomatoes</li>
                    <li>2 tablespoons tomato paste</li>
                    <li>250g lasagna noodles</li>
                    <li>500g ricotta cheese</li>
                    <li>2 cups shredded mozzarella</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instructions">
              <Card>
                <CardHeader>
                  <CardTitle>Step by Step Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-4">
                    <li>
                      <p className="font-medium">Prepare the meat sauce</p>
                      <p>
                        In a large saucepan, cook the ground beef over medium
                        heat until browned. Add onions and garlic, cooking until
                        softened.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Add tomatoes</p>
                      <p>
                        Stir in crushed tomatoes, tomato paste, and seasonings.
                        Simmer for 30 minutes.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Prepare the cheese mixture</p>
                      <p>
                        In a bowl, combine ricotta cheese with egg, parsley, and
                        half the mozzarella.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Layer the lasagna</p>
                      <p>
                        In a baking dish, layer sauce, noodles, and cheese
                        mixture. Repeat layers, ending with sauce and remaining
                        mozzarella on top.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Bake</p>
                      <p>
                        Cover with foil and bake at 375°F (190°C) for 25
                        minutes. Remove foil and bake for another 25 minutes
                        until bubbly and golden.
                      </p>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}
