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
      href="https://api.whatsapp.com/send/?phone=64006201&text&type=phone_number&app_absent=0"
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
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4320_7860)">
            <path
              d="M1.02516 23.898C1.02403 27.9625 2.08603 31.9311 4.10541 35.4291L0.832031 47.3807L13.063 44.1737C16.446 46.0153 20.2363 46.9803 24.088 46.9806H24.0982C36.8135 46.9806 47.164 36.6338 47.1695 23.9162C47.1719 17.7537 44.7742 11.9588 40.4178 7.59903C36.0622 3.23965 30.2693 0.83759 24.0972 0.834778C11.3804 0.834778 1.03059 11.181 1.02534 23.898"
              fill="url(#paint0_linear_4320_7860)"
            />
            <path
              d="M0.200625 23.8905C0.199313 28.1012 1.29937 32.2118 3.39075 35.835L0 48.2151L12.6696 44.8931C16.1604 46.7964 20.0908 47.7999 24.0902 47.8014H24.1005C37.272 47.8014 47.9944 37.0824 48 23.9096C48.0023 17.5256 45.5182 11.5224 41.0062 7.0065C36.4937 2.49112 30.4937 0.002625 24.1005 0C10.9267 0 0.205875 10.7175 0.200625 23.8905ZM7.74581 35.211L7.27275 34.4601C5.28412 31.2981 4.2345 27.6441 4.236 23.892C4.24012 12.9429 13.1509 4.035 24.108 4.035C29.4143 4.03725 34.401 6.10575 38.1517 9.85875C41.9023 13.6121 43.9661 18.6015 43.9648 23.9081C43.9599 34.8572 35.049 43.7663 24.1005 43.7663H24.0926C20.5277 43.7644 17.0314 42.807 13.9823 40.9978L13.2566 40.5675L5.73825 42.5387L7.74581 35.211Z"
              fill="url(#paint1_linear_4320_7860)"
            />
            <path
              d="M18.1277 13.9028C17.6803 12.9085 17.2095 12.8884 16.784 12.8709C16.4357 12.8559 16.0374 12.8571 15.6395 12.8571C15.2413 12.8571 14.5942 13.0069 14.0473 13.6041C13.4998 14.2018 11.957 15.6463 11.957 18.5843C11.957 21.5222 14.097 24.3617 14.3953 24.7605C14.694 25.1586 18.5265 31.3806 24.5962 33.7742C29.6407 35.7634 30.6673 35.3678 31.7621 35.268C32.8571 35.1686 35.2953 33.8239 35.7928 32.4294C36.2906 31.0352 36.2906 29.8401 36.1413 29.5903C35.9921 29.3415 35.5938 29.1921 34.9967 28.8936C34.3995 28.5951 31.4634 27.1502 30.9161 26.9509C30.3686 26.7518 29.9705 26.6524 29.5723 27.2503C29.174 27.8473 28.0305 29.1921 27.6819 29.5903C27.3337 29.9895 26.9852 30.0392 26.3882 29.7405C25.7906 29.4409 23.8674 28.8111 21.5857 26.7769C19.8105 25.194 18.612 23.2393 18.2636 22.6414C17.9152 22.0444 18.2263 21.7208 18.5257 21.4232C18.794 21.1556 19.1231 20.7259 19.422 20.3773C19.7197 20.0286 19.8191 19.7798 20.0182 19.3815C20.2175 18.9829 20.1178 18.6341 19.9687 18.3355C19.8191 18.0368 18.6587 15.0835 18.1277 13.9028Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_4320_7860"
              x1="2317.7"
              y1="4655.43"
              x2="2317.7"
              y2="0.834778"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1FAF38" />
              <stop offset="1" stopColor="#60D669" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4320_7860"
              x1="2400"
              y1="4821.51"
              x2="2400"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F9F9F9" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="clip0_4320_7860">
              <rect width="48" height="48.375" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {!collapsed && (
        <>
          <span
            className={`font-semibold text-base text-[#121212] whitespace-nowrap`}
          >
            Send us a message
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
              strokeLinejoin="round"
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
