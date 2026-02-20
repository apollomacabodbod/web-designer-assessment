import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 mt-[5em]">
    <div className="container py-8 flex flex-wrap justify-between items-center gap-4 text-sm max-w-[1200px] lg:mx-auto  px-[1.25em]">
      <motion.span
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
        ✉ fro-fre@outlook.com
      </motion.span>
      <motion.span
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
        📞 926 04 072
      </motion.span>
      <motion.span
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
        📍 6260 Skodje
      </motion.span>
      <motion.span
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
        🏢 Orgnr 912 166 805
      </motion.span>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-wrap justify-center md:justify-between gap-[1.5em] items-center  text-xs text-primary-foreground/40 max-w-[1200px] lg:mx-auto  px-[1.25em]">
        <motion.span
          className="r"
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
          © {new Date().getFullYear()} Fremi v/ Frode Fremmerlid. Alle
          rettigheter reservert.
        </motion.span>
        <motion.span
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
          Utviklet av{" "}
          <strong className="text-primary-foreground/60">
            Hjemmesidehuset
          </strong>{" "}
          | Personvern
        </motion.span>
      </div>
    </div>
  </footer>
);

export default Footer;
