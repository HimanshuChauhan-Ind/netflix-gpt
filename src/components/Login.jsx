import { useRef, useState } from "react";
import { BG_URL } from "../assets/constants";
import Header from "./Header";
import validateForm from "../assets/validateForm";

const Login = () => {
  const [signedUp, setSignedUp] = useState(true);
  const [validationMsg, setValidationMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    setSignedUp(!signedUp);
  };

  const handleSignup = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const validation = validateForm(
      email.current.value,
      password.current.value
    );
    setValidationMsg(validation);
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
