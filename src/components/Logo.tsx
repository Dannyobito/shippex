import ShippexLogo from "../assets/shippex.svg";
const Logo = () => {
  return (
    <nav className="absolute top-12 left-12">
      <img src={ShippexLogo} />
    </nav>
  );
};

export { Logo };
