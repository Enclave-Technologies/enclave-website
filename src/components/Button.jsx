import Link from "next/link";

export const Button = ({
  variant = "primary",
  link = "#pricing",
  title,
  rounded = false,
  target = "_self",
  className = "",
}) => {
  return (
    <Link href={link} target={target}>
      <button
        className={`${variant} ${className} flex flex-row items-center gap-2 min-w-[150px] ${
          rounded ? "!rounded-full" : ""
        }`}
      >
        <span className="button-text w-fit text-nowrap">{title}</span>
      </button>
    </Link>
  );
};
