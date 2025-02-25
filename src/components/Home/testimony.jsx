import { testimonials } from "../../data/testimonials";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../Button";

const TestimonialCard = ({ text, author, company, image }) => (
  <div
    className="w-[472px] min-h-[240px] p-4 mx-3 flex flex-col items-start gap-6 transition-transform duration-300 hover:scale-[1.02]"
    style={{
      boxSizing: "border-box",
      background:
        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(15px)",
      borderRadius: "8px",
      flex: "none",
      alignSelf: "stretch",
      flexGrow: 0,
    }}
  >
    <p className="text-sm leading-relaxed text-gray-600 flex flex-wrap whitespace-normal">
      {text}
    </p>
    <div className="flex items-center mt-auto pt-4">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <Image
          src={image}
          width={48}
          height={48}
          alt={author}
          className="object-contain w-full h-full"
          unoptimized
        />
      </div>
      <div>
        <h4 className="font-medium text-sm">{author}</h4>
        <p className="text-xs text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({ items, direction = "right" }) => {
  const rowRef = useRef(null);
  const scrollTween = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const cards = row.children;
    const totalWidth = Array.from(cards).reduce(
      (width, card) => width + card.offsetWidth + 16,
      0
    );

    const clonedItems = Array.from(cards).map((card) => card.cloneNode(true));
    clonedItems.forEach((clone) => row.appendChild(clone));

    const startPosition = direction === "left" ? 0 : -totalWidth;
    const endPosition = direction === "left" ? -totalWidth : 0;

    gsap.set(row, { x: startPosition });

    scrollTween.current = gsap.to(row, {
      x: endPosition,
      duration: 50,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(row, { x: startPosition });
      },
    });

    const handleMouseEnter = () => scrollTween.current.pause();
    const handleMouseLeave = () => scrollTween.current.play();

    row.addEventListener("mouseenter", handleMouseEnter);
    row.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
      row.removeEventListener("mouseenter", handleMouseEnter);
      row.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction]);

  return (
    <div className="w-full min-h-[250px] flex items-center overflow-hidden">
      <div ref={rowRef} className="flex">
        {items.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const Testimony = ({ id }) => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      id={id}
      style={{
        marginTop: "-75vh",
        position: "relative",
        zIndex: 41,
      }}
    >
      <div className="absolute inset-0 opacity-50 pointer-events-none" />

      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto text-center md:px-6 px-0 mb-20 flex flex-col items-center justify-center">
          <p
            className="text-2xl md:text-4xl font-bold mb-6 max-w-lg capitalize text-center"
            style={{ lineHeight: "1.2" }}
          >
            Grow your business with data-backed solutions.
          </p>
          <p className="md:text-xl text-lg text-[#FB4E29] font-bold mb-6 max-w-lg capitalize text-center">
            Don&apos;t settle for mediocre.
          </p>
          <p className="text-base mb-10 md:max-w-xl max-w-full mx-auto text-center">
            Partner with the best growth solution studio with proven
            track-record and unmatched customer service. You won&apos;t know
            when you grew from 0 to 100.
          </p>
          <div className="relative z-[1001]">
            <Button
              variant="primary navigation"
              title="Discover What's Next"
              link="/contact"
            />
          </div>
        </div>

        {/* <div className="relative z-20 space-y-4 w-screen h-full">
          {testimonials.map((row) => (
            <ScrollingRow
              key={row.row}
              items={row.items}
              direction={row.row === 1 ? "left" : "right"}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimony;
