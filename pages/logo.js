import { Link } from "@nextui-org/react";

const Logo = () => {
  return (
    <Link href="/">
      <img
        alt="alchemy logo"
        src="alchemyblue.png"
        style={{ maxWidth: "40px", marginRight: "4px" }}
      ></img>
    </Link>
  );
};

export default Logo;
