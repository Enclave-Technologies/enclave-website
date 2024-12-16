import Image from "next/image";
import Link from "next/link";

export const Button = ({ variant = "primary", link, title }) => {
  return (
    <Link href={link}>
      <button className={`${variant} flex flex-row items-center gap-2`}>
        <span className="button-text-container">
          <span className="button-text">{title}</span>
          <span className="button-text">{title}</span>
        </span>
        {variant == "primary" && (
          <Image src={`/icons/arrow-1.svg`} width={16} height={16} />
        )}
      </button>
    </Link>
  );
};
