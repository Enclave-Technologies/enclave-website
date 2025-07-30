import React from "react";

const Steps = ({ fromServices }) => {
  return (
    <section className="w-full min-h-fit px-0 pb-0 md:pb-16 bg-[#FB4E29]">
      <div className={`w-full mx-auto flex ${fromServices ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col justify-center items-center px-6 md:px-[120px] py-4 md:py-16 gap-6 md:gap-12`}>
        <div
          className="w-full md:w-1/2 md:max-w-[748px] h-[300px] md:h-[647px] bg-cover bg-center flex-none order-0"
          style={{ backgroundImage: 'url("/service8.png")' }}
        />

        <div className="flex flex-col justify-center items-start py-4 md:py-6 gap-4 md:gap-6 w-full h-auto md:h-[318px] flex-1">
          <div className="flex flex-row items-center w-full h-auto">
            <p className="font-onest font-normal text-lg md:text-[24px] leading-[140%] text-[#FAFAFA] flex-grow text-center md:text-left">
              Enclave revamped my design studio website and I couldn&apos;t recommend them more. I had the privilege of working closely with them, and their attention to detail and feedback was key to the development of the website. Their help during the project and follow up afterwards is also very helpful. The result is very satisfying and I will keep using them for other implementations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full h-auto md:h-[51px] mt-2 md:mt-6">
            <div className="flex flex-col justify-center md:items-start items-center w-full">
              <p className="font-albert-sans font-bold text-lg leading-[150%] text-[#FAFAFA] m-0">
                Ketty Shan
              </p>
              <p className="font-albert-sans font-normal text-base leading-[150%] text-[#FAFAFA] m-0">
                Founder & CEO, Atelier Shan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
