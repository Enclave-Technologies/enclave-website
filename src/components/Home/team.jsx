import React from "react";
import Link from "next/link";
import { Button } from "../Button";

const TeamMember = ({ name, title }) => (
  <div className="box-border flex sm:flex-row flex-col sm:justify-between justify-center sm:items-center items-start p-6 w-full sm:h-[75px] h-[100px] bg-[#E9E7E7] rounded-lg">
    <h3 className="font-semibold text-lg text-[#121212]">{name}</h3>
    <div className="text-[#26120D] text-base">{title}</div>
  </div>
);

const Team = ({ id }) => {
  const teamMembers = [
    {
      id: 1,
      name: "Siddharth Agarwal",
      title: "CEO & Co-Founder",
    },
    {
      id: 2,
      name: "Avishek Majumder",
      title: "CTO & Co-Founder",
    },
    {
      id: 3,
      name: "Aida Naingolan",
      title: "Director of UI/UX Design",
    },
    {
      id: 4,
      name: "Pease Adeniji",
      title: "Lead Software Engineer",
    },

    {
      id: 5,
      name: "Rajkumar Chaudhari",
      title: "Website Engineer",
    },
    {
      id: 7,
      name: "Sneha Nawalkha",
      title: "Fractional CMO",
    },
    {
      id: 9,
      name: "You",
      title: (
        <p
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/enclave-studios-hk/jobs/",
              "_blank"
            );
          }}
        >
          <span>View Openings</span>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66797 11.4606L11.3346 4.79395"
              stroke="#121212"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66797 4.79395H11.3346V11.4606"
              stroke="#121212"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      ),
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center py-16 md:py-20 lg:py-24 px-8 w-full bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h4 className="text-[#FB4E29] text-lg md:text-2xl font-bold">
            Our Team
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 capitalize">
            A Global Network Of Talent
          </h2>
          <p className="text-[#26120D] max-w-lg mx-auto text-base md:text-lg">
            We&apos;ve assembled a team of dedicated professionals from diverse
            backgrounds who share the same passion for your brand as you do.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-7xl mt-14 md:mt-20 lg:mt-24">
        <div
          className="relative flex flex-col justify-between items-start p-6 md:p-8 w-full h-[320px] rounded-xl shadow-[0px_0px_15px_rgba(0,0,0,0.2)] backdrop-blur-[15px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #E9E7E7 0%, rgba(233, 231, 231, 0) 100%), url('/service-images/007.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="font-bold text-2xl lg:text-4xl text-[#121212] leading-[120%] max-w-[600px] z-10 normal-case flex-1">
            Enable Your Business with the Right Technology Solutions
          </h3>

          <div>
            <Button
              variant="primary navigation"
              title="Book a 1-1 Consultation"
              link="https://api.whatsapp.com/send/?phone=85259291909&text&type=phone_number&app_absent=0"
              rounded={true}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
