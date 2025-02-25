import { stepsData } from "../../data/steps";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const StepCard = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="flex flex-col lg:flex-row items-start p-0 w-full h-auto lg:h-[200px] bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-[15px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)] rounded-[12px] transition-transform duration-300 hover:scale-[1.02]"
  >
    <div className="w-full lg:w-[200px] h-full bg-gray-100 rounded-t-[12px] lg:rounded-l-[12px]">
      <Image
        src={step.image}
        width={200}
        height={200}
        alt={step.title}
        className="w-full lg:h-full h-[150px] object-cover rounded-t-[12px] lg:rounded-tr-none lg:rounded-l-[12px]"
      />
    </div>
    <div className="flex-1 p-6">
      <h3 className="text-[22px] lg:font-bold font-semibold mb-3">
        {step.title}
      </h3>
      <p className="text-[#6E605D] text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  </motion.div>
);

const Steps = ({ id }) => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative w-full min-h-screen bg-white px-0 lg:px-10"
    >
      <div className="absolute left-0 top-0 w-4/5 lg:w-2/5 h-full">
        <div
          className="sticky top-0"
          style={{
            height: "100vh",
            backgroundImage: `url('/steps-bg.png')`,
            backgroundSize: "90%",
            backgroundPosition: "left top",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-0 lg:px-8 flex flex-col lg:flex-row py-12 lg:py-0">
        <div className="w-full lg:w-2/5 lg:sticky lg:top-0 relative lg:h-screen flex items-start lg:p-16 p-6 lg:py-[20vh] py-0">
          <div>
            <h4 className="text-[#FB4E29] text-lg font-medium mb-4">
              Our Process
            </h4>
            <h2 className="text-2xl lg:text-4xl font-medium mb-6 capitalize">
              The 3 Magic Steps
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-3/5">
          <div className="lg:py-[20vh] py-0 lg:px-16 px-6 flex flex-col space-y-10">
            <p className="text-[#6E605D] text-lg leading-relaxed max-w-xl">
              We employ a 3-step process led by strategy and goal setting
              followed by design thinking and implementation to make sure we
              solve the right problem to unlock the true potential of your
              organization.
            </p>
            {stepsData.map((step, index) => (
              <div key={step.id}>
                <StepCard step={step} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
