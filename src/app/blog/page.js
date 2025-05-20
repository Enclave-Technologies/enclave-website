"use client";

import React from "react";
import Image from "next/image";
import { Navbarr } from "../../components/Navbar/Navbarr";

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-[80px] w-[90vw] text-[#121212]">
      <Navbarr />

      {/* Header Section */}
      <div className="max-w-3xl w-full mx-auto pt-12 pb-6 px-4 text-center">
        <div className="text-sm mb-2 flex flex-col items-center gap-1">
          <span>Website Development • 9 mins</span>
        </div>
        <h1 className="text-3xl md:text-6xl font-medium mb-2 mt-2">
          Top 5 best AI website builders
        </h1>
        <p className="text-lg md:text-2xl mb-4 ">
          These are the best apps to help you build a website with AI.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs mb-4">
          <span>By Siddharth Agarwal</span>
          <span className="hidden md:inline">•</span>
          <span>Apr 25, 2024</span>
        </div>
      </div>

      {/* Main Image and CTA */}
      <div className="w-full">
        <Image
          src="https://images.pexels.com/photos/53214/trekking-hiking-group-alpine-53214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Blog Main"
          width={800}
          height={400}
          className="rounded-2xl w-full h-[350px] object-cover"
        />
      </div>

      <div className=" w-full mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8 max-w-6xl">
        {/* Main Content */}
        <div className="flex-[2] w-full px-4 mt-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 ">
              Building a website is no longer a prohibitively hard task for most
              people, but only if you&apos;re looking for a simple, functional
              site. If you want more, you might struggle with generic site
              builders. Want to do it yourself, but don&apos;t want to learn
              coding? AI website builders claim to build a site in minutes.
              Here&apos;s the best AI website builders (aim to do).
            </p>
            <p className="mb-4 ">
              The idea is that by using artificial intelligence, AI website
              creators can automate the appropriate design and content
              generation for a website, based on a few prompts or a handful of
              existing content. The best AI website builders claim to do this.
            </p>
            <h3 className="font-bold text-xl mt-6 mb-2 text-white">
              The best AI website builders
            </h3>
            <ul className="list-disc list-inside mb-4 ">
              <li>Jimdo: Best overall</li>
              <li>
                Wix ADI: The top AI website builder with affordable upgrades
              </li>
              <li>Hostinger AI: AI website builder with add-ons</li>
              <li>
                Framer: For AI elements or natural AI website solutions (or so
                on)
              </li>
            </ul>
            <h3 className="font-bold text-xl mt-6 mb-2 text-white">
              What makes the best AI website builder?
            </h3>
            <p className="mb-4 ">
              For the past decade, AI has been the hottest marketing buzzword
              around. Even though AI website builders are slowly starting to
              deliver, there seem to be a lot of subpar solutions.
              Unfortunately, the more options that launch, the more of that
              crowd we see.
            </p>
            <p className="mb-4 ">
              The problem is: building something that works well and lets you do
              whatever is now the new entry requirement. Content+graphics+AI = a
              site, but only if the builder has a good UI, and can deliver on
              the promise. We looked for builders that make it painless and fun
              to create a website, and that look great on any device.
            </p>
            <p className="mb-4 ">
              We also looked at the top of the market for AI website builders,
              and at the bottom, and in the middle. Some are great, some are
              not, but no AI website builder is the same as each vendor.
            </p>
            <p className="mb-4 ">
              Do you really need an AI website maker? Some people want to do a
              survey, select certain options and have an AI build a whole entire
              website. Others want to add something. I was happy to write it off
              as a poor attempt to cash in on AI boom.
            </p>
            <p className="mb-4 ">
              One extremely boring form of AI was reading the website builders,
              the checklist is now important because...{" "}
              <a href="#" className="underline text-[#FB4E29]">
                Read more
              </a>
            </p>
          </div>
          {/* CTA Card for mobile (hidden on desktop) */}
          <div className="block md:hidden w-full">
            <div className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-lg">
                Want something more tailored for your business?
              </h3>
              <p className="text-sm">
                Do you not feel confident that AI can understand and replicate
                your brand&apos;s identity with your website? Our expert team
                can help you amplify your brand with a custom design for your
                website.
              </p>
              <div className="flex gap-2 mt-2">
                <button className="bg-[#FB4E29] text-white px-4 py-2 rounded font-semibold">
                  Consult Us
                </button>
                <button className="bg-white border border-[#FB4E29] text-[#FB4E29] px-4 py-2 rounded font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[1] flex flex-col w-full mt-6 md:mt-0 z-10 ">
          <div className="bg-[#FFEDEA] text-black rounded-xl shadow-lg p-6 flex flex-col gap-3">
            <h3 className="font-bold text-lg">
              Want something more tailored for your business?
            </h3>
            <p className="text-sm">
              Do you not feel confident that AI can understand and replicate
              your brand’s identity on your website?
            </p>

            <p className="text-sm">
              Don’t worry, our experts can help you amplify your brand with a
              custom design for your website.
            </p>
            <div className="flex gap-4 mt-2 w-full">
              <button className="bg-[#FB4E29] text-white px-4 py-2 rounded font-semibold w-full">
                Consult Us
              </button>
              <button className="bg-white border border-[#FB4E29] text-[#FB4E29] px-4 py-2 rounded font-semibold w-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className="w-full max-w-8xl mx-auto mt-16 px-4">
        <h3 className="text-[28px] font-bold mb-4 px-4">
          You Might Be Interested In
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8  mb-16">
          {[
            {
              img: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
              title: "Develop & Optimise Your Business Website",
              desc: "We create unique brand identities that reflect your business&apos;s values, establish credibility, and leave a lasting impression.",
            },
            {
              img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
              title: "Develop Software Solutions Tailored For Your Business",
              desc: "We create unique brand identities that reflect your business&apos;s values, establish credibility, and leave a lasting impression.",
            },
            {
              img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
              title: "Launch Your Business & Grow Your Online Presence",
              desc: "We create unique brand identities that reflect your business&apos;s values, establish credibility, and leave a lasting impression.",
            },
            {
              img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
              title: "Automate Your Workflows & Optimise Your Business",
              desc: "We create unique brand identities that reflect your business&apos;s values, establish credibility, and leave a lasting impression.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-2xl p-4 min-h-[200px]"
            >
              <div className="flex flex-col items-center flex-grow">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={300}
                  height={200}
                  className="rounded-[48px] w-full h-40 object-cover mb-4"
                />
                <h4 className="font-medium text-lg mb-2 text-center">
                  {card.title}
                </h4>
                <p className="text-[#121212] text-sm mb-4 text-center">
                  {card.desc}
                </p>
              </div>
              <button className="bg-[#FB4E29] text-white px-8 py-2 rounded font-semibold w-full">
                Read
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
