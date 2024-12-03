import Image from "next/image";
import React from "react";
import { Button } from "../../components/Button";

const AboutUs = () => {
  return (
    <main>
      <section>
        <h1>About Us</h1>
        <p></p>
        <Button title="Get in touch" link="/contact" />
        {/* <Image src="" width={200} height={200} /> */}
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
};

export default AboutUs;
