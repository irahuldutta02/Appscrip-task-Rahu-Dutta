"use client";

import { createContext, ReactNode, useState } from "react";

export const sidebarContext = createContext<{
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function Context({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <sidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </sidebarContext.Provider>
  );
}
