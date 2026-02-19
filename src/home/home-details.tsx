import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeDetails() {
  return (
    <>
      {" "}
      <div className="bg-[#fff] mt-[5em] border border-gray-200">
        <div className="grid sm:grid-cols-2 md:grid-cols-4  max-w-[1200px] lg:mx-auto  px-[1.25em]  py-[1.3em]">
          {/* Email */}
          <motion.div
            className="flex items-center gap-[0.5em] justify-start md:justify-center "
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#5ab732"
                d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
              />
            </svg>

            <Link
              to="/"
              className="text-[#555] font-openSans text-[0.875rem] font-normal hover:underline"
            >
              fro-fre@outlook.com
            </Link>
          </motion.div>

          {/* Phone */}

          <motion.div
            className="flex items-center gap-[0.5em] justify-start md:justify-center"
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#5ab732"
                d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.2 14.4C14.5 14.1 14.9 14 15.3 14.2C16.5 14.6 17.8 14.8 19 14.8C19.6 14.8 20 15.2 20 15.8V19C20 19.6 19.6 20 19 20C10.2 20 3 12.8 3 4C3 3.4 3.4 3 4 3H7.5C8.1 3 8.5 3.4 8.5 4C8.5 5.2 8.7 6.5 9.1 7.7C9.2 8.1 9.1 8.5 8.8 8.8L6.6 10.8Z"
              />
            </svg>

            <Link
              to="/"
              className="text-[#555] font-openSans text-[0.875rem] font-normal hover:underline"
            >
              926 04 072
            </Link>
          </motion.div>

          {/* Location */}

          <motion.div
            className="flex items-center gap-[0.5em] justify-start md:justify-center"
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#5ab732"
                d="M12 2C8.7 2 6 4.7 6 8C6 12.5 12 22 12 22C12 22 18 12.5 18 8C18 4.7 15.3 2 12 2ZM12 10.5C10.6 10.5 9.5 9.4 9.5 8C9.5 6.6 10.6 5.5 12 5.5C13.4 5.5 14.5 6.6 14.5 8C14.5 9.4 13.4 10.5 12 10.5Z"
              />
            </svg>

            <p className="text-[#555] font-openSans text-[0.875rem] font-normal">
              , 6260 SKODJE
            </p>
          </motion.div>

          {/* Globe */}

          <motion.div
            className="flex items-center gap-[0.5em] justify-start md:justify-center"
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#5ab732"
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.65 20 12C20 14.08 19.19 15.98 17.9 17.39Z"
              />
            </svg>

            <p className="text-[#555] font-openSans text-[0.875rem] font-normal">
              Orgnr 912 166 805
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
