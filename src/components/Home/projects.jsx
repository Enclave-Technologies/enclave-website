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
  <Link
    href={externalLink}
    target="_blank"
    className="flex flex-col justify-between items-start p-4 md:p-6 w-full md:h-[432px] h-[320px] rounded-[16px] overflow-hidden relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    style={{
      background: `linear-gradient(180deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h3 className="font-bold text-[28px] leading-[140%] text-white w-full">
      {title}
    </h3>

    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="h-10 flex items-start justify-start w-fit transition-opacity duration-300 group-hover:opacity-100 opacity-90">
          {logoImage && (
            <Image
              src={logoImage}
              alt={title}
              width={150}
              height={40}
              className="object-contain h-10 md:w-fit w-[90%]"
            />
          )}
        </div>

        <div className="w-6 h-6 flex items-center justify-center relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13.0034V19.0034C18 19.5339 17.7893 20.0426 17.4142 20.4176C17.0391 20.7927 16.5304 21.0034 16 21.0034H5C4.46957 21.0034 3.96086 20.7927 3.58579 20.4176C3.21071 20.0426 3 19.5339 3 19.0034V8.00342C3 7.47298 3.21071 6.96428 3.58579 6.5892C3.96086 6.21413 4.46957 6.00342 5 6.00342H11"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 3.00342H21V9.00342"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 14.0034L21 3.00342"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <p className="font-semibold text-[18px] leading-[150%] text-white transition-all duration-300 group-hover:text-white/90">
        {description}
      </p>
    </div>

    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
  </Link>
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
            <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-3">
              Featured Works
            </h4>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize max-w-2xl text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              Pioneering Projects That Redefine What&apos;s Possible
            </h2>
          </div>

          <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D] text-center">
            Transforming startups, SMEs and industry giants into digital leaders
          </p>
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

        <Button
          variant="primary navigation"
          title="Explore All Projects"
          link="/works"
          rounded={true}
        />
      </div>
    </section>
  );
};

export default Projects;
