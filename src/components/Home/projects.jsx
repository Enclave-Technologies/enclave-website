import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

const ProjectCard = ({ title, description, image, externalLink = "#" }) => (
  <Link
    href={externalLink}
    target="_blank"
    className="flex flex-col justify-between items-center gap-4 w-full h-full overflow-hidden relative group transition-all duration-300"
  >
    <div className="h-full flex flex-col items-center justify-between gap-6">
      <Image
        src={image}
        alt={title}
        width={700}
        height={700}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-3">
          <h3 className="font-bold text-[22px] md:text-[28px] leading-[140%] text-black md:text-start text-center w-full">
            {title}
          </h3>
          <div>
            <p className="text-center md:text-end">{description}</p>

            <div className="flex flex-row w-full md:justify-end justify-center my-4 pr-1">
              <Button
                variant="outline"
                title="Learn More"
                link="/works"
                rounded={true}
                className="min-w-[120px] px-8 py-3 text-[16px] font-bold font-albert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const Projects = ({ id }) => {
  const projects = [
    {
      title: "NEIGHBOURHOOD (COMING SOON)",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/neighborhood.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
    },
    {
      title: "BONAFIDÈ (2025)",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/bonafide.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://www.atelier-shan.com/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
    },
    {
      title: "ATELIER SHAN (2024 - 2025)",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/atelier.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://www.atelier-shan.com/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
    },
    {
      title: "XCCELERATE (2025)",
      description:
        "Building an engaged fitness community through strategic social media integration. Empowering fitness enthusiasts to connect, share, and grow together while achieving their wellness goals.",
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
      className="flex flex-col items-center py-16 md:py-32 px-6 md:px-[120px] w-full gap-12 bg-[#FAFAFA]"
    >
      <div className="w-full flex flex-col items-center gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
              Our Works
            </h4>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              Impossible Redefined{" "}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-12 w-full">
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
      </div>
    </section>
  );
};

export default Projects;
