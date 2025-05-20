import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { Code, Clock, Globe } from "../icons/index";
import Testimonial from "../Testimonial";

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
    className="flex flex-col justify-between items-center gap-4 w-full h-full overflow-hidden relative group transition-all duration-300"
  >
    <div className="h-full flex flex-col items-center justify-between gap-6">
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-3">
          <h3 className="font-bold text-[28px] leading-[140%] text-black text-center w-full">
            {title}
          </h3>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
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
      externalLink: "https://www.atelier-shan.com/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
    },
    {
      title: "Athena Social",
      description:
        "Facilitates community of fitness enthusiasts via social media",
      image: "/company-logos/athena.png",
      logoImage: "/affiliate-logos/Vector.png",
      gradientColors: ["rgba(254, 110, 0, 0.2)", "rgba(254, 110, 0, 0.9)"],
      externalLink: "https://athenasocial.webflow.io/",
      project_industry: "Web3",
      project_time: "12 weeks",
      project_type: "Website",
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center py-16 md:py-32 px-8 w-full gap-12 bg-[#FAFAFA]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-16">
        <div className="flex flex-col items-center gap-6 max-w-4xl">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
              Our Works
            </h4>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize max-w-2xl text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              Impossible Redefined{" "}
            </h2>
          </div>
        </div>
        <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 w-full">
          {projects.map((project, index) => (
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

        <div className="flex flex-row w-full md:justify-end justify-center gap-4">
          <Button
            variant="outline"
            title="Learn More"
            link="/services"
            rounded={true}
            className="min-w-[120px] px-8 py-3 text-[16px] font-bold font-albert"
          />

          <Button
            variant="black navigation"
            title="Projects >"
            link="/works"
            rounded={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
