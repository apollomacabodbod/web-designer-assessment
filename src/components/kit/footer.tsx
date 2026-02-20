const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 mt-[5em]">
    <div className="container py-8 flex flex-wrap justify-between items-center gap-4 text-sm max-w-[1200px] lg:mx-auto  px-[1.25em]">
      <span>✉ fro-fre@outlook.com</span>
      <span>📞 926 04 072</span>
      <span>📍 6260 Skodje</span>
      <span>🏢 Orgnr 912 166 805</span>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-wrap justify-center md:justify-between gap-[1.5em] items-center  text-xs text-primary-foreground/40 max-w-[1200px] lg:mx-auto  px-[1.25em]">
        <span className="r">
          © {new Date().getFullYear()} Fremi v/ Frode Fremmerlid. Alle
          rettigheter reservert.
        </span>
        <span>
          Utviklet av{" "}
          <strong className="text-primary-foreground/60">
            Hjemmesidehuset
          </strong>{" "}
          | Personvern
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
