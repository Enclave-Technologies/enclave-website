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
    className="flex flex-col md:flex-row items-start p-0 w-full h-auto md:h-[200px] bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-[15px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)] rounded-[12px] transition-transform duration-300 hover:scale-[1.02]"
  >
    <div className="w-full md:w-[200px] h-[200px] bg-gray-100 rounded-t-[12px] md:rounded-l-[12px]">
      <Image
        src={step.image}
        width={200}
        height={200}
        alt={step.title}
        className="w-full h-full object-cover rounded-t-[12px] md:rounded-tr-none md:rounded-l-[12px]"
      />
    </div>
    <div className="flex-1 p-6">
      <h3 className="text-[22px] md:font-bold font-semibold mb-3">
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
      className="relative w-full min-h-screen bg-white px-4 md:px-10"
    >
      <div className="absolute left-0 top-0 w-full md:w-2/5 h-full">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/steps-bg.png')`,
            backgroundSize: "600px 100%",
            backgroundPosition: "left top",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 md:sticky md:top-0 relative md:h-screen flex items-start md:p-16 p-6 md:py-[20vh] py-0">
          <div>
            <h4 className="text-[#FB4E29] text-lg font-medium mb-4">
              Our Process
            </h4>
            <h2 className="text-2xl lg:text-4xl font-medium mb-6 capitalize">
              The 3 Magic Steps
            </h2>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <div className="md:py-[20vh] py-0 md:px-16 px-6 flex flex-col space-y-10">
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
