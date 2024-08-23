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
        className="w-full px-24 flex flex-col gap-8 items-center"
        style={{ paddingBottom: 0 }}
      >
        <div className="w-full flex flex-row items-center justify-between">
          <div className="w-52">
            <Image src="/logo.svg" width={42} height={42} alt="Logo" />
          </div>
          <ul>
            <li className="flex flex-row gap-12">
              <a>WORK</a>
              <a>SERVICES</a>
              <a>ABOUT</a>
              <a>FAQ</a>
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
        <div className="w-2/3 flex flex-row items-center justify-between">
          <p>© 2024 ENCLAVE. All right reserved</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};
