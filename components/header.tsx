import { DEFAULT_AI_MODEL } from "@/lib/models";
import { ChefHatIcon } from "lucide-react";
import { cookies } from "next/headers";
import ModelSelector from "./model-selector";
import ThemeSwitcher from "./theme-switcher";

const Header = async () => {
  const cookieStore = await cookies();
  const modelId = await cookieStore.get("ai-model");
  return (
    <header className="w-full">
      <div className="px-5 mx-auto flex items-center justify-between p-2">
        <ThemeSwitcher />
        <div className="flex items-center gap-2">
          <ChefHatIcon />
          <ModelSelector modelId={modelId?.value ?? DEFAULT_AI_MODEL} />
        </div>
      </div>
    </header>
  );
};

export default Header;
