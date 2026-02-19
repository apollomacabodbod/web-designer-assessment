import financeTwo from "src/assets/home-fremi/finance-two.svg";
import finance from "src/assets/home-fremi/finance.svg";
import education from "src/assets/home-fremi/education.svg";

export default function HomeFremiServices() {
  return (
    <>
      <div className="grid lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[1em]">
        <div className="flex items-start gap-[1em]">
          <img
            src={financeTwo}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
          />

          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans">
              La fagfolk gjøre jobben
            </p>

            <p className="text-[#555] text-[0.9375rem] font-openSans font-normal">
              For å sikre at jobben gjøres riktig, og for å unngå overraskelser
              er det alltid best å la fagfolk gjøre jobben
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[1em]">
          <img
            src={finance}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
          />

          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans">
              Til avtalt tid og pris
            </p>

            <p className="text-[#555] text-[0.9375rem] font-openSans font-normal">
              Vi holder det vi lover, og holder deg som kunde oppdatert til
              enhver tid.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[1em]">
          <img
            src={education}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
          />

          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans">
              Fleksibel aktør
            </p>

            <p className="text-[#555] text-[0.9375rem] font-openSans font-normal">
              Vi kartlegger kundens behov og tilpasser deretter en løsning som
              begge partner er fornøyd med.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
