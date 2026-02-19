import { useState } from "react";
import { Link } from "react-router-dom";
import humberger from "src/assets/header/humberger.svg";
import Sidebar from "./side-bar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full  transition-all duration-1000 ease-in-out z-40 ${" bg-[#222222] shadow-lg"}`}
      >
        <div className="flex flex-col  max-w-[1200px] lg:mx-auto  px-[1.25em] py-[1em]">
          <div className="flex items-center justify-between gap-[1.5em]">
            <div className="flex items-center  cursor-pointer ">
              <Link
                to={"/"}
                className=" text-[#fff] font-openSans font-bold text-[1.3rem] lg:text-[1.875rem]"
              >
                {/* <img
                  src={logoLogistix}
                  alt=""
                  className="min-w-[12.5em] object-cover object-center"
                /> */}
                FREMI V/ FRODE FREMMERLID
              </Link>
            </div>

            <div className="lg:flex lg:flex-col hidden">
              <div className="flex items-center gap-[2em]">
                <div className="lg:flex lg:flex-col hidden">
                  <div className="flex items-center  lg:gap-[1em] ">
                    <Link
                      to={"/"}
                      className="text-[#fff] font-openSans text-[0.9375rem] font-bold uppercase"
                    >
                      {" "}
                      Forside
                    </Link>

                    <Link
                      to={"/testimontials"}
                      className="text-[#fff] font-openSans text-[0.9375rem] font-bold uppercase "
                    >
                      {""}
                      Tjenester
                    </Link>
                    <Link
                      to={"/pricing"}
                      className="text-[#fff] font-openSans text-[0.9375rem] font-bold uppercase "
                    >
                      {" "}
                      Om oss
                    </Link>
                    <Link
                      to={"/blog"}
                      className="text-[#fff] font-openSans text-[0.9375rem] font-bold uppercase"
                    >
                      {" "}
                      Kontakt
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col lg:hidden cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <img
                src={humberger}
                alt=""
                width={23}
                height={0}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close sidebar on overlay click
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
}
