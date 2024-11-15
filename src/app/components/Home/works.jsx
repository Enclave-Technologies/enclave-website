import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../Button";
import { useMemo } from "react";

const SectionWrapper = ({ children }) => {
  return <section className="">{children}</section>;
};

const ProjectTile = ({ title, tags, imageURL, id, index, year, url }) => {
  const screenWidth = window.screen.availWidth;
  const imageWidth = useMemo(() => {
    if (screenWidth > 1024) return 400;
    else if (screenWidth > 768) return 360;
    else if (screenWidth > 640) return 320;
    else return 320;
  }, [screenWidth]);

  return (
    <div
      id={id}
      className="sticky top-0 w-full bg-white/95 min-h-screen flex flex-row justify-center items-center"
    >
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start">
        <span className="text-[90px] md:text-[180px] lg:text-[120px]">
          0{index}.
        </span>
        <div
          className={`min-w-[320px] w-[${imageWidth}px] flex-col justify-start items-center gap-6 inline-flex`}
        >
          <div
            className={`min-w-[320px] w-[${imageWidth}px] lg:w-[400px] flex flex-row items-center justify-between`}
          >
            <h3 className="font-semibold">{title}</h3>
            <a
              href={url}
              className="flex items-center justify-center bg-black rounded-full w-12 aspect-square"
            >
              <FiArrowUpRight size={20} className="text-white" />
            </a>
          </div>
          <div
            className={`min-w-[320px] w-[${imageWidth}px] lg:w-[400px] aspect-square relative bg-white`}
          >
            <Image src={imageURL} objectFit="contain" fill alt="avante decor" />
          </div>
          <div
            className={`min-w-[320px] w-[${imageWidth}px] lg:w-[400px] flex flex-row items-start gap-2`}
          >
            <div className="flex flex-1 flex-row flex-wrap items-center justify-start gap-2">
              {tags.map((tag, index) => {
                return (
                  <p
                    className="text-sm bg-white text-[#000] rounded-full shadow p-1 px-2"
                    style={{ boxShadow: "0px 0px 2px 0px #000" }}
                    key={title + index}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
            <div className="w-auto">
              <p className="w-auto text-sm bg-black text-[#FFF] rounded-full shadow p-1 px-2">
                {year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Works = ({ id }) => {
  return (
    <SectionWrapper>
      <div className="w-full relative py-16 flex flex-col items-center">
        <h2>FEATURED WORKS</h2>
        <div className="w-full pt-0 lg:pt-20 flex flex-col justify-center gap-40">
          {/* <span className="text-[360px]">WORKS</span> */}
          <ProjectTile
            id={"project-1"}
            title="Athena Social"
            imageURL={"/project-images/athena-social.png"}
            tags={["Brand Design", "Web Design", "Webflow Development"]}
            index={1}
            url="https://athenasocial.webflow.io/"
            year={2024}
          />
          <ProjectTile
            id={"project-3"}
            title="Xccelerate"
            imageURL={"/project-images/xccelerate.png"}
            tags={[
              "Web Design",
              "Web Development",
              "SEO/SEM",
              "Data Analytics",
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
              "Website Design",
              "Web App Design",
              "Web App Development",
            ]}
            index={3}
            url="https://explorer.parallelchain.io"
            year={2023}
          />
          <ProjectTile
            id={"project-4"}
            title="Roju - Jump Rope & Fitness App"
            imageURL={"/project-images/roju.png"}
            tags={["Brand Design", "Web Design", "Web Development"]}
            index={4}
            url="https://roju.app/"
            year={2022}
          />
        </div>
        <Button variant="secondary" title="View More Works" link="/works" />
      </div>
    </SectionWrapper>
  );
};
