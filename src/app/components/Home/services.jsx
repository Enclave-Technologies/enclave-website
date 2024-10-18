import Image from "next/image";

const servicesList = [
  {
    index: 1,
    key: "design",
    title: "Design",
    redirectURL: null,
    tags: [
      "Brand Design",
      "Web Design",
      "Mobile Design",
      "User Experience Design",
    ],
  },
  {
    index: 2,
    key: "development",
    title: "Development",
    redirectURL: null,
    tags: [
      "Website Development",
      "Mobile Development",
      "Web Applications",
      "E-commerce",
    ],
  },
  {
    index: 3,
    key: "growth",
    title: "Growth Hacking",
    redirectURL: null,
    tags: [
      "SEO Improvement",
      "Analytics & Reporting",
      "Search Engine Marketing",
      "Email Marketing",
    ],
  },
];

export const Services = ({ id }) => {
  return (
    <section id={id}>
      <div className="inner-container flex flex-col items-center gap-12 overflow-hidden !max-w-none">
        <div className="flex flex-col items-center gap-4">
          <h3>Discover</h3>
          <div className="flex flex-col gap-6 items-center">
            <h2>Our Services</h2>
            <p className="text-center">
              It is our mission to be the best User Experience focused
              application development agency.
            </p>
            <p className="text-center w-full md:w-2/3">
              Our UX and UI web design process is centered around empathy -
              having a complete picture of your end-users and target audiences
              preferences. As well as a mobile-first approach (responsive
              design), so that we’re building great experiences that scale
              across devices.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
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
      </div>
    </section>
  );
};

const ServiceTab = ({ index, key, title, redirectURL, tags }) => {
  return (
    <div className="w-full md:w-1/3 max-w-96">
      <div className="service-tab">
        <div className="flex flex-row items-end justify-between p-4">
          <div
            id={`service-tab-{key}`}
            className="relative w-full flex flex-col items-start justify-between gap-12 md:gap-24"
          >
            <span className="service-title z-20">
              {index}. {title}
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-2 md:gap-4 z-20 max-w-full">
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
                  src={`/Service-Image-${index}.png`}
                  width={120}
                  height={100}
                  alt={key}
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
