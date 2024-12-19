"use client";

import { useEffect, useState } from "react";
import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

interface ModeToggleProps {
  className?: string;
}

export function ModeToggle({className}: ModeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className={cn("h-8 w-8 rounded-full bg-background", className)}
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
            <MoonIcon className="scale-1000 absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">Bytt modus</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Bytt modus</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
