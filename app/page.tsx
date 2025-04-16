import RecipeGenerator from "@/components/recipe-generator";
import ThemeSwitcher from "@/components/theme-switcher";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Recipe AI</h1>
        <p className="text-center  mb-12 max-w-2xl mx-auto">
          Enter any dish name and our AI will generate a complete recipe with
          ingredients and step-by-step instructions.
        </p>
        <RecipeGenerator />
      </div>
    </main>
  );
};

export default HomePage;
