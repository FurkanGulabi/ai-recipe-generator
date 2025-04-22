import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { Hourglass } from "lucide-react";

interface RecipeNoLimitProps {
  resetAtEpoch: number;
}

export default function RecipeNoLimit({ resetAtEpoch }: RecipeNoLimitProps) {
  // Convert milliseconds to seconds if needed
  const epochInSeconds =
    resetAtEpoch > 10000000000 ? Math.floor(resetAtEpoch / 1000) : resetAtEpoch;

  const resetDate = fromUnixTime(epochInSeconds);
  const currentDate = new Date();

  // Check if reset date is in the future
  const isFuture = resetDate > currentDate;

  // Get friendly time format using date-fns
  const getFriendlyTimeFormat = (): string => {
    if (!isFuture) {
      return "Your limit should reset shortly.";
    }

    // Use formatDistanceToNow from date-fns
    return `Your limit resets in ${formatDistanceToNow(resetDate, {
      addSuffix: false,
    })}.`;
  };

  const resetText = getFriendlyTimeFormat();

  return (
    <div className="max-w-md mx-auto bg-primary/10 border border-primary/30 text-primary rounded-lg p-6 flex flex-col items-center space-y-4">
      <Hourglass className="h-12 w-12" />
      <h3 className="text-xl font-semibold text-center">Daily Limit Reached</h3>
      <p className="text-center">
        You've used all your recipe generations for today.
      </p>
      <p className="text-sm text-muted-foreground text-center">{resetText}</p>
    </div>
  );
}
