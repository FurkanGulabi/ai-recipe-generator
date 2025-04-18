import RecipeGenerator from "@/components/recipe-generator";
import { DEFAULT_AI_MODEL } from "@/lib/models";
import { Loader2 } from "lucide-react";
import { cookies } from "next/headers";
import { FC, Suspense } from "react";

const HomePage: FC = async () => {
  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get("ai-model");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Recipe AI
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Enter any dish name and our AI will generate a complete recipe with
            ingredients and step-by-step instructions.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Suspense
            fallback={
              <div className="flex justify-center items-center">
                <Loader2 className="animate-spin mr-2" />
                <span>Loading recipe generator...</span>
              </div>
            }
          >
            <RecipeGenerator
              modelId={modelIdFromCookie?.value ?? DEFAULT_AI_MODEL}
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
