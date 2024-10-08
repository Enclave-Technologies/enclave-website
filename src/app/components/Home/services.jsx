import Image from "next/image";

const servicesList = [
  {
    index: 1,
    key: "strategize",
    title: "Strategy & Discovery",
    redirectURL: null,
    tags: [
      "Problem Discovery",
      "Product Vision",
      "Requirements Analaytics",
      "Development Planning",
    ],
  },
  {
    index: 2,
    key: "design",
    title: "UI/UX Design",
    redirectURL: null,
    tags: [
      "Design Thinking",
      "Interaction Design",
      "High/Low Prototyping",
      "Responsive Design",
    ],
  },
  {
    index: 3,
    key: "develop",
    title: "App Development",
    redirectURL: null,
    tags: [
      "Custom Applications",
      "Full Stack Development",
      "Wordpress",
      "Magento",
      "Shopify",
      "Webflow",
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
        <div className="flex flex-col">
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
    <div>
      <div className="service-tab">
        <div className="flex flex-row items-end justify-between">
          <div id={`service-tab-{key}`} className="flex flex-row items-end">
            <span className="service-number">{index}.</span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-0.5 md:gap-2 z-20 max-w-full">
                {tags &&
                  tags.map((tag, index) => (
                    <div key={index} className="service-tag">
                      {tag}
                    </div>
                  ))}
              </div>
              <div className="relative flex flex-row items-end">
                <span className="service-title z-20">{title}</span>
                <div className="service-image-container absolute bottom-0 right-0 -translate-x-12 z-10">
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
