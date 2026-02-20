import { motion } from "framer-motion";

export default function HomeTransport() {
  return (
    <>
      <motion.div
        className="flex flex-col mt-[3em] max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[1.5em] "
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Graving, drenering og transport av masser i Møre og Romsdal!
        </h2>
        <div className="w-16 h-1 bg-[#d48b0b] mx-auto mb-16 rounded-full" />
      </motion.div>
    </>
  );
}
