import Image from "next/image";

const Partners = ({ id }) => {
  return (
    <section id={id}>
      <div className="w-full max-w-7xl flex flex-col justify-center h-full overflow-hidden px-16">
        <div className="w-full flex flex-col items-center justify-between">
          <p className="text-center">
            Trusted by industry leaders <br></br>and innovators
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
