import { LOGO_URL, SUPPORTED_LANGUAGES } from "../assets/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../assets/userSlice";
import { setGPTSeatch } from "../assets/gptSlice";
import { setLang } from "../assets/appConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const gptSearch = useSelector((state) => state.gpt.gptSearch);

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

  const handleSearch = () => {
    dispatch(setGPTSeatch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLangChange = (e) => {
    dispatch(setLang(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen h-22 p-2 z-50 flex justify-between">
      <img src={LOGO_URL} alt="logo" />
      <div>
        {user.value && (
          <>
            {gptSearch && (
              <select
                className="border border-white rounded-md p-2 m-3 text-white"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleSearch}
              className="p-2  rounded-md m-3 bg-purple-600 text-white cursor-pointer"
            >
              GPT Search
            </button>
            <button
              onClick={handleSignOut}
              className="p-2  rounded-md m-3 bg-red-600 text-white cursor-pointer"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
