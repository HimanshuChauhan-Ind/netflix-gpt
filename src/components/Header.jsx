import { LOGO_URL } from "../assets/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../assets/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
