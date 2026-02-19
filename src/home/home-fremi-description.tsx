import { motion } from "framer-motion";

export default function HomeFremiDescription() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[1.5em]">
        <motion.p
          className="font-openSans text-[0.9375rem] font-normal text-[#555]"
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
          <span className="text-[#555] text-[0.9375rem] font-bold font-openSans">
            Fremi{" "}
          </span>
          utfører grave-, og entreprenørtjenester innen privat- og
          næringsmarkedet i Møre og Romsdal og omegn. Det er bare å ta kontakt
          med oss angående arbeidsområder, vi er svært fleksible, og vi
          skreddersyr løsninger som er tilpasset våre kunder. Alt arbeid blir
          utført profesjonelt og med svært høy standard. Materialer som anvendes
          er av høy kvalitet fra kjente vareleverandører. Vår styrke er er
          tillit og fokus på beste løsninger samt alltid topp kvalitet.
        </motion.p>

        <motion.p
          className="text-[#555] font-openSans text-[0.9375rem] font-bold "
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
          Kontakt oss for en hyggelig og uforpliktende prat!
        </motion.p>
      </div>
    </>
  );
}
