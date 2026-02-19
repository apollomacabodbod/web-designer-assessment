export default function HomeWelcomeFremi() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[1em]">
        <p className="text-[1.625rem] text-[#2b2b2b] font-openSans font-bold text-center">
          Velkommen til Fremi!
        </p>

        <div className="flex items-center justify-center">
          <svg
            width="60"
            height="4"
            viewBox="0 0 60 4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="4" rx="2" fill="#5ab732" />
          </svg>
        </div>
      </div>
    </>
  );
}
