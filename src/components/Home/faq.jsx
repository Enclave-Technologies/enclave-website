import React, { useState } from "react";
import { Button } from "../Button";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-lg pr-4">{question}</span>
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
        <div className="px-6 pb-6">
          <p className="text-[#6E605D] text-lg leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQs = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Data-Driven Analysis?",
      answer:
        "Data-Driven Analysis involves using data to inform business decisions. It helps identify trends, optimize processes, and improve overall performance. By leveraging insights from data, businesses can enhance their strategies and achieve better results.",
    },
    {
      question: "How does it work?",
      answer:
        "Data-Driven Analysis works by collecting and analyzing data from various sources. This analysis reveals actionable insights that guide decision-making. The process often involves statistical methods and data visualization techniques.",
    },
    {
      question: "What are the benefits?",
      answer:
        "The benefits of Data-Driven Analysis include improved accuracy in decision-making, enhanced customer understanding, and increased operational efficiency. It enables businesses to tailor their strategies based on real data rather than assumptions. Ultimately, this leads to higher conversion rates and revenue growth.",
    },
    {
      question: "Who can benefit?",
      answer:
        "Any business looking to optimize its performance can benefit from Data-Driven Analysis. This includes e-commerce companies, startups, and established enterprises. By utilizing data insights, organizations can make informed decisions that drive growth.",
    },
    {
      question: "Is it expensive?",
      answer:
        "The cost of Data-Driven Analysis varies depending on the complexity and scope of the project. However, the investment often pays off through increased efficiency and revenue. Many businesses find that the long-term benefits outweigh the initial costs.",
    },
  ];

  return (
    <section
      id={id}
      className="relative w-full overflow-hidden bg-[#FAFAFA] py-32 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">FAQs</h2>
            <p className="text-[#6E605D] text-lg leading-relaxed mb-12 max-w-full md:max-w-[450px]">
              Find answers to your most pressing questions about Data-Driven
              Analysis and its benefits.
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
                <p className="text-[#6E605D] text-lg">
                  We&apos;re here to help you with your inquiries!
                </p>
              </div>
              <div className="">
                <Button
                  variant="primary navigation"
                  title="Book Consultation"
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
