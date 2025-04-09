import Image from "next/image";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

export const Button = ({
  variant = "primary",
  link = "#pricing",
  title,
  rounded = false,
  target = "_self",
}) => {
  return (
    <Link href={link} className="" target={target}>
      <button
        className={`${variant} flex flex-row items-center gap-2 min-w-fit ${
          rounded ? "!rounded-full" : ""
        }`}
      >
        <span className="button-text w-fit">{title}</span>
      </button>
    </Link>
  );
};
