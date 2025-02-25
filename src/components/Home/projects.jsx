import { useState, useRef } from "react";
import { projectsData } from "../../data/projects";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../Button";

const ProjectPreview = ({ project, progress = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="project-preview w-full md:bg-white bg-transparent max-w-full md:h-[511px] h-full flex flex-col justify-end p-4 md:p-6 gap-6 rounded-2xl transition-transform duration-300"
    style={{
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
      backdropFilter: "blur(15px)",
      boxSizing: "border-box",
    }}
  >
    <div className="w-full h-full flex gap-4 items-start justify-start md:flex-row flex-col">
      <div className="flex flex-col md:gap-4 gap-2 justify-between h-full items-center w-full">
        <div className="relative w-full h-full flex-1 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={350}
            className="object-contain md:w-[200px] w-full md:h-[220px] h-[35vh]"
          />
        </div>

        <Button
          variant="secondary"
          title="Visit Featured Website"
          link={project.url}
          target="_blank"
          secondary={true}
        />
      </div>

      <div className="w-full h-full items-center justify-center hidden md:flex">
        <div className="flex md:flex-col flex-row gap-8 items-center justify-center overflow-x-auto w-full">
          {project.metrics.map((metric) => (
            <div key={metric.description} className="flex flex-col">
              <h2 className="md:text-2xl text-xl font-bold text-black text-center">
                {metric.value}
              </h2>
              <p className="md:text-base text-sm w-full  whitespace-nowrap text-[#6E605D] text-center">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-col md:justify-between justify-start md:gap-0 gap-4 items-center w-full  h-full">
      <div className="flex flex-col md:justify-between justify-start md:gap-0 gap-4 items-center w-full overflow-x-auto">
     <div className="flex md:hidden flex-row gap-4 items-start justify-start w-full ">
        {project.metrics.map((metric) => (
          <div key={metric.description} className="flex flex-col">
            <h2 className="md:text-2xl text-lg font-bold text-black text-center">
              {metric.value}
            </h2>
            <p className="md:text-base text-sm w-full  whitespace-nowrap text-[#6E605D] text-center">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-2 pb-2 w-full">
        {project.keywords.map((keyword, index) => (
          <span
            key={index}
            style={{
              background:
                "linear-gradient(107.56deg, #FBB729 2.2%, #FB296D 95.31%)",
            }}
            className="px-4 py-2 text-white rounded-full text-xs whitespace-nowrap"
          >
            {keyword}
          </span>
        ))}
      </div>
     </div>
    </div>
    <p className="text-sm text-[#6E605D] text-start md:flex hidden">
      {project.description}
    </p>
  </motion.div>
);

const Projects = ({ id }) => {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useScroll().scrollY.onChange((latest) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { top } = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const progress = Math.abs(top) / (container.offsetHeight - viewportHeight);

    // Ensure first project is visible earlier and transitions are smoother
    const adjustedProgress = Math.max(0, Math.min(1, progress * 1.1));
    const projectIndex = Math.floor(
      adjustedProgress * (projectsData.length - 1)
    );

    setActiveProject(
      Math.max(0, Math.min(projectIndex, projectsData.length - 1))
    );
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.99, 1],
    [1, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full px-0 py-0"
      style={{
        minHeight: `${(projectsData.length + 1) * 100}vh`,
        // marginTop: "25vh",
      }}
      id={id}
    >
      <motion.div
        ref={sectionRef}
        className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          opacity,
          backgroundImage: "url('/testimonials-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full py-8 px-6 md:px-10 h-screen flex flex-col justify-center items-center">
          <div className="relative z-10 md:w-[80vw] w-full">
            <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-start md:justify-center items-center gap-16">
              <motion.div
                className="w-full lg:w-1/2 opacity-0 md:opacity-100"
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-[#FB4E29] text-lg font-bold mb-8">
                  Featured Partners
                </h4>
                <div className="space-y-6">
                  {projectsData.map((project, index) => (
                    <motion.button
                      key={project.id}
                      onClick={() => {
                        const element = containerRef.current;
                        const projectPosition =
                          (index / (projectsData.length - 1)) *
                          (element.scrollHeight - window.innerHeight);
                        window.scrollTo({
                          top: element.offsetTop + projectPosition,
                          behavior: "smooth",
                        });
                      }}
                      className="w-full text-left group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <h3
                          className={`text-2xl md:text-3xl font-medium transition-colors duration-500 ${
                            activeProject === index
                              ? "text-black"
                              : "text-gray-500"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <motion.div
                        className="h-[4px] w-full"
                        initial={false}
                        animate={{
                          backgroundColor:
                            activeProject === index ? "#FB4E29" : "#E9E7E7",
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <div className="w-full lg:w-1/2 relative md:min-h-[511px] flex">
                <div className="w-full">
                  {projectsData.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="absolute md:top-1 top-0 left-0 w-full -translate-y-1/2"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: activeProject === index ? 1 : 0,
                        y: activeProject === index ? 0 : 50,
                        zIndex: activeProject === index ? 10 : 0,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h4 className="text-[#FB4E29] text-lg font-semibold mb-1 md:hidden block">
                        Featured Partners
                      </h4>
                      <div className="flex md:hidden w-full mt-4">
                        {activeProject === index && (
                          <h5 className="text-2xl font-bold text-black border-b-4 border-[#FB4E29] mb-4 w-full">
                            {project.title}
                          </h5>
                        )}
                      </div>
                      <ProjectPreview
                        project={project}
                        progress={activeProject === index ? 1 : 0}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
