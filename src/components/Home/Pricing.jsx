import Link from "next/link";
import { Checkmark, Cross } from "../icons";
import { Button } from "../Button";

const PricingCard = ({ pricing, highlighted }) => {
  return (
    <div
      className={`w-full my-4 md:mx-2 md:my-0 flex flex-col justify-between gap-10 shadow-lg ${
        highlighted ? "bg-[#FB4E29] -translate-y-0 text-white" : "bg-white"
      } px-6 py-8 rounded-[24px] duration-[400ms]`}
    >
      <h5 className="text-4xl font-bold">{pricing.title}</h5>
      <div className="flex flex-col gap-3">
        {pricing.features.map((feature, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row w-full items-center justify-between ${
                highlighted ? "!text-white" : ""
              }`}
            >
              <p>{feature.feature}</p>
              {feature.available ? (
                <div
                  className={`${
                    highlighted ? "!text-white" : "text-[#FB4E29]"
                  }`}
                >
                  <Checkmark />
                </div>
              ) : (
                <div className={`${highlighted ? "!text-white" : ""}`}>
                  <Cross />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-5xl font-bold">{pricing.price}</h4>
        <p className="">{pricing.additionalPrice}</p>
      </div>
      <Link
        href={"https://calendly.com/hello-enclave-studios/free-consult"}
        className=""
        target={"_blank"}
      >
        <button
          className={`primary flex flex-row items-center gap-2 min-w-fit w-full !rounded-full ${
            highlighted
              ? "!text-[#FB4E29] hover:!text-[#FB4E29] !bg-white hover:!bg-gray-100"
              : ""
          }`}
        >
          Book Consultation
        </button>
      </Link>
    </div>
  );
};

const Pricing = ({ id }) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center py-16 md:py-32 px-0 md:px-8 w-full gap-12 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 px-8">
        <div className="text-center mb-8 flex flex-col items-center">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            Pricing
          </h4>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] max-w-2xl font-bold mt-2 mb-4 capitalize text-center">
            Pricing Packages For Every Budget
          </h2>
          <p className="text-[#26120D] mx-auto text-[18px] md:text-[20px] leading-[150%] text-center max-w-4xl">
            Includes design, development, hosting, unlimited edits, 24/7
            support, and lifetime updates.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          {[
            {
              title: "Consultation",
              price: "Free",
              additionalPrice: "",
              features: [
                { feature: "1-hour Session Included", available: true },
                { feature: "Expert Guidance", available: true },
                { feature: "No Upfront Fees", available: true },
                { feature: "No Hidden Costs", available: true },
                { feature: "Quick Response Time", available: true },
                { feature: "100% commitment free", available: true },
                { feature: "Personalized Solutions", available: true },
                { feature: "Secure Communication", available: true },
              ],
              highlighted: false,
            },
            // {
            //   title: "Lump Sum",
            //   price: "$3.8K",
            //   additionalPrice: "+HK$250/mo Hosting",
            //   features: [
            //     { feature: "Design And Development", available: true },
            //     { feature: "$25/mo Hosting", available: true },
            //     { feature: "$100 fee per Page after 5", available: true },
            //     { feature: "+$50/mo Unlimited Edits Add-on", available: true },
            //     { feature: "+$250 To Add a Blog", available: true },
            //     { feature: "24/7 Support", available: false },
            //     { feature: "Lifetime Updates", available: false },
            //   ],
            //   highlighted: false,
            // },
            {
              title: "Monthly",
              price: "$250",
              additionalPrice: "per month",
              features: [
                { feature: "Design And Development", available: true },
                { feature: "$25/mo Hosting Included", available: true },
                { feature: "Unlimited Edits", available: true },
                { feature: "$100 fee per Page after 5", available: true },
                { feature: "+$250 To Add a Blog", available: true },
                { feature: "24/7 Support", available: true },
                { feature: "Lifetime Updates", available: true },
              ],
              highlighted: true,
            },
            {
              title: "E-Commerce",
              price: "$8k",
              additionalPrice: "Starting",
              features: [
                { feature: "Custom Shopify Store", available: true },
                { feature: "Configure Any & All Apps", available: true },
                { feature: "Integrated Shipping", available: true },
                { feature: "Shopify Tutorial Walkthrough", available: true },
                { feature: "Fully Editable in Shopify CMS", available: true },
                { feature: "+$50/mo Unlimited Edits", available: false },
                { feature: "24/7 Support", available: false },
              ],
              highlighted: false,
            },
          ].map((pricing, index) => (
            <PricingCard
              pricing={pricing}
              key={index}
              highlighted={pricing.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
