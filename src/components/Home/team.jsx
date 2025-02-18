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
    large: "",
    right1: "",
    right2: "",
    bottom1: "",
    bottom2: "",
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
              <TeamCard
                image={
                  teamImages.large ||
                  "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1200"
                }
                size="large"
              />
              <TeamCard
                image={
                  teamImages.right1 ||
                  "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1200"
                }
              />
              <TeamCard
                image={
                  teamImages.right2 ||
                  "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1200"
                }
              />
              <TeamCard
                image={
                  teamImages.bottom1 ||
                  "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1200"
                }
              />
              <TeamCard
                image={
                  teamImages.bottom2 ||
                  "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1200"
                }
              />
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
