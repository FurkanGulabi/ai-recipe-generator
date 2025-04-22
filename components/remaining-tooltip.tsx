"use client";
import { useLimit } from "@/hooks/use-limit";
import { Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const RemainingTooltip = () => {
  const { error, isLoading, limit } = useLimit();
  if (isLoading)
    return (
      <Info className="text-muted-foreground size-4  cursor-pointer absolute -right-6 top-1/2 -translate-y-1/2" />
    ); // or a loading spinner

  if (error) return null; // Handle error state as needed
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer absolute -right-6 top-1/2 -translate-y-1/2">
        <Info className="text-muted-foreground size-4 " />
      </PopoverTrigger>
      <PopoverContent className="p-2 text-muted-foreground text-sm max-w-sm">
        {limit == 0
          ? "No recipes remaining for today."
          : `You have ${limit} recipes remaining for today.`}
      </PopoverContent>
    </Popover>
  );
};

export default RemainingTooltip;
