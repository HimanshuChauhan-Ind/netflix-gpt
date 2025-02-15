import { LOGO_URL } from "../assets/constants";

const Header = () => {
  return (
    <div className="absolute w-50 p-2 z-50">
      <img src={LOGO_URL} alt="logo" />
    </div>
  );
};

export default Header;
