import Image from "next/image";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden">
      <Image
        className="absolute -right-40 top-24 md:-right-0 z-0"
        src="/human-sculpture.png"
        width={400}
        height={100}
        alt="Web Design"
        unoptimized
      />
      <Image
        className="absolute -left-40 z-0"
        style={{ transform: "scaleX(-1)" }}
        src="/human-sculpture.png"
        width={400}
        height={100}
        alt="Web Design"
        unoptimized
      />
      <div className="inner-container flex flex-col items-center gap-20 !max-w-none z-10">
        <div className="flex flex-col items-center gap-4">
          <h3>Make the Leap</h3>
          <div className="flex flex-col items-center gap-6">
            <h2 className="capitalize text-center">
              Don&apos;t settle for generic.
              <br /> Discover what&apos;s next
            </h2>
            <p className="w-2/3 text-center">
              Build your next website with website design & development that
              doesn&apos;t compromise. We&apos;ll unlock access to everything
              you need to know to build your next monumental custom website.
              Learn what your website can do for you.
            </p>
          </div>
        </div>
        <Link href="/contact" className="cta-button">
          Start Now
        </Link>
      </div>
    </section>
  );
};
