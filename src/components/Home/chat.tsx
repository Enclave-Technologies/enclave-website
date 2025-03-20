import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Chat = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=85259291909&text&type=phone_number&app_absent=0"
      target="_blank"
      className={`fixed bottom-8 right-8 z-[1000] flex items-center gap-4 rounded-full shadow-lg transition-all duration-300 ${
        collapsed ? "p-1" : "p-3"
      }`}
      style={{
        background:
          "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(15px)",
      }}
    >
      <div
        className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center`}
      >
        <Image
          src="/chat.png"
          alt="Chat avatar"
          width={40}
          height={40}
          className={`object-contain`}
        />
      </div>

      {!collapsed && (
        <>
          <span
            className={`font-semibold text-base text-[#121212] whitespace-nowrap`}
          >
            Chat with us
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
              stroke="#100805"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 3H21V9"
              stroke="#100805"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 14L21 3"
              stroke="#100805"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      )}
    </Link>
  );
};

export default Chat;
