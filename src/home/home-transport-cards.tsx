import imageOne from "src/assets/home-transport-cards/image-one.jpg";
import imageTwo from "src/assets/home-transport-cards/image-two.jpg";
import imageThree from "src/assets/home-transport-cards/image-three.jpg";
import imageFour from "src/assets/home-transport-cards/image-four.jpg";

export default function HomeTransportCards() {
  const data = [
    {
      id: 1,
      title: "Graving",
      description:
        "Vi utfører alt innen grunnarbeid og graving. Trenger du hjelp ved planering for grunnmur er vi de rette til saken. Vi graver også grøfter for legging av vann- og avløpsrør. Velg oss, og du får en solid aktør innen grunn- og betong!",
      image: imageFour,
    },

    {
      id: 2,
      title: "Drenering",
      description:
        "God drenering rundt huset hindrer fukt- og kondensskader i grunnmuren. Om du kun isolerer innvendig er faren større for at det oppstår fukt. Vi tar jobben for deg!",
      image: imageOne,
    },

    {
      id: 3,
      title: "Tomteutgraving",
      description:
        "Vi graver tomtene for deg! Et bra resultat krever godt grunnarbeid. Vi  utfører alltid grunnarbeid i henhold til Norsk Standard og vi har lang erfaring innen faget!",
      image: imageThree,
    },

    {
      id: 4,
      title: "Massetransport",
      description:
        "Vi sørger for at overskuddsmasse etter graving blir fraktet vekk. Vi skaffer også jord, stein og singel ved behov. Ta kontakt for priser.",
      image: imageTwo,
    },
  ];
  return (
    <>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[2em] mt-[3.5em]">
        {data.map((item) => (
          <div className="flex flex-col gap-[1em]" key={item.id}>
            <img
              src={item.image}
              alt=""
              className="object-cover object-center aspect-[147/80]"
            />

            <p className="text-center font-openSans text-[1.125rem] font-bold text-[#2b2b2b]">
              {item.title}
            </p>

            <p className="text-center font-openSans font-normal text-[0.9375rem] text-[#555] ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
