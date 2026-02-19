import financeTwo from "src/assets/home-fremi/finance-two.svg";
import finance from "src/assets/home-fremi/finance.svg";
import education from "src/assets/home-fremi/education.svg";

import { motion } from "framer-motion";

export default function HomeFremiServices() {
  return (
    <>
      <div className="grid lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[1em]">
        <div className="flex items-start gap-[1em]">
          <motion.img
            src={financeTwo}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
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

          <div className="flex flex-col gap-[0.5em]">
            <motion.p
              className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans"
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
              La fagfolk gjøre jobben
            </motion.p>

            <motion.p
              className="text-[#555] text-[0.9375rem] font-openSans font-normal"
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
              For å sikre at jobben gjøres riktig, og for å unngå overraskelser
              er det alltid best å la fagfolk gjøre jobben
            </motion.p>
          </div>
        </div>

        <div className="flex items-start gap-[1em]">
          <motion.img
            src={finance}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
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

          <div className="flex flex-col gap-[0.5em]">
            <motion.p
              className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans"
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
              Til avtalt tid og pris
            </motion.p>

            <motion.p
              className="text-[#555] text-[0.9375rem] font-openSans font-normal"
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
              Vi holder det vi lover, og holder deg som kunde oppdatert til
              enhver tid.
            </motion.p>
          </div>
        </div>

        <div className="flex items-start gap-[1em]">
          <motion.img
            src={education}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
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

          <div className="flex flex-col gap-[0.5em]">
            <motion.p
              className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans"
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
              Fleksibel aktør
            </motion.p>

            <motion.p
              className="text-[#555] text-[0.9375rem] font-openSans font-normal"
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
              Vi kartlegger kundens behov og tilpasser deretter en løsning som
              begge partner er fornøyd med.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
