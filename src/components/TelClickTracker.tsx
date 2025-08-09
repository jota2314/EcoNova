"use client";

import { useEffect } from "react";
import { pushDataLayer } from "@/lib/gtm";

export default function TelClickTracker(): null {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href.toLowerCase().startsWith("tel:")) return;

      const number = href.replace(/^tel:/i, "");
      pushDataLayer({ event: "phone_click", tel: number });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}

