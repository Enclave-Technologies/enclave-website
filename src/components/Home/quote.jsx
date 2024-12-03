import Image from "next/image";

export const Quote = ({ id }) => {
  return (
    <section id={id}>
      <div className="inner-container flex flex-col gap-8 md:gap-16 px-4 items-center">
        <div>
          <p className="testimonial text-center">
            &quot;... ... their data driven process has given us visibility into
            our customers and improved the UX so much that it allowed us to
            unlock 10x customer acquisition.&quot;
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center md:flex-row">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex flex-col">
              <p className="font-bold text-center md:text-right">
                Aman Selarka
              </p>
              <p className="text-center md:text-right">Head of Product</p>
            </div>
            <div className="w-full md:w-0.5 min-h-0.5 bg-black" />
            <Image
              alt="payphone-logo"
              src="/company-logos/logo-payphone.png"
              width={200}
              height={100}
              unoptimized
            />
          </div>
        </div>
        {/* <button className="cta-button">Case Study</button> */}
      </div>
    </section>
  );
};
