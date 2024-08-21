export const Quote = () => {
  return (
    <section id="quote">
      <div className="inner-container flex flex-col gap-12">
        <div>
          <span className="testimonial">
            &quot;... their cutting edge design has given us visibility into our
            customers and improved the UX that allowed us to unlock our customer
            acquisition.&quot;
          </span>
        </div>
        <div className="w-full flex flex-row gap-4 justify-between">
          <div className="flex flex-row gap-4 items-stretch">
            <div className="flex flex-col">
              <p className="font-bold">Avishek Majumder</p>
              <p>Head of Product</p>
            </div>
            <div className="w-0.5 bg-black" />
            <p>Neighbourhood</p>
          </div>
          <button className="cta-button">Case Study</button>
        </div>
      </div>
    </section>
  );
};
