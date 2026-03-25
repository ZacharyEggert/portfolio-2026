"use client";

import { SidebarOpenProvider } from "../_context/SidebarOpen";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SidebarOpenProvider>{children}</SidebarOpenProvider>;
}
