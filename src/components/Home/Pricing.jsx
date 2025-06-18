import Link from "next/link";
import { Cross } from "../icons";

const CheckmarkIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.3318V12.2518C21.9988 14.4082 21.3005 16.5065 20.0093 18.2336C18.7182 19.9608 16.9033 21.2243 14.8354 21.8357C12.7674 22.4471 10.5573 22.3737 8.53447 21.6264C6.51168 20.8791 4.78465 19.4979 3.61096 17.6889C2.43727 15.8799 1.87979 13.7399 2.02168 11.5881C2.16356 9.43638 2.99721 7.38814 4.39828 5.74889C5.79935 4.10964 7.69279 2.9672 9.79619 2.49196C11.8996 2.01673 14.1003 2.23415 16.07 3.11182"
      stroke="#FB4E29"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 4.25L12 14.26L9 11.26"
      stroke="#FB4E29"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Pricing = ({ id, fromServices = false, header, subtitle }) => {
  const pricingTiers = [
    {
      title: "Basic Website",
      price: "HK$12,000",
      pages: "1-5 Pages",
      description:
        "A basic website ideal for individuals and startups wanting to launch a digital presence with the bare necessary functionality.",
      idealFor: "Individuals & Startups",
      buttonText: "Contact Us",
      buttonVariant: "outline",
      viewExamples: true,
    },
    {
      title: "Standard Website",
      price: "HK$25,000",
      pages: "5-10 Pages",
      description:
        "Designed for small businesses looking to provide detailed information about their services, this package includes more pages.",
      idealFor: "Small Businesses",
      buttonText: "Contact Us",
      buttonVariant: "filled",
      viewExamples: true,
      highlighted: true,
    },
    {
      title: "Advanced Website",
      price: "HK$52,000",
      pages: "10-20 Pages",
      description:
        "A comprehensive solution for medium to large enterprises that require a robust online presence with multiple sections and user.",
      idealFor: "Medium to Large Enterprises",
      buttonText: "Contact Us",
      buttonVariant: "outline",
      viewExamples: true,
    },
  ];

  const features = [
    {
      category: "Design & Pages",
      items: [
        {
          name: "Upto 5 Pages (Home, About etc.)",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "Design Type",
          basic: "Professional Template-Based Design",
          standard: "Customized Design",
          advanced: "Fully Custom (Bespoke) Design",
        },
        {
          name: "Your Branding Integration",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "Mobile & Tablet Responsive",
          basic: true,
          standard: true,
          advanced: true,
        },
        { name: "Contact Form", basic: true, standard: true, advanced: true },
        {
          name: "Interactive Google Map",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "Social Media Links",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "Basic SEO Setup",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "Google Analytics Integration",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "Secure Hosting Setup Assistance",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "1 Round of Revisions",
          basic: true,
          standard: true,
          advanced: true,
        },
        {
          name: "Stock Photography",
          basic: false,
          standard: "Stock Photography",
          advanced: "Paid Photography",
        },
        {
          name: "Content Management System (CMS)",
          basic: false,
          standard: true,
          advanced: true,
        },
        {
          name: "Blog / News Functionality",
          basic: false,
          standard: true,
          advanced: true,
        },
        {
          name: "Email Newsletter Integration",
          basic: false,
          standard: true,
          advanced: true,
        },
        {
          name: "Basic Booking / Appointment System",
          basic: false,
          standard: true,
          advanced: true,
        },
        {
          name: "Speed & Performance Optimization",
          basic: false,
          standard: true,
          advanced: true,
        },
        {
          name: "1-Hour Training Session",
          basic: false,
          standard: "1-Hour Training Session",
          advanced: "In-depth Training Session",
        },
        {
          name: "Advanced UI/UX Design",
          basic: false,
          standard: false,
          advanced: true,
        },
        {
          name: "E-commerce Functionality",
          basic: false,
          standard: false,
          advanced: true,
        },
        {
          name: "Third-Party API Integration",
          basic: false,
          standard: false,
          advanced: true,
        },
        {
          name: "Advanced SEO & Performance",
          basic: false,
          standard: false,
          advanced: true,
        },
        {
          name: "Priority Support (3 Months)",
          basic: false,
          standard: false,
          advanced: true,
        },
      ],
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center py-16 md:py-32 px-6 sm:px-[60px] lg:px-[120px] gap-12 bg-white"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-onest font-bold text-[32px] md:text-[48px] leading-[120%] text-center text-[#100805] capitalize">
          {header}
        </h2>
        <p className="text-[18px] md:text-[20px] text-[#26120D] leading-[150%]">
          {subtitle}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-2 md:mt-12">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`group flex-1 flex flex-col p-8 md:p-10 gap-10 rounded-xl transition-all duration-300 hover:shadow-[0px_0px_25px_rgba(0,0,0,0.15)] hover:-translate-y-2 ${
              tier.highlighted
                ? "bg-gradient-to-br from-white to-white/20 shadow-[0px_0px_15px_rgba(0,0,0,0.2)]"
                : "bg-gradient-to-br from-white to-white/20 shadow-[0px_0px_15px_rgba(0,0,0,0.2)]"
            }`}
            style={{ backdropFilter: "blur(15px)" }}
          >
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[28px] font-bold text-[#FB4E29]">
                {tier.title}
              </h3>
              <div className="flex flex-col gap-3">
                <h4 className="text-[40px] font-bold text-[#100805]">
                  {tier.price}
                </h4>
                <p className="text-[28px] font-bold text-[#51413D]">
                  {tier.pages}
                </p>
              </div>
              <p className="text-[16px] text-[#6E605D] leading-[150%]">
                {tier.description}
              </p>

              {/* Buttons */}
              <div className="flex sm:flex-row flex-col justify-between w-full sm:items-center flex-wrap gap-3 mt-2">
                <Link
                  href="/contact"
                  className={`flex justify-center items-center px-6 py-3 rounded-full font-bold text-[16px] transition-all duration-300 border-2 border-[#FB4E29] bg-transparent text-[#FB4E29] group-hover:bg-[#FB4E29] group-hover:text-white ${
                    fromServices ? "w-full" : ""
                  }`}
                >
                  {fromServices ? "Book Consultation" : tier.buttonText}
                </Link>
                {tier.viewExamples && !fromServices && (
                  <Link
                    href="/services"
                    className="text-[#FB4E29] font-bold text-[16px] hover:underline self-center"
                  >
                    View Examples
                  </Link>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-[#FEC8BD]"></div>

            {/* Features */}
            <div className="flex flex-col gap-2">
              {features[0].items.map((feature, featureIndex) => {
                const packageValue =
                  index === 0
                    ? feature.basic
                    : index === 1
                      ? feature.standard
                      : feature.advanced;

                // Check if it's a string (custom text) or boolean
                const isCustomText = typeof packageValue === "string";
                const isAvailable = isCustomText ? true : packageValue;
                const displayText = isCustomText ? packageValue : feature.name;

                return (
                  <div
                    key={featureIndex}
                    className={`flex items-center gap-4 py-1 ${
                      !isAvailable ? "opacity-40" : ""
                    }`}
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      {isAvailable ? (
                        <CheckmarkIcon />
                      ) : (
                        <Cross className="text-[#FB4E29]" />
                      )}
                    </div>
                    <p className="text-[18px] text-[#6E605D]">{displayText}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="w-full mt-16 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 text-[18px] font-bold">
                Features
              </th>
              <th className="text-center py-4 px-4 text-[18px] font-bold">
                Basic Website
              </th>
              <th className="text-center py-4 px-4 text-[18px] font-bold">
                Standard Website
              </th>
              <th className="text-center py-4 px-4 text-[18px] font-bold">
                Advanced Website
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Ideal for</td>
              <td className="text-center py-3 px-4 text-[18px]">
                Individuals & Startups
              </td>
              <td className="text-center py-3 px-4 text-[18px]">
                Small Businesses
              </td>
              <td className="text-center py-3 px-4 text-[18px]">
                Medium to Large Enterprises
              </td>
            </tr>

            <tr>
              <td className="py-6 px-4 text-[18px] font-bold" colSpan="4">
                Design & Pages
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Max Number of Pages</td>
              <td className="text-center py-3 px-4 text-[18px]">Up to 5</td>
              <td className="text-center py-3 px-4 text-[18px]">Up to 10</td>
              <td className="text-center py-3 px-4 text-[18px]">Up to 20</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Design Approach</td>
              <td className="text-center py-3 px-4 text-[18px]">
                Professional Template-Based
              </td>
              <td className="text-center py-3 px-4 text-[18px]">
                Enhanced & Customized Design
              </td>
              <td className="text-center py-3 px-4 text-[18px]">
                Fully Custom / Bespoke
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Advanced UI/UX Design</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Mobile & Tablet Responsive
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Branding Integration</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Professional Stock Photos
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>

            <tr>
              <td className="py-6 px-4 text-[18px] font-bold" colSpan="4">
                Functionality & Features
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Content Management System (CMS)
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">Webflow / Wordpress</td>
              <td className="text-center py-3 px-4">Webflow / Wordpress</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Blog / News Section</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Contact & Enquiry Forms</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Email Newsletter Integration
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Basic Booking / Appointment System
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                E-commerce Functionality
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Advanced Custom Features
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>

            <tr>
              <td className="py-6 px-4 text-[18px] font-bold" colSpan="4">
                Technical & SEO
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Basic On-Page SEO</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Enhanced Technical SEO</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Advanced SEO & Audit</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Google Analytics Setup</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Performance Optimization
              </td>
              <td className="text-center py-3 px-4">Basic</td>
              <td className="text-center py-3 px-4">
                Standard (Caching & Image Opt.)
              </td>
              <td className="text-center py-3 px-4">
                Advanced (CDN & Minification)
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">
                Hosting Setup Assistance
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <CheckmarkIcon />
                </div>
              </td>
            </tr>

            <tr>
              <td className="py-6 px-4 text-[18px] font-bold" colSpan="4">
                Project & Support
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Rounds of Revisions</td>
              <td className="text-center py-3 px-4 text-[18px]">1 Round</td>
              <td className="text-center py-3 px-4 text-[18px]">2 Rounds</td>
              <td className="text-center py-3 px-4 text-[18px]">3 Rounds</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">CMS Training Session</td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <Cross className="text-gray-400" />
                </div>
              </td>
              <td className="text-center py-3 px-4">1-hour session</td>
              <td className="text-center py-3 px-4">In-depth team training</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-[18px]">Post-Launch Support</td>
              <td className="text-center py-3 px-4">Email Support</td>
              <td className="text-center py-3 px-4">Email Support</td>
              <td className="text-center py-3 px-4">Priority Support</td>
            </tr>

            <tr>
              <td className="py-6 px-4 text-[18px] font-bold">
                Estimated Delivery
              </td>
              <td className="text-center py-3 px-4 text-[18px] font-bold">
                ~2-3 Weeks
              </td>
              <td className="text-center py-3 px-4 text-[18px] font-bold">
                ~4-5 Weeks
              </td>
              <td className="text-center py-3 px-4 text-[18px] font-bold">
                ~6-8+ Weeks
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Pricing;
