import { motion } from "framer-motion";

export default function HomeWelcomeFremi() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[1em]">
        <motion.p
          className="text-[1.625rem] text-[#2b2b2b] font-openSans font-bold text-center"
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
          Velkommen til Fremi!
        </motion.p>

        <motion.div
          className="flex items-center justify-center"
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
          <svg
            width="60"
            height="4"
            viewBox="0 0 60 4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="4" rx="2" fill="#5ab732" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
