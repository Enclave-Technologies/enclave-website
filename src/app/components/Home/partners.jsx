import Image from "next/image";

export const Partners = ({ id }) => {
  return (
    <section id={id}>
      <div className="inner-container flex flex-col gap-32 items-center">
        <div className="w-full flex flex-col md:flex-col items-center justify-between gap-4 md:gap-48">
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-center">
                  Empowering Startups & Businesses Alike
                </h3>
                <h2 className="text-center">
                  TRUSTED BY BUSINESSES IN HONG KONG & SINGAPORE
                </h2>
              </div>
              <div className="slider-container">
                <div className="slider flex flex-row flex-nowrap gap-12 justify-start items-center">
                  {[
                    "pcl",
                    "xcc",
                    "nbhd",
                    "mvmt",
                    "athena",
                    "athena-2",
                    "fca",
                    "hollo",
                    "roju",
                    "push",
                    "payphone",
                  ].map((image, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          height: "200px",
                          width: "180px",
                        }}
                      >
                        <Image
                          src={`/company-logos/logo-${image}.png`}
                          fill={true}
                          alt={`logo-${image}`}
                          style={{
                            objectFit: "contain",
                            filter: `grayscale(1)`,
                          }}
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="slider flex flex-row flex-nowrap gap-12 justify-center">
                  {[
                    "pcl",
                    "xcc",
                    "nbhd",
                    "mvmt",
                    "athena",
                    "athena-2",
                    "fca",
                    "hollo",
                    "roju",
                    "push",
                    "payphone",
                  ].map((image, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          height: "200px",
                          width: "180px",
                        }}
                      >
                        <Image
                          src={`/company-logos/logo-${image}.png`}
                          fill={true}
                          alt={`logo-${image}`}
                          style={{
                            objectFit: "contain",
                            filter: `grayscale(1)`,
                          }}
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row overflow-x-scroll w-full gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <ProjectTile
                  id={`Project ${num}`}
                  key={`Project ${num}`}
                  imageURL={`/Project ${num}.png`}
                />
              ))}
            </div> */}
            {/* <button className="cta-button">Case Studies</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectTile = ({ id, imageURL }) => {
  return (
    <Image
      key={id}
      src={imageURL}
      width={2400}
      height={100}
      alt="Web Design"
      unoptimized
    />
  );
};
