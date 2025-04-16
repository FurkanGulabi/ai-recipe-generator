"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const { isDarkMode, ref, toggleSwitchTheme } = useModeAnimation({
    duration: 300,
    animationType: ThemeAnimationType.BLUR_CIRCLE,
  });
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      ref={ref}
      onClick={toggleSwitchTheme}
      className="absolute top-3 left-3"
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;
