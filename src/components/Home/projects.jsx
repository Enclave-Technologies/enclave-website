import { useState, useRef } from "react";
import { projectsData } from "../../data/projects";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

const ProjectPreview = ({ project, progress = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="w-full max-w-full md:h-[511px] h-[80vh] flex flex-col justify-end p-6 gap-6 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
    style={{
      background: "white",
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
      backdropFilter: "blur(15px)",
      boxSizing: "border-box",
    }}
  >
    <div className="w-full h-full flex gap-4 items-start justify-start">
      <div className="flex flex-col gap-4 justify-between h-full items-center w-full">
        <div className="relative w-full h-full flex-1 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={350}
            className="object-contain md:w-[200px] w-full md:h-[220px] h-[40vh] pt-[100px] md:pt-0"
          />
        </div>
        <Link
          href={project.url}
          target="_blank"
          className="flex flex-row gap-2 items-center border border-[#FB4E29] rounded-lg py-3 px-6 w-fit"
        >
          <p className="text-sm text-[#FB4E29] text-start">
            Visit Featured Website
          </p>
          <FiExternalLink color="#FB4E29" size={20} />
        </Link>
      </div>

      <div className="w-full h-full md:flex flex-col items-center justify-center hidden">
        <div className="flex flex-col gap-8 items-center justify-center">
          {project.metrics.map((metric) => (
            <div key={metric.description} className="flex flex-col">
              <h2 className="text-2xl font-bold text-black text-center">
                {metric.value}
              </h2>
              <p className="text-base text-[#6E605D] text-center">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row gap-2 overflow-x-auto pb-2 w-full">
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
    <p className="text-sm text-[#6E605D] text-start">{project.description}</p>
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
      className="relative w-full px-0"
      style={{
        minHeight: `${(projectsData.length + 1) * 100}vh`,
        marginTop: "25vh",
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
        <div className="w-full py-8 px-4 md:px-10 h-screen flex flex-col justify-center items-center">
          <div className="relative z-10 w-[80vw]">
            <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-start md:justify-center items-center gap-16">
              <motion.div
                className="w-full lg:w-1/2 md:opacity-100"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
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

              <div className="w-full lg:w-1/2 relative min-h-[511px] flex">
                <div className="w-full">
                  {projectsData.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="absolute md:top-1 top-[93%] left-0 w-full -translate-y-1/2"
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
                      <h4 className="text-[#FB4E29] text-lg font-semibold mb-3 md:hidden block">
                        Featured Partners
                      </h4>
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
