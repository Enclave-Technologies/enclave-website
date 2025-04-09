import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { Code, Clock, Globe } from "../icons/index";

const ProjectCard = ({
  title,
  project_industry,
  project_time,
  project_type,
  description,
  image,
  logoImage,
  gradientColors,
  externalLink = "#",
}) => (
  <Link
    href={externalLink}
    target="_blank"
    className="flex flex-col justify-between items-center gap-4 w-full md:h-[432px] h-[320px] rounded-[16px] overflow-hidden relative group transition-all duration-300"
    // style={{
    //   background: `linear-gradient(180deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%), url(${image})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    // }}
  >
    <div className="h-full flex flex-col items-center justify-between gap-6">
      <div
        className="flex-1 w-full overflow-hidden bg-red-300 object-contain rounded-xl"
        style={{
          background: `linear-gradient(180deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-3">
          <h3 className="font-bold text-[28px] leading-[140%] text-black w-full">
            {title}
          </h3>
          <p>{description}</p>
        </div>
        <div className="w-40">
          <Button
            variant="primary"
            title="Visit Project"
            link={externalLink}
            rounded
          />
        </div>
      </div>
      {/* <div className="flex flex-row gap-3 w-full justify-center">
        <div className="pill">
          <Clock />
          <p className="">{project_time}</p>
        </div>
        <div className="pill">
          <Code />
          <p className="">{project_type}</p>
        </div>
        <div className="pill">
          <Globe />
          <p className="">{project_industry}</p>
        </div>
      </div> */}
    </div>
    {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-[#FB4E29] opacity-10 transition-all duration-300"></div> */}
  </Link>
);

const Projects = ({ id }) => {
  const projects = [
    {
      title: "Atelier Shan",
      description:
        "Crafts flexible, multi-faceted spaces for beauty therapists",
      image: "/company-logos/atelier.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://atelier-shan.com/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
    },
    {
      title: "ParallelChain",
      description:
        "Builds AI-Powered identity infrastructure with web3 solutions",
      image: "/company-logos/para.png",
      logoImage: "/affiliate-logos/Vector.png",
      gradientColors: ["rgba(254, 110, 0, 0.2)", "rgba(254, 110, 0, 0.9)"],
      externalLink: "https://parallelchain.io/",
      project_industry: "Web3",
      project_time: "12 weeks",
      project_type: "Website",
    },
    {
      title: "Xccelerate",
      description: "Creates edu-tech solutions to deliver technology courses",
      image: "/company-logos/xccelerate.png",
      logoImage: "/affiliate-logos/Xccelerate-logo.png",
      gradientColors: ["rgba(68, 81, 255, 0.2)", "rgba(68, 81, 255, 0.9)"],
      externalLink: "https://www.xccelerate.co/",
      project_industry: "Edu-tech",
      project_time: "6 weeks",
      project_type: "Website",
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center py-16 md:py-32 px-8 w-full gap-12 bg-[#FAFAFA]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-24">
        <div className="flex flex-col items-center gap-6 max-w-4xl">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-3">
              Our Portfolio
            </h4>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize max-w-2xl text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              Some Of The Works We’ve Done Over The Years{" "}
            </h2>
          </div>

          <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D] text-center">
            We have worked with clients all over the world for interior
            designers, restaurants, consulting agencies, start ups, doctors,
            accountants, and more. No matter what your business is, we can build
            a solution that is effective, beautiful, performant, and tailored to
            your industry.{" "}
          </p>
        </div>
        <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-6 w-full">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              logoImage={project.logoImage}
              gradientColors={project.gradientColors}
              externalLink={project.externalLink}
              project_industry={project.project_industry}
              project_time={project.project_time}
              project_type={project.project_type}
            />
          ))}
        </div>
        {/* 
        <Button
          variant="primary navigation"
          title="Explore All Projects"
          link="/works"
          rounded={true}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
