import { useState, useEffect, useCallback } from "react";
import { Phone } from "lucide-react";
import heroImg1 from "src/assets/home/hero-construction.jpg";
import heroImg2 from "src/assets/home/hero-construction-2.jpg";

const slides = [
  {
    img: heroImg1,
    subtitle: "Pålitelig og sikker maskinentreprenør!",
    heading:
      "Vi nyter stor tillit blant våre kunder og kan vise til gode referanser fra tidligere arbeid",
  },
  {
    img: heroImg2,
    heading:
      "Vi skal være ditt naturlige valg for å dekke etterspørselen etter en maskinentreprenør",
    subtitle: null,
  },
];

const HomeHeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="forside"
      className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.img}
          alt="Gravemaskin på byggeplass"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]" />

      {/* Content */}
      <div className="relative container flex flex-col items-start text-left gap-5 z-10 max-w-[1200px] lg:mx-auto  px-[1.25em]">
        {slides[current].subtitle && (
          <p className="text-lg md:text-xl  font-semibold animate-fade-up text-[#d48b0b]">
            {slides[current].subtitle}
          </p>
        )}
        <h1
          key={current}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground max-w-4xl text-balance uppercase animate-fade-up"
        >
          {slides[current].heading}
        </h1>
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2   font-semibold px-7 py-3.5 rounded-lg hover:brightness-110 transition-all text-base mt-2 bg-[#d48b0b]"
        >
          <Phone size={18} />
          Kontakt oss
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Gå til slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-primary-foreground scale-110"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Info bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm  ">
        <div className="container flex flex-wrap justify-between items-center py-3 gap-3 text-sm text-primary-foreground max-w-[1200px] lg:mx-auto  px-[1.25em] ">
          <span>✉ fro-fre@outlook.com</span>
          <span>📞 926 04 072</span>
          <span>📍 6260 Skodje</span>
          <span>🏢 Orgnr 912 166 805</span>
        </div>
      </div> */}
    </section>
  );
};

export default HomeHeroSection;
