import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { motion } from "framer-motion";
import Link from "next/link";

const services = {
  "website-design": { icon: "/icons/icon_web_design.png", title: "Web Design" },
  "e-commerce": { icon: "/icons/icon_ecommerce.png", title: "E-Commerce" },
  seo: { icon: "/icons/icon_seo.png", title: "SEO" },
  sxo: { icon: "/icons/icon_sxo.png", title: "SXO" },
  "app-dev": { icon: "/icons/icon_appdev.png", title: "App Development" },
};

const fadeInAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const ProjectCard = ({
  title,
  fromServices,
  image,
  externalLink = "#",
  tags,
}) => (
  <div className="flex flex-col justify-between items-center gap-4 w-full md:w-[calc(50%-24px)] h-full overflow-hidden relative transition-all duration-300">
    <div className="h-full flex flex-col md:flex-col justify-between gap-6">
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation}
      >
        <Link href={externalLink} target="_blank" rel="noopener noreferrer">
          <motion.div
            className="cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              src={image}
              alt={title}
              width={700}
              height={700}
              className="transition-transform duration-300 w-full h-full"
            />
          </motion.div>
        </Link>
      </motion.div>

      <div className="flex flex-col gap-6 w-full justify-between">
        <div className="flex flex-col justify-between items-start gap-3">
          <h3 className="font-bold text-[24px] md:text-[32px] leading-[120%] text-black text-start w-full">
            {title}
          </h3>

          {!fromServices && (
            <div className="flex flex-row gap-2">
              {tags.map((tag, index) => {
                return (
                  <div
                    className="flex flex-row gap-2 items-center justify-start"
                    key={index}
                  >
                    {
                      <Image
                        src={services[tag].icon}
                        height={16}
                        width={16}
                        alt={services[tag].title}
                        className="w-6 h-6"
                      />
                    }
                    {/* <p className="text-center md:text-start text-[14px] md:text-[16px] leading-[150%]">
          {services[tag].title}
        </p> */}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* <div className="flex flex-row w-full md:items-end items-center justify-start my-4 pr-1 flex-grow flex-1">
          <Button
            variant="outline"
            title="VISIT"
            rounded={true}
            className="min-w-[120px] px-8 py-3 text-[16px] font-bold font-albert"
            link={externalLink}
            target="_blank"
          />
        </div> */}
      </div>
    </div>
  </div>
);

const Projects = ({ id, fromServices = false }) => {
  const projects = [
    {
      title: "ATELIER SHAN",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/Atelier_Shan.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://www.atelier-shan.com/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
      tags: ["website-design", "seo"],
    },
    {
      title: "SRK HAUTE HORLOGERIE",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/SRKHH.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://www.srk-hautehorlogerie.com/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
      tags: ["website-design", "seo", "sxo"],
    },
    {
      title: "AMARTA SARI",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/amarta.png",
      logoImage: "/company-logos/Sleepyhead.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://amarta-sari.webflow.io/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
      tags: ["website-design", "app-dev"],
    },
    {
      title: "ETERNA LUXE",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/eterna.png",
      logoImage: "/company-logos/Sleepyhead.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://eterna-luxe.webflow.io/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
      tags: ["website-design", "seo", "e-commerce"],
    },
    {
      title: "GO GYM",
      description:
        "Building an engaged fitness community through strategic social media integration. Empowering fitness enthusiasts to connect, share, and grow together while achieving their wellness goals.",
      image: "/company-logos/elysian.png",
      logoImage: "/affiliate-logos/atelier-logo.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "https://elysian-tennis.webflow.io/",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
      tags: ["website-design", "seo", "e-commerce"],
    },
    {
      title: "SLEEPYHEAD",
      description:
        "Revolutionizing beauty spaces with innovative, multi-functional design solutions that enhance therapist workflow and client experience. Creating elegant, efficient environments that blend form and function.",
      image: "/company-logos/Sleepyhead.png",
      logoImage: "/company-logos/Sleepyhead.png",
      gradientColors: ["rgba(109, 79, 59, 0.2)", "rgba(109, 79, 59, 0.9)"],
      externalLink: "#",
      project_industry: "Interior Design",
      project_time: "8 weeks",
      project_type: "Website",
      tags: ["website-design", "seo", "e-commerce"],
    },
  ];

  const tags = [
    {
      title: "Website Design",
      icon: "/icons/icon_web_design.png",
    },
    {
      title: "SEO",
      icon: "/icons/icon_seo.png",
    },
    {
      title: "SEM",
      icon: "/icons/icon_sxo.png",
    },
    {
      title: "E-Commerce",
      icon: "/icons/icon_ecommerce.png",
    },
    {
      title: "App Development",
      icon: "/icons/icon_appdev.png",
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center py-16 md:py-32 px-6 sm:px-[60px] lg:px-[120px] w-full gap-12 bg-[#FAFAFA]"
    >
      <div className="w-full flex flex-col items-center gap-4 md:gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[#FB4E29] text-[14px] md:text-[16px] lg:text-[20px] font-normal uppercase">
              Featured Projects
            </h4>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold capitalize text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              Working with Global Brands
            </h2>
            {!fromServices && (
              <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                {tags.map((tag, index) => (
                  <div
                    className="flex flex-row gap-2 items-center justify-start"
                    key={index}
                  >
                    {
                      <Image
                        src={tag.icon}
                        height={16}
                        width={16}
                        alt={tag.title}
                        className="w-6 h-6"
                      />
                    }
                    <p className="text-center md:text-start text-[14px] md:text-[16px] leading-[150%]">
                      {tag.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-12 w-full mt-2">
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
              tags={project.tags}
              fromServices={fromServices}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
