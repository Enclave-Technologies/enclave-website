import Image from "next/image";

export const Partners = ({ id }) => {
  return (
    <div id={id} className="bg-white/100">
      <div className="inner-container flex flex-col gap-32 items-center bg-white">
        <div className="w-full flex flex-col md:flex-col items-center justify-between gap-4 md:gap-48">
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-center">
                  Delivery Quality Solutions Since 2020
                </h3>
                <h2 className="text-center">TRUSTED BY TOP TEAMS IN APAC</h2>
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
                          width: "160px",
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
                          width: "160px",
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
            {/* <button className="cta-button">Case Studies</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectTile = ({ id, imageURL }) => {
  return (
    <Image
      key={id}
      src={imageURL}
      width={600}
      height={100}
      alt="Web Design"
      unoptimized
    />
  );
};
