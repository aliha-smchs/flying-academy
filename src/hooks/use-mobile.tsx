import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount and add event listener
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Clean up event listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [breakpoint]);

  return isMobile;
}
