import React from "react";
import Link from "next/link";
import { Button } from "../Button";
import SectionHeader from "../SectionHeader";
import Image from "next/image";

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
  tags,
}) => (
  <Link
    href={externalLink}
    target="_blank"
    className="flex flex-col justify-between items-center w-full md:min-h-[432px] min-h-[520px] rounded-[16px] overflow-hidden relative group transition-all duration-300 border-[1px] border-[#BCB6B4] hover:border-[#000]"
  >
    <div className="h-full w-full flex flex-col items-center justify-between rounded-xl overflow-hidden bg-[#FAFAFA]">
      <div className="flex-1 h-full w-full relative">
        <Image src={image} fill objectFit="cover" />
      </div>
      <div className="flex flex-col gap-6 p-6 w-full">
        <div className="flex flex-col items-start gap-4">
          <h5>{title}</h5>
          <p>{description}</p>
          <div className="flex flex-row gap-2">
            {tags.map((tag, index) => (
              <div
                className="px-3 py-1 bg-[#E9E7E7]"
                key={`${title}-tag-${index}`}
              >
                <p className="text-[10px] md:text-xs">{tag}</p>
              </div>
            ))}
          </div>
          <Link className="text-sm" href={externalLink}>
            Visit Project &gt;
          </Link>
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
      title: "App Development",
      description:
        "Crafts flexible, multi-faceted spaces for beauty therapists",
      image: "/project-1.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://atelier-shan.com/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
      tags: ["E-Commerce", "Web Development", "User Friendly"],
    },
    {
      title: "Web3 Solutions",
      description:
        "Builds AI-Powered identity infrastructure with web3 solutions",
      image: "/project-3.png",
      logoImage: "/affiliate-logos/Vector.png",
      gradientColors: ["rgba(254, 110, 0, 0.2)", "rgba(254, 110, 0, 0.9)"],
      externalLink: "https://parallelchain.io/",
      project_industry: "Web3",
      project_time: "12 weeks",
      project_type: "Website",
      tags: ["E-Commerce", "Web Development", "User Friendly"],
    },
    {
      title: "AI Integration",
      description: "Creates edu-tech solutions to deliver technology courses",
      image: "/project-2.png",
      logoImage: "/affiliate-logos/Xccelerate-logo.png",
      gradientColors: ["rgba(68, 81, 255, 0.2)", "rgba(68, 81, 255, 0.9)"],
      externalLink: "https://www.xccelerate.co/",
      project_industry: "Edu-tech",
      project_time: "6 weeks",
      project_type: "Website",
      tags: ["E-Commerce", "Web Development", "User Friendly"],
    },
    {
      title: "Process Automation",
      description: "Creates edu-tech solutions to deliver technology courses",
      image: "/project-4.png",
      logoImage: "/affiliate-logos/Xccelerate-logo.png",
      gradientColors: ["rgba(68, 81, 255, 0.2)", "rgba(68, 81, 255, 0.9)"],
      externalLink: "https://www.xccelerate.co/",
      project_industry: "Edu-tech",
      project_time: "6 weeks",
      project_type: "Website",
      tags: ["E-Commerce", "Web Development", "User Friendly"],
    },
  ];

  return (
    <section id={id}>
      <div className="max-w-7xl px-8 flex flex-col justify-center gap-12 md:gap-16 h-full overflow-hidden">
        <SectionHeader
          tag={"Portfolio"}
          title={"Our Recent Projects"}
          description={"Explore Our Innovative Software Development Projects."}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-6 w-full">
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
              tags={project.tags}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center  mx-auto">
          <Button variant="primary" title="View All" link="/works" />
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
