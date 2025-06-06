import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

export const CTA = () => {
  return (
    <section className="max-w-none w-screen relative overflow-hidden !min-h-[30vh] !py-8 bg-[#FFF2ED]">
      <div className="absolute left-0 bottom-0 z-0 w-40 sm:w-80 xl:w-[480px] flex flex-row justify-start">
        <Image
          style={{ transform: "scaleX(-1)" }}
          src="/human-sculpture.png"
          width={400}
          height={100}
          alt="Human Sculpture"
          unoptimized
        />
      </div>
      <div className="absolute -right-0 bottom-0 md:-right-0 z-0 w-40 sm:w-80 xl:w-[480px] flex flex-row justify-end">
        <Image
          src="/human-sculpture.png"
          width={400}
          height={100}
          alt="Human Sculpture"
          unoptimized
        />
      </div>

      <div className="inner-container flex flex-col items-center gap-20 !max-w-none z-10">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-center text-sm">
            Book a free consultation with our strategists
          </h3>
          <div className="flex flex-col items-center gap-6">
            <h2 className="capitalize text-center">
              Don&apos;t settle for generic.
              <br /> Discover what&apos;s next
            </h2>
            <p className="w-full md:w-3/5 lg:w-2/5 text-center">
              Develop your next project with an agency that works tirelessly
              with you to make sure your project is beneficial for your
              business. We’ll unlock access to everything you need to know to
              build your next monumental custom project. Book a consultation
              with us to learn how your idea can become a reality.
            </p>
          </div>
        </div>
        <Button variant="primary" link={'/contact'} title="Get In Touch" />
      </div>
    </section>
  );
};
