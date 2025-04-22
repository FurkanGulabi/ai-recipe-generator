import { recipeSchema } from "@/lib/recipe-schema";
import { ChefHat, Clock, Users } from "lucide-react";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface RecipeCardProps {
  object: z.infer<typeof recipeSchema>;
}

const RecipeCard = ({ object }: RecipeCardProps) => {
  const hasMetadata =
    object?.prepTime ||
    object?.cookTime ||
    object?.servings ||
    object?.difficulty;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{object.recipe}</CardTitle>
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
          <h3 className="text-lg font-semibold mb-3">Ingredients:</h3>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            {object.ingredients?.map((ingredient, index) => (
              <li key={`ing-${index}`}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2">
            {object.instructions?.map((instruction, index) => (
              <li key={`inst-${index}`}>{instruction}</li>
            ))}
          </ol>
        </div>
        {object.tips && object.tips.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Tips & Variations:</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              {object.tips.map((tip, index) => (
                <li key={`tip-${index}`}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
