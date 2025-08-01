import React, { useState } from "react";
import { Button } from "../Button";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-base font-medium pr-4">{question}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6">
          <p className="text-[#6E605D] text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQs = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How do we ensure growth?",
      answer:
        "We ensure that the goals we set with organisations are quantitive. Using data-driven decision making, we ensure that your organisation grows.",
    },
    {
      question: "What if our services don’t provide the desired results?",
      answer:
        "We refund 50% of our contract fee if the project is not successful to our clients. Since data indicates growth, neither clients, nor us can deny or fake growth.",
    },
    {
      question: "My website doesn’t get enough leads. What should I do?",
      answer:
        "Not getting enough leads is a symptom of broken sales and marketing funnels or target the wrong audience. A consultation and implementation of the right marketing principles helps increase leads and conversion rates.",
    },
    {
      question: "I’m not sure why my business isn’t growing. What should I do?",
      answer:
        "Defining growth metrics, aligning operational efforts and measuring growth using data is the only way to diagnose what’s stopping your business from growing to it’s full potential.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can email us at hello@enclave-studios.com with your query. Our team will respond within 1-2 days to your request.",
    },
  ];

  return (
    <section
      id={id}
      className="relative w-full overflow-hidden bg-[#FAFAFA] py-32 px-0 md:px-10"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 md:px-10 px-6">
          <div className="col-span-1 lg:col-span-2">
            <p className="text-4xl lg:text-5xl font-bold mb-6">FAQs</p>
            <p className="text-[#6E605D] text-base leading-relaxed mb-12 max-w-full md:max-w-[450px]">
              Find answers to your most pressing questions about our services
              and experience.
            </p>
            <div className="overflow-hidden">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  {...faq}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <div
              className="sticky top-32 flex flex-col justify-between items-start w-full max-w-full lg:w-[368px] h-auto lg:h-[589px] p-6 gap-6 rounded-2xl"
              style={{
                background: "linear-gradient(0deg, #FEC8BD 0%, #FFFFFF 100%)",
                boxShadow: "4px 4px 12px #E9E7E7",
                alignSelf: "stretch",
                flexGrow: 1,
                minHeight: "400px",
              }}
            >
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-3xl lg:text-4xl font-bold">
                  Any Questions?
                </h3>
                <p className="text-[#6E605D] text-base">
                  We&apos;re happy to help you with your inquiries!
                </p>
              </div>
              <div className="">
                <Button
                  variant="primary navigation"
                  title="Send Enquiry"
                  link="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
