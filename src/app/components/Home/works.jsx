import Image from "next/image";

export const Works = ({ id }) => {
  return (
    <section id={id}>
      <div className="inner-container flex flex-col gap-32 items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-48">
          <div className="flex flex-col gap-12 w-full md:w-3/5">
            <div className="flex flex-col gap-4">
              <h3>
                Your business is not a template, then why should your website be
                one?
              </h3>
              <div className="flex flex-col gap-6">
                <h2>Solutions that convert</h2>
                <p>
                  If your website suffers from poor engagement, low search
                  engine rankings or confusing brand messages - it’s hurting
                  your business. From the ground up, our custom solutions are
                  made only for you, so that you can get on with doing business,
                  better than your competitors.
                </p>
              </div>
            </div>
            <div id="steps" className="flex flex-row gap-6 items-start">
              <Step
                id={"Strategize"}
                imageURL={"/strategize-illustration.svg"}
                title={"Strategize"}
                description={
                  "We design websites that are not only visually stunning, but also convert visitors into customers."
                }
              />
              <Step
                id={"Web Design"}
                imageURL={"/design-illustration.svg"}
                title={"Design"}
                description={
                  "We design websites that are not only visually stunning, but also convert visitors into customers."
                }
              />
              <Step
                id={"Web Development"}
                imageURL={"/develop-illustration.svg"}
                title={"Develop"}
                description={
                  "We design websites that are not only visually stunning, but also convert visitors into customers."
                }
              />
            </div>
            <button className="cta-button">Upgrade Now</button>
          </div>
          <div>
            <Image
              src="/venn-diagram.svg"
              width={800}
              height={100}
              alt="Web Design"
            />
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
      </div>
    </section>
  );
};

const Step = ({ id, imageURL, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={imageURL} width={40} height={100} alt="" />
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
};

const ProjectTile = ({ id, imageURL }) => {
  return (
    <Image key={id} src={imageURL} width={2400} height={100} alt="Web Design" />
  );
};
