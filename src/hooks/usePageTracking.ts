import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>,
    ) => void;
    dataLayer?: any[];
  }
}

export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-SNQ7J8BLD1", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};
