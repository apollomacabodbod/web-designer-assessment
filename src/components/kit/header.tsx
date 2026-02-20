import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Forside", href: "#forside" },
  { label: "Tjenester", href: "#tjenester" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm ">
        <div className="container flex items-center justify-between h-16 max-w-[1200px] lg:mx-auto  px-[1.25em]">
          <motion.a
            href="#forside"
            className="font-heading text-lg font-bold tracking-tight text-primary-foreground"
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
            FREMI{" "}
            <span className="font-normal text-sm text-primary-foreground/70">
              v/ Frode Fremmerlid
            </span>
          </motion.a>

          {/* Desktop */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
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
                {l.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
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
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden bg-foreground border-t border-primary-foreground/10 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
