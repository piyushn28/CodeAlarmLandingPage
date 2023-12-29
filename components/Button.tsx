import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
};

const Button = ({ type, title, icon, variant, full, href }: ButtonProps) => {
  const buttonContent = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </>
  );

  if (href) {
    return (
      <Link href={href} target="blank">
        <div
          className={`flexCenter gap-3 rounded-full border
    ${variant}
    ${full && "w-full"}`}
        >
          {buttonContent}
        </div>
      </Link>
    );
  }

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
