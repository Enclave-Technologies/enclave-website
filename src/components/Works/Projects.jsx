import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../Button";

const projects = [
  {
    title: "NEIGHBOURHOOD",
    description:
      "A community-driven platform that connects neighbors and local businesses, fostering stronger community bonds and supporting local commerce.",
    image: "/company-logos/neighborhood.png",
    status: "(COMING SOON)",
    link: "/works/neighbourhood",
    longDescription:
      "Creating meaningful connections within neighborhoods through innovative digital solutions.",
  },
  {
    title: "ALIGN HK",
    description:
      "A wellness and fitness platform designed to help Hong Kong residents achieve their health and wellness goals through personalized programs.",
    image: "/service5.png",
    status: "(2023)",
    link: "/works/align-hk",
    longDescription:
      "Transforming wellness experiences in Hong Kong through digital innovation.",
  },
  {
    title: "SRK HAUTE HORLOGERIE",
    description:
      "An exclusive luxury timepiece platform showcasing the finest in horological craftsmanship and heritage.",
    image: "/service3.png",
    status: "(2025)",
    link: "/works/srk",
    longDescription:
      "Elevating the art of luxury timepieces through digital excellence.",
  },
  {
    title: "MOVEMENT FITNESS",
    description:
      "A revolutionary fitness application that combines cutting-edge technology with personalized workout experiences.",
    image: "/service6.png",
    status: "(2025)",
    link: "https://qa-movement-u246s.kinsta.app/",
    longDescription: "Redefining fitness through innovative digital solutions.",
  },
  {
    title: "HOMELEEZ INC.",
    description:
      "A comprehensive real estate platform that simplifies the home-buying and rental process through innovative technology.",
    image: "/service3.png",
    status: "(COMING SOON)",
    link: "/works/homeleez",
    longDescription:
      "Revolutionizing real estate experiences through digital transformation.",
  },
  {
    title: "ATELIER SHAN",
    description:
      "A bespoke fashion and design platform showcasing exclusive collections and custom creations.",
    image: "/company-logos/atelier.png",
    status: "(2025)",
    link: "https://www.atelier-shan.com/",
    longDescription:
      "Crafting digital experiences for luxury fashion and design.",
  },
];

const slideUpAnimation = {
  hidden: {
    y: 30,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Projects = () => (
  <section className="flex flex-col w-full bg-white min-h-screen lg:p-16 p-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-y-20 gap-y-14">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="flex flex-col justify-start items-start gap-[10px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUpAnimation}
        >
          <motion.div
            className="w-full lg:h-[679px] h-[350px] relative overflow-hidden group rounded-[20px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={644}
              height={679}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 rounded-[20px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-[20px]" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              },
            }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-onest font-bold lg:text-[28px] text-[20px] leading-[140%] text-[#121212] w-full mt-2">
              {project.title}
              {project.status && <span className="ml-2">{project.status}</span>}
            </h3>

            <p className="font-albert font-normal lg:text-[18px] text-[16px] leading-[150%] text-[#121212] w-full">
              {project.description}
            </p>

            <Button
              variant="outline"
              title="Learn More"
              link={project.link}
              rounded={true}
              className="p-2"
              target="_blank"
              rel="noopener noreferrer"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
