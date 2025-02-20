import { useState, useRef, useEffect } from "react";
import { projectsData } from "../../data/projects";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import Link from "next/link";

const ProjectPreview = ({ project, isActive }) => (
  <div
    className={`w-full max-w-full md:h-[511px] h-[80vh] flex flex-col justify-end p-6 gap-6 rounded-2xl transition-all duration-500 ${
      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{
      background: "white",
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(15px)",
      boxSizing: "border-box",
    }}
  >
    <div className=" w-full h-full flex gap-4 items-start justify-start">
      <div className="flex flex-col gap-4 justify-between h-full items-center w-full ">
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

      <div className="w-full h-full md:flex  flex-col items-center justify-center hidden">
        <div className="flex flex-col gap-8 items-center justify-center">
          {project.metrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
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
  </div>
);

const Projects = ({ id }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const sectionRef = useRef(null);
  const spacerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!spacerRef.current) return;

    const sectionTop = spacerRef.current.offsetTop;
    const sectionHeight = spacerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = latest + viewportHeight;

    const startPin = sectionTop;
    const endPin = sectionTop + sectionHeight - viewportHeight;

    if (latest >= startPin && latest <= endPin) {
      setIsFixed(true);

      const progress = (latest - startPin) / (endPin - startPin);
      const projectIndex = Math.min(
        Math.floor(progress * projectsData.length),
        projectsData.length - 1
      );
      setActiveProject(Math.max(0, projectIndex));
    } else {
      setIsFixed(false);
    }
  });

  const handleProjectClick = (index) => {
    if (!spacerRef.current) return;

    const sectionTop = spacerRef.current.offsetTop;
    const sectionHeight = spacerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    const projectProgress = index / (projectsData.length - 1);
    const targetScroll =
      sectionTop + (sectionHeight - viewportHeight) * projectProgress;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        ref={spacerRef}
        style={{
          height: `${(projectsData.length - 1.5) * 100}vh`,
          transform: "translateY(-70vh)",
          marginTop: "-70vh",
        }}
        className="pointer-events-none"
      />

      <motion.section
        ref={sectionRef}
        id={id}
        className="w-full overflow-hidden flex flex-col justify-center md:justify-start items-center px-10"
        style={{
          position: isFixed ? "fixed" : "relative",
          top: "0%",
          left: 0,
          right: 0,
          backgroundColor: "white",
          zIndex: isFixed ? 40 : -1,
          display: isFixed ? "flex" : "none",
          opacity: isFixed ? 1 : 0,
          pointerEvents: isFixed ? "auto" : "none",
          backgroundImage: "url('/testimonials-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full py-8 px-4 md:px-10 h-screen flex flex-col justify-center items-center"
        >
          <div className="relative z-10 w-[80vw]">
            <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-start md:justify-center items-center gap-16">
              <div className="w-full lg:w-1/2 opacity-0 md:opacity-100">
                <h4 className="text-[#FB4E29] text-lg font-bold mb-8">
                  Featured Partners
                </h4>
                <div className="space-y-6">
                  {projectsData.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => handleProjectClick(index)}
                      className="w-full text-left group"
                      disabled={!isFixed}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <h3
                          className={`text-2xl md:text-3xl font-medium transition-colors duration-300 ${
                            activeProject === index
                              ? "text-black"
                              : "text-gray-500"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <div
                        className="h-[4px] w-full transition-all duration-300"
                        style={{
                          background:
                            activeProject === index ? "#FB4E29" : "#E9E7E7",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative min-h-[511px] flex">
                <div className="w-full">
                  {projectsData.map((project, index) => (
                    <div
                      key={project.id}
                      className={`absolute md:top-1/2 top-[93%] left-0 w-full -translate-y-1/2 transition-all duration-500 ${
                        activeProject === index ? "z-10" : "z-0"
                      }`}
                    >
                      <h4 className="text-[#FB4E29] text-lg font-semibold mb-3 md:hidden block">
                        Featured Partners
                      </h4>
                      <ProjectPreview
                        project={project}
                        isActive={activeProject === index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Projects;
