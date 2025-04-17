"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  // Initialize with a null theme and set it after component mounts
  const { isDarkMode, ref, toggleSwitchTheme } = useModeAnimation({
    duration: 300,
    animationType: ThemeAnimationType.BLUR_CIRCLE,
  });

  // Update localStorage when theme changes
  const handleToggleTheme = () => {
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    localStorage.setItem("theme", newTheme);
    toggleSwitchTheme();
  };

  // After mounting, we can safely set the mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until component has mounted to avoid hydration mismatch
  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder with same size as button
  }

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      ref={ref}
      onClick={handleToggleTheme}
      className="absolute top-3 left-3 z-50"
    >
      <Sun className="dark:hidden h-[1.2rem] w-[1.2rem]" />
      <Moon className="hidden dark:block h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;
