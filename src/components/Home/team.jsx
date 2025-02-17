import React from "react";
import Image from "next/image";

const TeamCard = ({ image, size = "normal" }) => (
  <div
    className={`overflow-hidden rounded-[12px] p-3 bg-white ${
      size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
    }`}
    style={{
      background:
        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(12px)",
    }}
  >
    <div className="w-full h-full relative">
      <Image
        src={image}
        alt="Team member"
        width={size === "large" ? 680 : 214}
        height={size === "large" ? 680 : 214}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const Team = ({ id }) => {
  const teamImages = {
    large:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=680&h=680&fit=crop",
    right1:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=214&h=214&fit=crop",
    right2:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=214&h=214&fit=crop",
    bottom1:
      "https://images.unsplash.com/photo-1580518337843-f959e992563b?q=80&w=214&h=214&fit=crop",
    bottom2:
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=214&h=214&fit=crop",
  };

  return (
    <section
      id={id}
      className="relative w-full bg-white py-32 px-4 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#29FB4E]/5 via-[#29D6FB]/5 to-[#4E29FB]/5" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:pr-8">
            <h4 className="text-[#FB4E29] text-lg font-medium mb-4">
              About Us
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 capitalize">
              Meet the Team
            </h2>
            <p className="text-[#6E605D] text-lg leading-relaxed mb-8">
              At Enclave, we pride ourselves on our collaborative approach,
              working closely with you to understand your vision and goals.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-6 auto-rows-[214px]">
              <TeamCard image={teamImages.large} size="large" />
              <TeamCard image={teamImages.right1} />
              <TeamCard image={teamImages.right2} />
              <TeamCard image={teamImages.bottom1} />
              <TeamCard image={teamImages.bottom2} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-0 md:right-10">
          <Image
            src="/enclave-studios-logo.svg"
            width={120}
            height={120}
            alt="Enclave Studios"
            className="enclave-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
