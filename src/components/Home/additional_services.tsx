'use client';
import Image from "next/image";
import { useState } from "react";

const services = [{
    title: 'E-Commerce Integration',
    description: 'We support development of E-Commerce Features with Shopify and Webflow.',
    icon: '/images/icons/icon-1.svg',
    color: '#FFC26E'
},
{
    title: 'Search Engine Optimisation',
    description: 'We make sure each website is SEO optimised from the second it is launched while offerring content creation and backlink generation services to grow your Google rankings.',
    icon: '/images/icons/icon-4.svg',
    color: '#F3FF4F'
},
{
    title: 'Google Ads & Display Ads',
    description: 'Drive traffic & conversions by running targetted Google Ads to target your potential customers.',
    icon: '/images/icons/icon-2.svg',
    color: '#F7B0FF'
},
{
    title: 'Conversion Rate Optimisation',
    description: 'Best performing websites evolve over time. We use A/B testing to find the optimal copy and design for your website to deliver maximal results.',
    icon: '/images/icons/icon-3.svg',
    color: '#29FFC6'
}];

const AdditionalServices = ({id}: {id: string}) => {
    return (
        <section id={id} className="w-full px-6 sm:px-[60px] lg:px-[120px]">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <h4 className="text-[#FB4E29] text-[14px] md:text-[16px] lg:text-[20px] font-normal uppercase">
                        Beyond the basics
                        </h4>
                        <h2
                        className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold capitalize text-center"
                        style={{
                            lineHeight: "1.3",
                        }}
                        >
                        Maximize Your Website&apos;s Impact
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 flex-start">
                    {services.map((service, index)=>(
                        <ServiceCard key={index} service={service} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default AdditionalServices;

function ServiceCard({ service, index }) {
  // State to track if the card is active (hovered or clicked)
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      key={index}
      // Add event handlers to toggle the active state
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
      // Ensure the container clips the content and has a smooth transition
      className="flex flex-col h-[436px] w-full rounded-3xl p-8 justify-between overflow-hidden cursor-pointer transition-all duration-500"
      style={{ backgroundColor: service.color }}
    >
      {/* Top Part: Icon */}
      <Image src={service.icon} height={48} width={48} alt={`${service.title} Enclave Studios`} />

      {/* Bottom Part: Text Content */}
      <div>
        {/* This content is always visible */}
        <div>
          <span>0{index + 1}.</span>
          <p className="w-4/5 text-2xl font-medium">{service.title}</p>
        </div>

        {/* This container will expand/collapse to reveal the description */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          {/* The overflow-hidden is crucial for the animation to work correctly */}
          <div className="overflow-hidden">
            <p className="text-lg pt-4 font-light">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}