const { default: Image } = require("next/image");

export const Navbar = () => {
  return (
    <nav className="w-full z-20 px-48 py-12 fixed">
      <ul className="w-full flex flex-row items-center justify-between rounded-full nav-inner-container">
        {/* Logo */}
        <div className="w-48">
          <Image src="/logo.svg" width={32} height={32} alt="Logo" />
        </div>
        {/* NavLinks */}
        <li className="flex flex-row gap-8 items-center">
          <a>WORK</a>
          <a>SERVICES</a>
          <a>ABOUT</a>
          <a>FAQ</a>
        </li>
        <div className="w-48 flex flex-row justify-end">
          <button className="cta-button-nav">CONTACT US</button>
        </div>
        {/* Contact Us Button */}
      </ul>
    </nav>
  );
};
