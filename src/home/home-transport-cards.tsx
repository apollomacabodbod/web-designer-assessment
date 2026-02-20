import gravingImg from "src/assets/home-transport-cards/service-graving.jpg";
import dreneringImg from "src/assets/home-transport-cards/service-drenering.jpg";
import tomteImg from "src/assets/home-transport-cards/service-tomteutgraving.jpg";
import masseImg from "src/assets/home-transport-cards/service-massetransport.jpg";

const services = [
  {
    title: "Graving",
    img: gravingImg,
    desc: "Vi utfører alt innen grunnarbeid og graving. Trenger du hjelp ved planering for grunnmur er vi de rette til saken. Vi graver også grøfter for legging av vann- og avløpsrør. Velg oss, og du får en solid aktør innen grunn- og betong!",
  },
  {
    title: "Drenering",
    img: dreneringImg,
    desc: "God drenering rundt huset hindrer fukt- og kondensskader i grunnmuren. Om du kun isolerer innvendig er faren større for at det oppstår fukt. Vi tar jobben for deg!",
  },
  {
    title: "Tomteutgraving",
    img: tomteImg,
    desc: "Vi graver tomtene for deg! Et bra resultat krever godt grunnarbeid. Vi utfører alltid grunnarbeid i henhold til Norsk Standard og vi har lang erfaring innen faget!",
  },
  {
    title: "Massetransport",
    img: masseImg,
    desc: "Vi sørger for at overskuddsmasse etter graving blir fraktet vekk. Vi skaffer også jord, stein og singel ved behov. Ta kontakt for priser.",
  },
];

const HomeTransportCards = () => (
  <section
    id="tjenester"
    className=" bg-background max-w-[1200px] lg:mx-auto  px-[1.25em]"
  >
    <div className="">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTransportCards;
