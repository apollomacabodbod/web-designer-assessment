import { useState, useEffect } from "react";
import dumbTrack from "src/assets/home/dump-truck.jpg";
import dumbTrackHeavy from "src/assets/home/dump-track-heavy.jpg";
import { motion } from "framer-motion";

const slides = [
  {
    img: dumbTrack,
    subtitle: "Pålitelig og sikker maskinentreprenør!",
    title:
      "VI NYTER STOR TILLIT BLANT VÅRE KUNDER OG KAN VISE TIL GODE REFERANSER FRA TIDLIGERE ARBEID",
  },
  {
    img: dumbTrackHeavy,
    subtitle: null,
    title:
      "VI SKAL VÆRE DITT NATURLIGE VALG FOR Å DEKKE ETTERSPØRSELEN ETTER EN MASKINENTREPRENØR",
  },
];

export default function HomeHeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative min-h-[35.3125em] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.img})`,
            opacity: i === current ? 1 : 0,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
            },
          }}
        />
      ))}

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-[rgba(34,34,34,0.50)] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
          },
        }}
      >
        <div className="flex flex-col max-w-[1200px] px-[1.25em] gap-[2em]">
          {slides[current].subtitle && (
            <p className="text-center text-[#fff] text-[1.125rem] font-openSans font-bold">
              {slides[current].subtitle}
            </p>
          )}
          <p className="text-center text-[1.625rem] font-bold font-openSans text-[#fff]">
            {slides[current].title}
          </p>
        </div>
      </motion.div>

      {/* Dots */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
          },
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}
