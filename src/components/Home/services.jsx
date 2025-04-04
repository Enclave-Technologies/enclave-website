import Image from "next/image";
import { Button } from "../Button";

const servicesList = [
  {
    index: 1,
    key: "smo",
    title: "SEO",
    redirectURL: null,
    tags: [
      "Keyword Planning",
      "SEO Auditing",
      "Content Creation",
      "Technical SEO",
    ],
  },
  {
    index: 2,
    key: "smo",
    title: "SMO",
    redirectURL: null,
    tags: [
      "LinkedIn Marketing",
      "Instagram Marketing",
      "Facebook Marketing",
      "YouTube Marketing",
    ],
  },
  {
    index: 3,
    key: "digital-marketing",
    title: "Website Design & Development",
    redirectURL: null,
    tags: [
      "Website Design",
      "Website Development",
      "Website Copywriting",
      "Deployment & Analytics",
    ],
  },
];

export const Services = ({ id }) => {
  return (
    <section id={id} className="bg-white">
      <div className="inner-container flex flex-col items-center gap-12">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-center">Our Services</h2>
          <p className="lead">
            We build solutions in a way that are sure to help your business
            grow. At each stage of development, we take a data-driven approach
            to design, development and marketing to make sure that our solutions
            perform in the best way possible.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full items-stretch">
          {servicesList.map((service, index) => (
            <ServiceTab
              index={service.index}
              key={service.key}
              title={service.title}
              redirectURL={service.redirectURL}
              tags={service.tags}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-2 w-full">
          <Button variant="primary" title="Get Started" link="/contact" />
          <Button variant="secondary" title="Learn More" link="#works" />
        </div>
      </div>
    </section>
  );
};

const ServiceTab = ({ index, title, redirectURL, tags }) => {
  return (
    <div className="w-full max-w-96 md:max-w-none">
      <div className="service-tab h-full">
        <div className="h-full flex flex-row items-end justify-between p-4">
          <div
            id={`service-tab-${index}`}
            className="relative h-full w-full flex flex-col items-start justify-between gap-4 md:gap-8"
          >
            <span className="service-title z-20">{title}</span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-2 md:gap-2 z-20 max-w-full">
                {tags &&
                  tags.map((tag, index) => (
                    <p key={index} className="service-tag">
                      {index + 1}. {tag}
                    </p>
                  ))}
              </div>
              <div className="service-image-container absolute bottom-0 right-0 z-10">
                <Image
                  className="service-image"
                  src={`/service-images/Service-Image-${index}.png`}
                  width={40}
                  height={40}
                  alt={title}
                  unoptimized
                />
              </div>
            </div>
          </div>
          {/* <div className="-translate-y-4">
            <Image
              className="service-arrow-black"
              src="/service-arrow-black.png"
              width={100}
              height={200}
              alt={key}
              unoptimized
            />
            <Image
              className="service-arrow-white"
              src="/service-arrow-white.png"
              width={100}
              height={200}
              alt={key}
              unoptimized
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
