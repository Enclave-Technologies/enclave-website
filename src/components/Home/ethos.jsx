import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { contactLink } from "../../utils/links";

const Ethos = ({ id }) => {
  return (
    <section id={id}>
      <div className="inner-container flex flex-col gap-32 items-center">
        <div className="w-full flex flex-col md:flex-col items-center justify-between gap-24 md:gap-36">
          <div className="flex flex-col gap-28 w-full items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-center">Our Development Process</h3>
              <div className="flex flex-col gap-6 text-center items-center">
                <h2 className="text-center">
                  Design and Development that Doesn&apos;t Compromise
                </h2>
                <p style={{ maxWidth: "70rem" }}>
                  We employ a 3-step process for developing products led by
                  product strategy and design thinking followed by development
                  and result measurement to continually refine your product and
                  deliver the best possible experience to your end users.
                </p>
              </div>
            </div>
            <div id="steps" className="flex flex-row gap-12 items-start">
              <Step
                id={"strategy"}
                imageURL={"/strategize-illustration.svg"}
                title={"Strategy & Alignment"}
                description={
                  "A strong foundation is the key to a successful project. We work meticulously with our partners to ensure alignment on the final outcomes & discuss development plans"
                }
              />
              <Step
                id={"design"}
                imageURL={"/design-illustration.svg"}
                title={"Design & Development"}
                description={
                  "Once the foundation has been laid down, it’s time to start designing and developing. Our team of talented designers and developers work with dedication to make sure the final product meets our client’s requirements."
                }
              />
              <Step
                id={"iterate"}
                imageURL={"/develop-illustration.svg"}
                title={"Measure & Iterate"}
                description={
                  "No solution is perfect at once. After launching the project, we support our clients for at least 2-months to make sure they win."
                }
              />
              {/* <Step
                id={"Deployment"}
                imageURL={"/develop-illustration.svg"}
                title={"Deploy"}
                description={
                  "Our focus is on ensuring a seamless launch that maximizes user adoption and satisfaction while monitoring performance post-launch for continuous improvement."
                }
              /> */}
            </div>
          </div>
          <div>
            <Image
              src="/Venn Diagram.svg"
              width={600}
              height={100}
              alt="Our Mission"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Button variant="primary" link={contactLink} title="Get in touch" />
            <Button variant="secondary" link={contactLink} title="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ id, imageURL, title, description }) => {
  return (
    <div className="flex flex-col gap-4 items-center flex-1">
      <Image
        src={imageURL}
        width={90}
        height={100}
        alt={`Step-{id}`}
        unoptimized
      />
      <h6 className="text-center text-2xl font-semibold">{title}</h6>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Ethos;
