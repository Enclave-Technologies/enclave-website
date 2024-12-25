import Image from "next/image";
import Link from "next/link";

export const Button = ({ variant = "primary", link, title }) => {
  return (
    <Link href={link} className="flex-1">
      <button
        className={`${variant} flex flex-row items-center gap-2 min-w-fit w-full`}
      >
        <span className="button-text-container min-w-fit">
          <span className="button-text w-fit">{title}</span>
          <span className="button-text w-fit">{title}</span>
        </span>
        {/* {variant == "primary" && (
          <Image
            src={`/icons/arrow-1.svg`}
            width={16}
            height={16}
            alt={`arrow`}
          />
        )} */}
      </button>
    </Link>
  );
};
