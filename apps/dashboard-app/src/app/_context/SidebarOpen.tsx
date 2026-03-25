"use client";

import { createContext, useContext, useState } from "react";

interface SidebarOpenContextValue {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const SidebarOpenContext = createContext<SidebarOpenContextValue | undefined>(undefined);

export const SidebarOpenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarOpenContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarOpenContext.Provider>
  );
};

export const useSidebarOpen = (): SidebarOpenContextValue => {
  const context = useContext(SidebarOpenContext);
  if (!context) {
    throw new Error("useSidebarOpen must be used within a SidebarOpenProvider");
  }
  return context;
};
