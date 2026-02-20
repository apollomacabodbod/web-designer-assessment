import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Du må godta at opplysningene brukes til kontakt.");
      return;
    }
    toast.success("Takk for din henvendelse! Vi tar kontakt snart.");
    (e.target as HTMLFormElement).reset();
    setAgreed(false);
  };

  return (
    <section id="kontakt" className="bg-background mt-[7em]">
      <div className="container  max-w-[1200px] lg:mx-auto  px-[1.25em]">
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
          Kontakt oss
        </motion.h2>
        <div className="w-16 h-1 bg-[#d48b0b] mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="flex flex-col w-full h-[21.9375em] md:h-full"
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
            <iframe
              className="w-full h-full"
              title="Demografie Karte Deutschland"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B%C3%B8brekka%206,%206260%20Skodje,%20Norway+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
                Demografie Karte Deutschland
              </a>
            </iframe>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Ditt navn"
              required
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
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
            />
            <motion.input
              type="email"
              placeholder="Din epost"
              required
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
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
            />
            <motion.input
              type="tel"
              placeholder="Ditt telefonnummer"
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
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
            />
            <motion.textarea
              placeholder="Din forespørsel"
              rows={5}
              required
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
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
            />
            <motion.label
              className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer"
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
              <motion.input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mt-0.5 accent-primary"
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
              />
              Jeg godtar at opplysningene brukes til kontakt *
            </motion.label>
            <motion.button
              type="submit"
              className="self-start bg-[#d48b0b] text-base font-semibold px-8 py-3 rounded-lg brightness-110 "
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
              Send inn
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
