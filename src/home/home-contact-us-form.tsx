import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function HomeContactUsForm() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="grid sm:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[2em]">
        <motion.div
          className="flex flex-col w-full h-[21.9375em] sm:h-full"
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
          <iframe
            className="w-full h-full"
            title="Demografie Karte Deutschland"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B%C3%B8brekka%206,%206260%20Skodje,%20Norway+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
              Demografie Karte Deutschland
            </a>
          </iframe>
        </motion.div>

        {/* Contact Form */}

        <form action="" className="flex flex-col w-full gap-[1em]">
          <motion.input
            type="text"
            className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none"
            placeholder="Ditt navn"
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

          <motion.input
            type="text"
            className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none"
            placeholder="Din epost"
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

          <motion.input
            type="text"
            className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none"
            placeholder="Ditt telefonnummer"
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

          <motion.textarea
            placeholder="Din forespørsel"
            name=""
            id=""
            className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none min-h-[10em]"
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
          ></motion.textarea>

          <motion.div
            className="flex items-center gap-[0.5em]"
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
            <input
              type="checkbox"
              id="agree"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="w-6 h-6 cursor-pointer accent-[#6b7280]"
            />

            <Link
              to="/"
              className="text-[#555] font-normal font-openSans text-[0.850rem] sm:text-[0.875rem] hover:underline"
            >
              Jeg godtar at opplysningene brukes til kontakt *
            </Link>
          </motion.div>

          <motion.button
            className="flex items-center self-start bg-[#3598db] px-[2em] py-[0.6em] rounded-full text-[#fff] font-openSans hover:bg-[#2d99c7] transition-colors duration-300 cursor-pointer "
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
            Send inn
          </motion.button>
        </form>
      </div>
    </>
  );
}
