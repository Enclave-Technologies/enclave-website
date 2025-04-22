import Image from "next/image";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

export const Button = ({
  variant = "primary",
  link = "#pricing",
  title,
  rounded = false,
  target = "_self",
  className = "",
}) => {
  return (
    <Link href={link} className={className} target={target}>
      <button
        className={`${variant} flex flex-row items-center gap-2 min-w-[180px] ${
          rounded ? "!rounded-full" : ""
        }`}
      >
        <span className="button-text w-fit">{title}</span>
      </button>
    </Link>
  );
};
