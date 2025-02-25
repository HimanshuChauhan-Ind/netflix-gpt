import { useRef, useState } from "react";
import { BG_URL } from "../assets/constants";
import Header from "./Header";
import validateForm from "../assets/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../assets/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../assets/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [signedUp, setSignedUp] = useState(true);
  const [validationMsg, setValidationMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignUp = () => {
    setSignedUp(!signedUp);
  };

  const handleSignup = () => {
    const validation = validateForm(
      email.current.value,
      password.current.value
    );
    setValidationMsg(validation);

    if (validation) return;

    if (!signedUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setValidationMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMsg(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="brightness-45 w-screen h-screen object-cover"
          src={BG_URL}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-xl p-10 bg-gray-950/50 top-1/4 left-1/4 text-white">
          <div className="text-3xl">{signedUp ? "Sign In" : "Sign Up"}</div>
          <form onSubmit={(e) => e.preventDefault()}>
            {!signedUp && (
              <input
                ref={fullName}
                className="border border-b-white w-full p-2 my-4 rounded-md"
                type="text"
                name="fullName"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="border border-b-white w-full p-2 my-4 rounded-md"
              type="text"
              name="email"
              placeholder="Email or Username"
            />
            <input
              ref={password}
              className="border border-b-white w-full p-2 my-4 rounded-md"
              type="password"
              name="password"
              placeholder="Password"
            />
            <p className="text-red-500">{validationMsg}</p>
            <button
              onClick={handleSignup}
              className="bg-red-400 w-full my-4 p-2 rounded-md"
            >
              {signedUp ? "Sign In" : "Sign Up"}
            </button>
            <div className="cursor-pointer" onClick={toggleSignUp}>
              {signedUp
                ? "New to Netflix? Sign up now."
                : "Alredy a User? Sign in now."}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
