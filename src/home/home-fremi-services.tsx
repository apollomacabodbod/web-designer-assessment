import { Users, Clock, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Users,
    title: "La fagfolk gjøre jobben",
    desc: "For å sikre at jobben gjøres riktig, og for å unngå overraskelser er det alltid best å la fagfolk gjøre jobben.",
  },
  {
    icon: Clock,
    title: "Til avtalt tid og pris",
    desc: "Vi holder det vi lover, og holder deg som kunde oppdatert til enhver tid.",
  },
  {
    icon: Handshake,
    title: "Fleksibel aktør",
    desc: "Vi kartlegger kundens behov og tilpasser deretter en løsning som begge parter er fornøyd med.",
  },
];

const HomeFremiServices = () => (
  <section id="om-oss" className="bg-secondary mt-[4em] ">
    <div className="container max-w-[1200px] lg:mx-auto  px-[1.25em]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
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
      </motion.h2>
      <div className="w-16 h-1 bg-[#d48b0b] mx-auto mb-10 rounded-full" />

      <motion.p
        className="text-center text-muted-foreground leading-relaxed mb-6"
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
        <strong className="text-foreground">Fremi</strong> utfører grave-, og
        entreprenørtjenester innen privat- og næringsmarkedet i Møre og Romsdal
        og omegn. Det er bare å ta kontakt med oss angående arbeidsområder, vi
        er svært fleksible, og vi skreddersyr løsninger som er tilpasset våre
        kunder. Alt arbeid blir utført profesjonelt og med svært høy standard.
        Materialer som anvendes er av høy kvalitet fra kjente vareleverandører.
        Vår styrke er tillit og fokus på beste løsninger samt alltid topp
        kvalitet.
      </motion.p>
      <motion.p
        className="text-center text-primary font-semibold mb-16 text-[#191c2b]"
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

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="flex flex-col items-center text-center gap-3"
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"
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
              <v.icon className="text-primary text-[#d48b0b] " size={24} />
            </motion.div>
            <motion.h3
              className="font-bold text-lg"
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
              {v.title}
            </motion.h3>
            <motion.p
              className="text-sm text-muted-foreground"
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
              {v.desc}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFremiServices;
