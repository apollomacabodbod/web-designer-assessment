import { motion } from "framer-motion";

export default function ScrollTopButton() {
  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
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
      </motion.div>
    </>
  );
}
