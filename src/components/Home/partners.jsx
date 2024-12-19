import Image from "next/image";

export const Partners = ({ id }) => {
  return (
    <section id={id} className="bg-white/100 !min-h-0">
      <div className="inner-container flex flex-col gap-32 items-center bg-white">
        <div className="w-full flex flex-col md:flex-col items-center justify-between gap-4 md:gap-48">
          <div className="flex flex-col gap-8 md:gap-12 w-full items-center">
            <h2 className="text-center">Our Partners</h2>
            <div className="flex flex-row flex-wrap gap-x-8 justify-center items-center">
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
                      height: "140px",
                      width: "140px",
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
            {/* <div className="slider flex flex-row flex-nowrap gap-12 justify-center">
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
      width={600}
      height={100}
      alt="Web Design"
      unoptimized
    />
  );
};
