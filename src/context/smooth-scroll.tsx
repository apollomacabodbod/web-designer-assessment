import React, { createContext, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // or use next/router for Next.js
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation(); // Hook to get the current route

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.5, // Controls the smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    lenisRef.current = lenis;

    // Ensure Lenis starts at the current scroll position
    lenis.scrollTo(window.scrollY, { immediate: true });

    // RAF loop for continuous smooth scroll
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to destroy Lenis on unmount
    return () => {
      lenis.destroy();
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual"; // Reset to default behavior
      }
    };
  }, []);

  // Scroll to the top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]); // Triggered on route change

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);