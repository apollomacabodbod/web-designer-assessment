import { Users, Clock, Handshake } from "lucide-react";

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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Velkommen til Fremi!
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />

      <p className="text-center text-muted-foreground leading-relaxed mb-6">
        <strong className="text-foreground">Fremi</strong> utfører grave-, og
        entreprenørtjenester innen privat- og næringsmarkedet i Møre og Romsdal
        og omegn. Det er bare å ta kontakt med oss angående arbeidsområder, vi
        er svært fleksible, og vi skreddersyr løsninger som er tilpasset våre
        kunder. Alt arbeid blir utført profesjonelt og med svært høy standard.
        Materialer som anvendes er av høy kvalitet fra kjente vareleverandører.
        Vår styrke er tillit og fokus på beste løsninger samt alltid topp
        kvalitet.
      </p>
      <p className="text-center text-primary font-semibold mb-16 text-[#191c2b]">
        Kontakt oss for en hyggelig og uforpliktende prat!
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <v.icon className="text-primary text-[#262b19]" size={24} />
            </div>
            <h3 className="font-bold text-lg">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFremiServices;
