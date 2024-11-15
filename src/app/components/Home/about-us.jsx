import { Button } from "../Button";

const AboutUs = () => {
  return (
    <section className="flex">
      <div className="flex flex-col justify-center items-center gap-6">
        <h3>Discover</h3>
        <h2>WHO ARE WE?</h2>
        <div className="flex flex-col gap-6 items-center justify-center max-w-screen-lg">
          <p className="text-center">
            We are a team of designers and software engineers who help
            businesses build websites, web applications and mobile applications.
            Our mission is to drive forward the future of humanity by helping
            non-technical founders build and launch their innovative ideas. We
            have helped founders in edutech, fitness, real-estate and F&B
            industry so far with brand design, website development, web
            application & mobile application development.
          </p>
          <Button variant="secondary" title="View our works" link="/works" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
