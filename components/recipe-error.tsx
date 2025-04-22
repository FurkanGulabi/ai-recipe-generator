import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

interface RecipeErrorProps {
  message?: string;
  onRetry?: () => void;
}

export default function RecipeError({
  message = "Something went wrong. Please try again.",
  onRetry,
}: RecipeErrorProps) {
  return (
    <div className="max-w-md mx-auto bg-destructive/10 border border-destructive text-destructive rounded-lg p-6 flex flex-col items-center space-y-4">
      <AlertCircle className="h-12 w-12" />
      <p className="text-center text-lg font-semibold">{message}</p>
      <Button
        variant="destructive"
        onClick={onRetry ?? (() => window.location.reload())}
      >
        Retry
      </Button>
    </div>
  );
}
