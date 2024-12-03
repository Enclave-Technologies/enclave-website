import Image from "next/image";
import { Button } from "../Button";

const servicesList = [
  {
    index: 1,
    key: "design",
    title: "Design",
    redirectURL: null,
    tags: ["Website Design", "UI/UX Design"],
  },
  {
    index: 2,
    key: "development",
    title: "Development",
    redirectURL: null,
    tags: [
      "Website Development",
      "E-commerce Development",
      "Web-App Development",
      "Mobile-App Development",
    ],
  },
  {
    index: 3,
    key: "digital-marketing",
    title: "Digital Marketing",
    redirectURL: null,
    tags: ["SEO", "Google Ads", "Social Media Marketing"],
  },
  {
    index: 3,
    key: "growth-solutions",
    title: "Growth Solutions",
    redirectURL: null,
    tags: ["Data Analytics", "Process Automation"],
  },
];

export const Services = ({ id }) => {
  return (
    <section id={id} className="bg-white">
      <div className="inner-container flex flex-col items-center gap-12 overflow-hidden">
        <div className="flex flex-col items-center gap-4">
          <h3>Our Services</h3>
          <div className="flex flex-col gap-6 items-center ">
            <h2 className="text-center">SOLUTIONS TAILORED FOR YOUR NEEDS</h2>
            <p className="text-center w-full md:w-11/12">
              It is in our DNA to build solutions that help your business grow.
              We take a data-driven approach to design, development and
              marketing to make sure that our solutions perform in the best way
              possible.
            </p>
            <p className="text-center w-full md:w-11/12">
              Our team is a mix of perfectionists and people who want to get
              shit done. But all of us are united by a mission of delivering the
              best possible outcomes to our clients. Our agency is driven by a
              strong desire to keep learning, measuring & building.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 w-full items-stretch">
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
        <div className="flex flex-row items-stretch gap-2">
          <Button variant="primary" title="Get Started" link="/works" />
          <Button variant="secondary" title="Learn More" link="/our-services" />
        </div>
      </div>
    </section>
  );
};

const ServiceTab = ({ index, title, redirectURL, tags }) => {
  return (
    <div className="w-full md:w-5/12 max-w-96 md:max-w-none">
      <div className="service-tab h-full">
        <div className="h-full flex flex-row items-end justify-between p-4">
          <div
            id={`service-tab-${index}`}
            className="relative h-full w-full flex flex-col items-start justify-between gap-12 md:gap-24"
          >
            <span className="service-title z-20">{title}</span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-2 md:gap-2 z-20 max-w-full">
                {tags &&
                  tags.map((tag, index) => (
                    <h3 key={index} className="service-tag">
                      {tag}
                    </h3>
                  ))}
              </div>
              <div className="service-image-container absolute bottom-0 right-0 z-10">
                <Image
                  className="service-image"
                  src={`/service-images/Service-Image-${index}.png`}
                  width={120}
                  height={100}
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
