import { useState, useRef, useEffect } from "react";
import { projectsData } from "../../data/projects";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const ProjectPreview = ({ project, isActive }) => (
  <div
    className={`w-full max-w-[500px] h-[511px] flex flex-col justify-end p-6 gap-6 rounded-2xl transition-all duration-500 ${
      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{
      background:
        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(15px)",
      boxSizing: "border-box",
    }}
  >
    <div className="relative w-full flex-grow">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain rounded-lg"
      />
    </div>
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row gap-2 overflow-x-auto pb-2 w-full">
        {project.keywords.map((keyword, index) => (
          <span
            key={index}
            className="p-3 bg-[#FB4E29] text-white rounded-full text-xs whitespace-nowrap"
          >
            {keyword}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 ml-4"
      >
        <FiExternalLink color="#FB4E29" size={20} />
      </a>
    </div>
    <p className="text-sm text-start">{project.description}</p>
  </div>
);

const Projects = ({ id }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const sectionRef = useRef(null);
  const spacerRef = useRef(null);

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
          // display: isFixed ? "flex" : "none",
          height: `${(projectsData.length - 2) * 100}vh`,
        }}
        className="pointer-events-none"
      />

      <motion.section
        ref={sectionRef}
        id={id}
        className="w-full overflow-hidden flex flex-col justify-center items-center"
        style={{
          position: isFixed ? "fixed" : "relative",
          top: '0%',
          left: 0,
          right: 0,
          backgroundColor: "white",
          zIndex: isFixed ? 40 : -1,
          display: isFixed ? "flex" : "none",
          opacity: isFixed ? 1 : 0,
          transition: "all 0.3s ease-in-out",
          pointerEvents: isFixed ? "auto" : "none",
        }}
      >
        <div className="w-full h-full py-8 px-4 md:px-10">
          <div
            className="absolute inset-0 opacity-20 transition-opacity duration-300 m-auto"
            style={{
              backgroundImage: `url(${projectsData[activeProject]?.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "70%",
              width: "70%",
              backgroundRepeat: "no-repeat",
              left: "50%",
              top: "80%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
              <div className="w-full lg:w-1/2">
                <h4 className="text-[#FB4E29] text-lg font-medium mb-8">
                  Featured Projects
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
                              : "text-gray-400"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <div
                        className="h-[2px] w-full transition-all duration-300"
                        style={{
                          background:
                            activeProject === index ? "#FB4E29" : "#E9E7E7",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative">
                <div className="">
                  {projectsData.map((project, index) => (
                    <div
                      key={project.id}
                      className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                        activeProject === index ? "z-10" : "z-0"
                      }`}
                    >
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
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
