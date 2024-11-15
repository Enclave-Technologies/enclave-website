import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { contactLink } from "@/app/utils/links";

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
                id={"Strategize"}
                imageURL={"/strategize-illustration.svg"}
                title={"Strategy"}
                description={
                  "Our goal is to create a solid foundation that guides the entire development process and ensures alignment with product vision and business goals."
                }
              />
              <Step
                id={"Design"}
                imageURL={"/design-illustration.svg"}
                title={"Design"}
                description={
                  " We ensure that the product not only meets functional requirements but also provides an engaging user experience."
                }
              />
              <Step
                id={"Development"}
                imageURL={"/develop-illustration.svg"}
                title={"Development"}
                description={
                  "We bring the designs to life through technical implementation. Our team collaborates closely to build a robust, scalable product using best practices in software development."
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
          <Button variant="secondary" link={contactLink} title="Learn More" />
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
