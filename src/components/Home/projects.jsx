import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

const ProjectCard = ({
  title,
  description,
  image,
  logoImage,
  gradientColors,
  externalLink = "#",
}) => (
  <div
    className="flex flex-col justify-between items-start p-6 w-full md:h-[432px] h-[300px] rounded-[16px] overflow-hidden relative"
    style={{
      background: `linear-gradient(180deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h3 className="font-bold text-[24px] leading-[140%] text-white w-full">
      {title}
    </h3>

    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="h-10">
          {logoImage && (
            <Image
              src={logoImage}
              alt={title}
              width={160}
              height={40}
              className="object-contain h-10 w-fit"
            />
          )}
        </div>

        <Link href={externalLink} target="_blank">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12.5 8.5L21 0"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 0H21V7"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>

      <p className="font-semibold text-base leading-[150%] text-white">
        {description}
      </p>
    </div>
  </div>
);

const Projects = ({ id }) => {
  const projects = [
    {
      title: "Website Development",
      description:
        "Crafts flexible, multi-faceted spaces for beauty therapists",
      image: "/company-logos/atelier.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://atelier-shan.webflow.io/",
    },
    {
      title: "Social Media Development",
      description:
        "Facilitates community of fitness enthusiasts via social media",
      image: "/company-logos/roju.png",
      logoImage: "/affiliate-logos/athena-logo.png",
      gradientColors: ["rgba(255, 0, 92, 0.2)", "rgba(255, 0, 92, 0.9)"],
      externalLink: "https://athenasocial.webflow.io/",
    },
    {
      title: "Software Development",
      description:
        "Builds AI-Powered identity infrastructure with web3 solutions",
      image: "/company-logos/para.png",
      logoImage: "/affiliate-logos/Vector.png",
      gradientColors: ["rgba(254, 110, 0, 0.2)", "rgba(254, 110, 0, 0.9)"],
      externalLink:
        "https://explorer.parallelchain.io/explorer?network=Mainnet",
    },
    {
      title: "Solutions Prototyping",
      description: "Creates edu-tech solutions to deliver technology courses",
      image: "/company-logos/xccelerate.png",
      logoImage: "/affiliate-logos/Xccelerate-logo.png",
      gradientColors: ["rgba(68, 81, 255, 0.2)", "rgba(68, 81, 255, 0.9)"],
      externalLink: "https://www.xccelerate.co/",
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center py-16 md:py-0 px-8 w-full gap-12 bg-[#FAFAFA]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center gap-6 max-w-[782px]">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[#FB4E29] text-lg font-bold mb-3">
              Featured Works
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize max-w-xl text-center">
              Pioneering Projects That Redefine What&apos;s Possible
            </h2>
          </div>

          <p className="text-base text-[#26120D] text-center leading-[150%]">
            Transforming startups, SMEs and industry giants into digital leaders
          </p>

          <Button
            variant="primary navigation"
            title="Explore All Projects"
            link="/works"
            rounded={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full mt-14">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              logoImage={project.logoImage}
              gradientColors={project.gradientColors}
              externalLink={project.externalLink}
            />
          ))}
        </div>

        {/* Second Row of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full">
          {projects.slice(2, 4).map((project, index) => (
            <ProjectCard
              key={index + 2}
              title={project.title}
              description={project.description}
              image={project.image}
              logoImage={project.logoImage}
              gradientColors={project.gradientColors}
              externalLink={project.externalLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
