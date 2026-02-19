import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "src/context/smooth-scroll"; 

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // Smooth scroll to top
    }
  }, [pathname, lenis]);

  return null;
}