import financeTwo from "src/assets/home-fremi/finance-two.svg";
import finance from "src/assets/home-fremi/finance.svg";
import education from "src/assets/home-fremi/education.svg";

export default function HomeFremiServices() {
  return (
    <>
      <div className="grid lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[3em] gap-[1em]">
        <div className="flex items-start gap-[1em]">
          <img
            src={financeTwo}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
          />

          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans">
              Let professionals do the job
            </p>

            <p className="text-[#555] text-[0.9375rem] font-openSans font-normal">
              To ensure the job is done correctly, and to avoid surprises, it is
              always best to let professionals do the job.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[1em]">
          <img
            src={finance}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
          />

          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans">
              At the agreed time and price
            </p>

            <p className="text-[#555] text-[0.9375rem] font-openSans font-normal">
              We keep our promises and keep you, the customer, updated at all
              times.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[1em]">
          <img
            src={education}
            alt=""
            className="object-center object-cover w-[1.5em] h-[1.5em]"
          />

          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[#2b2b2b] text-[1.125rem] font-bold font-openSans">
              Flexible player
            </p>

            <p className="text-[#555] text-[0.9375rem] font-openSans font-normal">
              We map the customer's needs and then adapt a solution that both
              partners are satisfied with.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
