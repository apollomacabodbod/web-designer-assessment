// import { useState } from "react";
// import { Link } from "react-router-dom";

import { motion } from "framer-motion";

// export default function HomeContactUsForm() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <>
//       <div className="grid sm:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[2em]">
//         <motion.div
//           className="flex flex-col w-full h-[21.9375em] sm:h-full"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 10 },
//             visible: {
//               opacity: 1,
//               y: 0,
//               transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
//             },
//           }}
//         >
//           <iframe
//             className="w-full h-full"
//             title="Demografie Karte Deutschland"
//             src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B%C3%B8brekka%206,%206260%20Skodje,%20Norway+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//           >
//             <a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
//               Demografie Karte Deutschland
//             </a>
//           </iframe>
//         </motion.div>

//         {/* Contact Form */}

//         <form action="" className="flex flex-col w-full gap-[1em]">
//           <motion.input
//             type="text"
//             className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none"
//             placeholder="Ditt navn"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
//               },
//             }}
//           />

//           <motion.input
//             type="text"
//             className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none"
//             placeholder="Din epost"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
//               },
//             }}
//           />

//           <motion.input
//             type="text"
//             className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none"
//             placeholder="Ditt telefonnummer"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
//               },
//             }}
//           />

//           <motion.textarea
//             placeholder="Din forespørsel"
//             name=""
//             id=""
//             className="bg-[#f2f2f2] py-[1em] px-[1em] text-[#000] text-[0.75rem] font-normal font-openSans placeholder:text-[#000] outline-none min-h-[10em]"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
//               },
//             }}
//           ></motion.textarea>

//           <motion.div
//             className="flex items-center gap-[0.5em]"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
//               },
//             }}
//           >
//             <input
//               type="checkbox"
//               id="agree"
//               checked={checked}
//               onChange={() => setChecked(!checked)}
//               className="w-6 h-6 cursor-pointer accent-[#6b7280]"
//             />

//             <Link
//               to="/"
//               className="text-[#555] font-normal font-openSans text-[0.850rem] sm:text-[0.875rem] hover:underline"
//             >
//               Jeg godtar at opplysningene brukes til kontakt *
//             </Link>
//           </motion.div>

//           <motion.button
//             className="flex items-center self-start bg-[#3598db] px-[2em] py-[0.6em] rounded-full text-[#fff] font-openSans hover:bg-[#2d99c7] transition-colors duration-300 cursor-pointer "
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
//               },
//             }}
//           >
//             Send inn
//           </motion.button>
//         </form>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import { toast } from "sonner";

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Kontakt oss
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          {/* <div className="rounded-xl overflow-hidden shadow-sm border border-border h-[400px]">
            <iframe
              title="Fremi lokasjon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7741.7!2d6.762!3d62.489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616dc5c7a0!2sSkodje!5e0!3m2!1sen!2sno!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}

          <motion.div
            className="flex flex-col w-full h-[21.9375em] sm:h-full"
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
            <input
              type="text"
              placeholder="Ditt navn"
              required
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <input
              type="email"
              placeholder="Din epost"
              required
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <input
              type="tel"
              placeholder="Ditt telefonnummer"
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <textarea
              placeholder="Din forespørsel"
              rows={5}
              required
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
            />
            <label className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mt-0.5 accent-primary"
              />
              Jeg godtar at opplysningene brukes til kontakt *
            </label>
            <button
              type="submit"
              className="self-start bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all"
            >
              Send inn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
