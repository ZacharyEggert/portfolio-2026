"use client";

import Sidebar from "@/app/_components/Sidebar";
import { useSidebarOpen } from "../_context/SidebarOpen";
import { useEffect, useState } from "react";

export default function WrapPageWithSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen } = useSidebarOpen();

  //debounce the isSidebarOpen value to prevent the sidebar from disappearing immediately when toggled off
  const [debouncedIsSidebarOpen, setDebouncedIsSidebarOpen] = useState(isSidebarOpen);

  useEffect(() => {
    if (isSidebarOpen) {
      setDebouncedIsSidebarOpen(true);
    }

    const timeoutId = setTimeout(() => {
      setDebouncedIsSidebarOpen(isSidebarOpen);
    }, 1000); // Adjust the debounce delay as needed

    return () => clearTimeout(timeoutId);
  }, [isSidebarOpen]);

  return (
    <div className="flex grow relative h-full">
      <aside
        className={`${isSidebarOpen ? "w-2/12 py-4 px-2 " : "w-1/12 opacity-0"} bg-green-500 transition-all duration-1000 ease-in-out overflow-hidden`}
      >
        {debouncedIsSidebarOpen && <Sidebar />}
      </aside>
      <div
        className={`${isSidebarOpen ? "w-8/12" : "w-10/12"} -outline-offset-4 outline-4 outline-white transition-all duration-1000 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
}
