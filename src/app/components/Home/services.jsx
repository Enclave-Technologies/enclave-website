import Image from "next/image";

const servicesList = [
  {
    index: 1,
    key: "strategize",
    title: "Strategy & Discovery",
    redirectURL: null,
    tags: [
      "Free Discovery",
      "Technical Planning",
      "Data & Analaytics",
      "Sales & Lead Optimization",
    ],
  },
  {
    index: 2,
    key: "design",
    title: "UI/UX Design",
    redirectURL: null,
    tags: [
      "Custom Design",
      "Responsive Design",
      "Interaction Design",
      "Prototyping",
    ],
  },
  {
    index: 3,
    key: "develop",
    title: "Web Development",
    redirectURL: null,
    tags: ["SEO", "Full Stack Development", "CMS Development", "E-Commerce"],
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
              It is our mission to be the best technology solutions agency with
              user experience at the core of our design process.
            </p>
            <p className="text-center w-full md:w-2/3">
              Our process is centred around empathy with your users - to focus
              on their needs and preferences. We take a mobile-first approach to
              that ensure we are creating intuitive and engaging digital
              experiences that scale across devices.
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
              <div className="flex flex-wrap gap-2 md:gap-4 z-20 max-w-full">
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-y-4">
            <Image
              className="service-arrow-black"
              src="/service-arrow-black.png"
              width={100}
              height={200}
              alt={key}
            />
            <Image
              className="service-arrow-white"
              src="/service-arrow-white.png"
              width={100}
              height={200}
              alt={key}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
