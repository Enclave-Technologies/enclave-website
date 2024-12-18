"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../Button";
import { useEffect, useMemo, useState } from "react";

const SectionWrapper = ({ children }) => {
  return <section className="w-full">{children}</section>;
};

const ProjectTile = ({ title, tags, imageURL, id, index, year, url }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.screen.availWidth);
  }, []);

  const imageWidth = useMemo(() => {
    if (screenWidth > 1024) return 640;
    else if (screenWidth > 768) return 580;
    else if (screenWidth > 640) return 480;
    else return 320;
  }, [screenWidth]);

  return (
    <div
      id={id}
      className="sticky top-0 w-full bg-white min-h-screen flex flex-row justify-center items-center"
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start">
        <span className="text-[90px] md:text-[180px] lg:text-[120px]">
          0{index}.
        </span>
        <div
          className={`w-full md:w-5/12 flex-col justify-start items-center gap-6 inline-flex`}
        >
          <div className={`w-full aspect-square relative bg-white`}>
            <Image
              src={imageURL}
              style={{ objectFit: "contain" }}
              fill
              alt="avante decor"
            />
          </div>
          <div className={`w-full flex flex-row items-start gap-4`}>
            <div className={`w-full flex flex-row items-start justify-between`}>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="font-semibold">{title}</h3>
                <Tags tags={tags} />
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <a
                  href={url}
                  className="flex items-center justify-center bg-[var(--primary-color)] text-white rounded-full w-auto px-4 py-1"
                >
                  {year}
                </a>
                {/* <div className="w-auto">
                  <p className="w-auto text-sm bg-black text-[#FFF] rounded-full shadow p-1 px-2">
                    {year}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Tags = ({ tags }) => {
  return (
    <div className="flex flex-1 flex-row flex-wrap items-center justify-start gap-2">
      {tags.map((tag, index) => {
        return (
          <p
            className="text-sm bg-white text-[#000] rounded-full border-[1px] border-gray-300 p-1 px-2"
            key={index}
          >
            {tag}
          </p>
        );
      })}
    </div>
  );
};

export const Works = ({ id }) => {
  return (
    <section id={id} className="w-full">
      <div className="w-full relative py-16 flex flex-col items-center">
        <h2>Our Past Works</h2>
        <div className="w-full pt-0 lg:pt-20 flex flex-col justify-center gap-40">
          {/* <span className="text-[360px]">WORKS</span> */}
          <ProjectTile
            id={"project-1"}
            title="Athena Social"
            imageURL={"/project-images/athena-social.png"}
            tags={["Brand Design", "UI/UX Design", "Web Development"]}
            index={1}
            url="https://athenasocial.webflow.io/"
            year={2024}
          />
          <ProjectTile
            id={"project-3"}
            title="Xccelerate"
            imageURL={"/project-images/xccelerate.png"}
            tags={[
              "Website Design",
              "UI/UX Development",
              "Workflow Automation",
            ]}
            index={2}
            url="https://xccelerate.co"
            year={2024}
          />
          <ProjectTile
            id={"project-2"}
            title="ParallelChain Explorer"
            imageURL={"/project-images/parallelchain.png"}
            tags={[
              "Brand Design",
              "UI/UX Design",
              "Web Development",
              "Mobile Development",
            ]}
            index={3}
            url="https://explorer.parallelchain.io"
            year={2023}
          />
          <ProjectTile
            id={"project-4"}
            title="Roju - Jump Rope & Fitness App"
            imageURL={"/project-images/roju.png"}
            tags={["Mobile App Design", "Mobile App Development"]}
            index={4}
            url="https://roju.app/"
            year={2022}
          />
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-2 w-full">
          <Button variant="primary" title="Get In Touch" link="/works" />
          <Button variant="secondary" title="Explore Portfolio" link="/works" />
        </div>
      </div>
    </section>
  );
};
