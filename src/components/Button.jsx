import Link from "next/link";

export const Button = ({ variant = "primary", link, title }) => {
  return (
    <Link href={link}>
      <button className={`${variant}`}>
        <span className="button-text-container">
          <span className="button-text">{title}</span>
          <span className="button-text">{title}</span>
        </span>
      </button>
    </Link>
  );
};
