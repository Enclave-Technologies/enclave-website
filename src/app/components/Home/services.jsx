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
      <div className="inner-container flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h3>Dicover</h3>
          <div className="flex flex-col gap-6 items-center">
            <h2>Our Services</h2>
            <p className="text-center">
              It is our mission to be the best User Experience and User
              Interface focused web design agency.
            </p>
            <p className="text-center w-2/3">
              Our UX and UI web design process is centered around empathy -
              having a complete picture of your end-users and target audiences
              preferences. As well as a mobile-first approach (responsive
              design), so that we’re building great experiences that scale
              across devices.
            </p>
          </div>
        </div>
        <div>
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
        <div className="flex flex-row items-center justify-between">
          <div id={`service-tab-{key}`} className="flex flex-row items-end">
            <span className="service-number">{index}.</span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                {tags &&
                  tags.map((tag, index) => (
                    <div key={index} className="service-tag">
                      {tag}
                    </div>
                  ))}
              </div>
              <span className="service-title">{title}</span>
            </div>
          </div>
          <div>
            <Image
              className="service-arrow"
              src="/arrow-right-1.svg"
              width={100}
              height={100}
              alt={key}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
