import { LOGO_URL } from "../assets/constants";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen h-22 p-2 z-50 flex justify-between">
      <img src={LOGO_URL} alt="logo" />
      <div>
        {user.value && (
          <button
            onClick={handleSignOut}
            className="p-2  rounded-md m-3 bg-red-600 text-white cursor-pointer"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
