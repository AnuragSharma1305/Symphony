import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

// Include the SVG code for the Symphony logo
const SymphonyLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" width="150" height="150">
    <text x="5%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="100" fill="#39ff14">𝄞</text>
    <text x="57%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Pacifico, cursive" font-size="90" fill="#000">Symphony</text>
  </svg>
);

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/home");
    } else {
      alert("Failure");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
       
        <SymphonyLogo />
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
        <div className="font-bold mb-4">To continue, log in to Symphony.</div>
        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <PasswordInput label="Password" placeholder="Password" value={password} setValue={setPassword} />
        <div className=" w-full flex items-center justify-end my-8">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            LOG IN
          </button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">Don't have an account?</div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to="/signup">SIGN UP FOR SYMPHONY</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
