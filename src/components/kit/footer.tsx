export default function Footer() {
  return (
    <>
      <div className="bg-[#2b2b2b]">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] py-[2.5em]">
          <p className="font-openSans text-[#fff] text-[0.875rem] font-normal ">
            Utviklet av{" "}
            <span className="font-extrabold text-[#fff] text-[0.875rem]  ">
              Hjemmesidehuset
            </span>{" "}
            |{" "}
            <span className="font-extrabold text-[#fff] text-[0.875rem] ">
              Personvern
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
