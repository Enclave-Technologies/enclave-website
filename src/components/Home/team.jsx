import React from "react";
import Link from "next/link";

const TeamMember = ({ name, title }) => (
  <div className="box-border flex sm:flex-row flex-col sm:justify-between justify-center sm:items-center items-start p-6 w-full sm:h-[75px] h-[100px] bg-[#FFEDEA] border border-[#FB4E29] rounded-lg">
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
          <h4 className="text-[#FB4E29] text-lg font-bold">Our Team</h4>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 capitalize">
            A Global Network Of Talent
          </h2>
          <p className="text-[#26120D] max-w-lg mx-auto">
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
    </section>
  );
};

export default Team;
