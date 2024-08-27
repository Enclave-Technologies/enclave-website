const { default: Image } = require("next/image");

export const Footer = () => {
  return (
    <footer className="footer pb-16">
      <button className="big-cta-button">Get in touch</button>
      <div className="max-w-full flex flex-row overflow-x-hidden">
        <span className="footer-scroll-title pr-48">ENCLAVE</span>
        <span className="footer-scroll-title pr-48">ENCLAVE</span>
      </div>
      <div
        className="w-full px-4 lg:px-24 flex flex-col gap-8 items-center"
        style={{ paddingBottom: 0 }}
      >
        <div className="footer-links-container gap-8">
          <div className="w-auto md:w-52">
            <Image src="/logo.svg" width={42} height={42} alt="Logo" />
          </div>
          <ul>
            <li className="flex flex-col md:flex-row gap-12">
              <a className="text-center">WORK</a>
              <a className="text-center">SERVICES</a>
              <a className="text-center">ABOUT</a>
              <a className="text-center">FAQ</a>
            </li>
          </ul>
          <ul>
            <li className="flex flex-row gap-4 w-52">
              <a>
                <Image src="/Facebook.svg" width={24} height={24} alt="Logo" />
              </a>
              <a>
                <Image src="/Instagram.svg" width={24} height={24} alt="Logo" />
              </a>
              <a>
                <Image src="/X.svg" width={24} height={24} alt="Logo" />
              </a>
              <a>
                <Image src="/Linkedin.svg" width={24} height={24} alt="Logo" />
              </a>
              <a>
                <Image src="/Youtube.svg" width={24} height={24} alt="Logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="h-0.5 w-full bg-black" />
        <div className="w-full gap-8 md:w-2/3 flex flex-col md:flex-row items-center justify-between">
          <p className="text-center">© 2024 ENCLAVE. All right reserved</p>
          <p className="underline md:no-underline">Privacy Policy</p>
          <p className="underline md:no-underline">Terms & Conditions</p>
          <p className="underline md:no-underline">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};
