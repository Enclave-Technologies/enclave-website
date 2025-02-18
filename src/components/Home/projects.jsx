import { useEffect, useRef, useState } from "react";
import { projectsData } from "../../data/projects";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectPreview = ({ project }) => (
  <div
    className="w-[500px] h-[511px] flex flex-col justify-end items-end p-6 gap-6 rounded-2xl"
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
    <div className="flex flex-row gap-2 w-full">
      {project.keywords.map((keyword, index) => (
        <span
          key={index}
          className="px-6 py-3 bg-[#FB4E29] text-white rounded-full text-xs whitespace-nowrap"
        >
          {keyword}
        </span>
      ))}
    </div>
  </div>
);

const Projects = ({ id }) => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titles = gsap.utils.toArray(".project-title");

    titles.forEach((title, index) => {
      const line = title.querySelector(".underline");
      if (index === 0) {
        gsap.set(title, { color: "#000000", opacity: 1 });
        gsap.set(line, { width: "100%", backgroundColor: "#FB4E29" });
      } else {
        gsap.set(title, { color: "#100805", opacity: 0.5 });
        gsap.set(line, { width: "100%", backgroundColor: "#E9E7E7" });
      }
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${projectsData.length * 100}%`,
      pin: true,
      onUpdate: (self) => {
        const newIndex = Math.round(self.progress * (projectsData.length - 1));
        setActiveProject(newIndex);

        // Update background image
        if (bgImageRef.current) {
          gsap.to(bgImageRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              bgImageRef.current.style.backgroundImage = `url(${projectsData[newIndex].image})`;
              gsap.to(bgImageRef.current, { opacity: 0.1, duration: 0.3 });
            },
          });
        }

        titles.forEach((title, index) => {
          const line = title.querySelector(".underline");
          if (index === newIndex) {
            gsap.to(title, { color: "#000000", opacity: 1, duration: 0.3 });
            gsap.to(line, {
              width: "100%",
              backgroundColor: "#FB4E29",
              duration: 0.3,
            });
          } else {
            gsap.to(title, { color: "#100805", opacity: 0.5, duration: 0.3 });
            gsap.to(line, {
              width: "100%",
              backgroundColor: "#E9E7E7",
              duration: 0.3,
            });
          }
        });
      },
    });
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      <div
        ref={bgImageRef}
        className="absolute inset-0 opacity-10 transition-opacity duration-300 m-auto"
        style={{
          backgroundImage: `url(${projectsData[activeProject].image})`,
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
        <div className="flex justify-between items-start w-full">
          <div className="flex-3">
            <h4 className="text-[#FB4E29] text-lg font-medium mb-16">
              Featured Websites
            </h4>

            <div className="space-y-8">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className="project-title cursor-pointer"
                  onClick={() => setActiveProject(index)}
                >
                  <h2
                    className="text-[20px] md:text-[40px] leading-none font-medium mb-4 transition-all duration-300 capitalize"
                    style={{
                      color: activeProject === index ? "#000000" : "#100805",
                      opacity: activeProject === index ? 1 : 0.5,
                    }}
                  >
                    {project.title}
                  </h2>
                  <div
                    className="underline h-[2px] transition-all duration-300"
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

          <div className="flex-2">
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
