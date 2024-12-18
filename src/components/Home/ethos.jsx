import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { contactLink } from "../../utils/links";

const Ethos = ({ id }) => {
  return (
    <section id={id}>
      <div className="inner-container flex flex-col gap-32 items-center">
        <div className="w-full flex flex-col items-start justify-start gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm">Our Development Process</h3>
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-center">The 3 Magic Steps</h2>
              <p className="lead">
                We employ a 3-step process led by strategy and design thinking
                followed by development and result measurement to continually
                refine your product and deliver the best possible experience to
                your end users.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-14 w-full items-center justify-between">
            <div
              id="steps"
              className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8 items-start"
            >
              <Step
                id={"strategy"}
                imageURL={"/icons/strategy-illustration.svg"}
                title={"Strategy & Alignment"}
                description={
                  "A strong foundation is the key to a successful project. We work meticulously with our partners to ensure alignment on the final outcomes & discuss development plans"
                }
              />
              <Step
                id={"design"}
                imageURL={"/icons/design-illustration.svg"}
                title={"Design & Development"}
                description={
                  "Once the foundation has been laid down, it’s time to start designing and developing. Our team of talented designers and developers work with dedication to make sure the final product meets our client’s requirements."
                }
              />
              <Step
                id={"iterate"}
                imageURL={"/icons/measure-illustration.svg"}
                title={"Measure & Iterate"}
                description={
                  "No solution is perfect at once. After launching the project, we support our clients for at least 2-months to make sure they win."
                }
              />
            </div>
            <div>
              <Image
                src="/venn-diagram.svg"
                width={600}
                height={100}
                alt="Our Mission"
              />
            </div>
          </div>

          {/* <div className="flex flex-row items-center justify-center gap-2">
            <Button variant="primary" link={contactLink} title="Get In Touch" />
            <Button variant="secondary" link={contactLink} title="Read More" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

const Step = ({ id, imageURL, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start flex-1">
      <Image
        src={imageURL}
        width={40}
        height={100}
        alt={`Step-{id}`}
        unoptimized
      />
      <div className="flex flex-col gap-4">
        <h6 className=" text-xl">{title}</h6>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Ethos;
