import { motion } from "framer-motion";

export default function HomeInfo() {
  return (
    <>
      <div className="bg-[#191c2b] ">
        <motion.div
          className="container py-4 flex flex-wrap justify-between items-center gap-4 text-sm text-primary-foreground max-w-[1200px] lg:mx-auto  px-[1.25em]"
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
          <span>✉ fro-fre@outlook.com</span>
          <span>📞 926 04 072</span>
          <span>📍 6260 Skodje</span>
          <span>🏢 Orgnr 912 166 805</span>
        </motion.div>
      </div>
    </>
  );
}
