import { useEffect, useRef, useState } from "react";
import { projectsData } from "../../data/projects";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProjectPreview = ({ project }) => (
  <div
    className="w-[500px] h-[511px] flex flex-col justify-end p-6 gap-6 rounded-2xl"
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
      <div className="flex flex-row gap-2 w-full">
        {project.keywords.map((keyword, index) => (
          <span
            key={index}
            className="p-3 bg-[#FB4E29] text-white rounded-full text-xs whitespace-nowrap"
          >
            {keyword}
          </span>
        ))}
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <FiExternalLink color="#FB4E29" size={20} />
      </a>
    </div>

    <p className="text-sm text-start">{project.description}</p>
  </div>
);

const Projects = ({ id }) => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const stInstance = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titles = gsap.utils.toArray(".project-title");

    titles.forEach((title, index) => {
      const line = title.querySelector(".underline");
      gsap.set(title, {
        color: index === 0 ? "#000000" : "#100805",
        opacity: index === 0 ? 1 : 0.5,
      });
      gsap.set(line, {
        width: "100%",
        backgroundColor: index === 0 ? "#FB4E29" : "#E9E7E7",
      });
    });

    stInstance.current = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=400%",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: true,
      snap: {
        snapTo: 1 / (projectsData.length - 1),
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const newIndex = Math.floor(self.progress * projectsData.length);
        if (newIndex !== activeProject && newIndex < projectsData.length) {
          setActiveProject(newIndex);

          if (bgImageRef.current) {
            gsap.to(bgImageRef.current, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                bgImageRef.current.style.backgroundImage = `url(${projectsData[newIndex]?.image})`;
                gsap.to(bgImageRef.current, { opacity: 0.2, duration: 0.3 });
              },
            });
          }

          titles.forEach((title, index) => {
            const line = title.querySelector(".underline");
            gsap.to(title, {
              color: newIndex === index ? "#000000" : "#100805",
              opacity: newIndex === index ? 1 : 0.5,
              duration: 0.3,
            });
            gsap.to(line, {
              width: "100%",
              backgroundColor: newIndex === index ? "#FB4E29" : "#E9E7E7",
              duration: 0.3,
            });
          });
        }
      },
    });

    return () => {
      if (stInstance.current) {
        stInstance.current.kill();
      }
    };
  }, [activeProject]);

  const handleProjectClick = (index) => {
    if (stInstance.current) {
      const progress = index / (projectsData.length - 1);
      gsap.to(stInstance.current.scroller, {
        scrollTop:
          stInstance.current.start +
          (stInstance.current.end - stInstance.current.start) * progress,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white overflow-hidden px-10"
    >
      <div
        ref={bgImageRef}
        className="absolute inset-0 opacity-20 transition-opacity duration-300 m-auto"
        style={{
          backgroundImage: `url(${projectsData[activeProject]?.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "70%",
          width: "70%",
          backgroundRepeat: "no-repeat",
          left: "50%",
          top: "60%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="w-full h-full px-20 flex flex-col justify-center relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          <div className="flex-3 w-full">
            <h4 className="text-[#FB4E29] text-lg font-medium mb-16">
              Featured Websites
            </h4>
            <div className="space-y-8">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className="project-title cursor-pointer w-full"
                  onClick={() => setActiveProject(index)}
                >
                  <h2
                    className="text-[20px] md:text-[40px] leading-none font-medium mb-4 capitalize"
                    style={{
                      color: activeProject === index ? "#000000" : "#100805",
                      opacity: activeProject === index ? 1 : 0.5,
                    }}
                  >
                    {project.title}
                  </h2>
                  <div
                    className="underline h-[4px] transition-all duration-300"
                    style={{
                      backgroundColor:
                        activeProject === index ? "#FB4E29" : "#E9E7E7",
                      width: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-2 w-full">
            <div className="relative">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute top-0 right-0 transition-all duration-500 ${
                    activeProject === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <ProjectPreview project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
