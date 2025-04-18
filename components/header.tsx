import { DEFAULT_AI_MODEL } from "@/lib/models";
import { cookies } from "next/headers";
import React from "react";
import ModelSelector from "./model-selector";
import ThemeSwitcher from "./theme-switcher";

const Header = async () => {
  const cookieStore = await cookies();
  const modelId = await cookieStore.get("ai-model");
  return (
    <header className="w-full">
      <div className="px-5 mx-auto flex items-center justify-between p-2">
        <ThemeSwitcher />
        <ModelSelector modelId={modelId?.value ?? DEFAULT_AI_MODEL} />
      </div>
    </header>
  );
};

export default Header;
