"use client";

import { createContext, ReactNode, useState } from "react";

export const filterContext = createContext<{
  sortOpen: boolean;
  setSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
export const sidebarContext = createContext<{
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function Context({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <sidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <filterContext.Provider value={{ sortOpen, setSortOpen }}>
        {children}
      </filterContext.Provider>
    </sidebarContext.Provider>
  );
}
