import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2b2b2b]">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] py-[2.5em]">
          <motion.p
            className="font-openSans text-[#fff] text-[0.875rem] font-normal "
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
            <motion.span
              className="font-extrabold text-[#fff] text-[0.875rem] cursor-pointer "
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
              Hjemmesidehuset
            </motion.span>{" "}
            |{" "}
            <motion.span
              className="font-extrabold text-[#fff] text-[0.875rem] cursor-pointer "
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
              Personvern
            </motion.span>
          </motion.p>
        </div>
      </div>
    </>
  );
}
