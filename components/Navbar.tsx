import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="
    flexBetween 
    max-container 
    padding-container 
    relative 
    z-30 
    py-5"
    >
      <Link href={"/"}>
        <Image src="/code_alarm_logo.svg" alt="logo" width={200} height={60} />
      </Link>
    </nav>
  );
};

export default Navbar;
