import Image from "next/image";

export const Partners = ({ id }) => {
  return (
    <section id={id}>
      <div className="inner-container flex flex-col gap-32 items-center">
        <div className="w-full flex flex-col md:flex-col items-center justify-between gap-4 md:gap-48">
          <div className="flex flex-col gap-24 w-full items-center">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-4">
                <h3 className="text-center">
                  Empowering Startups & Businesses Alike
                </h3>
                <h2 className="px-24 lg:px-64 text-center">
                  TRUSTED BY 30+ PARTNERS IN HONG KONG & APAC
                </h2>
              </div>
              <div className="flex flex-row flex-wrap gap-4 justify-center">
                {Array.from({ length: 24 }).map((_, index) => (
                  <Image
                    key={index}
                    src={`/apple-logo.png`}
                    width={120}
                    height={100}
                    alt="Web Design"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-row overflow-x-scroll w-full gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <ProjectTile
                  id={`Project ${num}`}
                  key={`Project ${num}`}
                  imageURL={`/Project ${num}.png`}
                />
              ))}
            </div>
            <button className="cta-button">Case Studies</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectTile = ({ id, imageURL }) => {
  return (
    <Image key={id} src={imageURL} width={2400} height={100} alt="Web Design" />
  );
};
