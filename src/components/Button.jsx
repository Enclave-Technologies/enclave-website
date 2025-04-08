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
        <span className="button-text-container min-w-fit">
          <span className="button-text w-fit">{title}</span>
          <span className="button-text w-fit">{title}</span>
        </span>
        {/* {variant == "primary" && (
          <Image src={`/icons/arrow-1.svg`} width={16} height={16} alt="" />
        )} */}

        {/* {variant == "secondary" && <FiExternalLink color="#FB4E29" size={20} />} */}
      </button>
    </Link>
  );
};
