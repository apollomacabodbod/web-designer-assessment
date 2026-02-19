import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/page";
import { LenisProvider } from "./context/smooth-scroll";
import Header from "./components/kit/header";
import Footer from "./components/kit/footer";

function App() {
  const location = useLocation(); // ✅ Use the hook
  return (
    <LenisProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <div key={location.pathname}>
        {/* Footer */}
        <Footer />
      </div>

      {/* Fixed on every page */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#5ab732" />
            <path
              d="M14 26L22 17L30 26"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </LenisProvider>
  );
}

export default App;
