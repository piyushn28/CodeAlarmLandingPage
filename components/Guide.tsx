import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p
          className="uppercase regular-18 -mt-1 
        mb-3
        text-blue-500
        bold-12
        "
        >
          Empowering Your Coding Journey
        </p>
        <div
          className="
          flex flex-wrap justify-between gap-5 lg:gap-10"
        >
          <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">
            Grow Together, Code Together
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Join our collaborative coding community. Engage in peer-to-peer
            coding sessions, tackle challenges together, and foster a supportive
            environment where learning is a shared journey.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/system_design.svg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 
        2xl:rounded-5xl
        "
        />

        <div
          className="absolute flex bg-white py-8 pl-5 pr-7
        gap-4 rounded-3xl border shadow-md md:left-[5%] lg:top-20
        "
        >
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Final</p>
              </div>
              <p className="bold-20 mt-2">Ninja 🥷🏻</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Initially</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Noob 🤡
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
