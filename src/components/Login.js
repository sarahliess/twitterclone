import twitter from "../img/twitter.png";
import { useState } from "react";

function Login() {
  const [userDetails, setUserDetails] = useState("");

  const onChange = (e) => {
    console.log(userDetails);
    setUserDetails(e.target.value);
  };

  const forgotPassword = () => {
    alert(`Sorry, we don't know your password either.`);
  };

  const loginButton = () => {
    alert(
      `Nope, not a valid user. Don't worry, this clone doesn't actually have any real users. It's not because of you, it's because of me.`
    );
  };

  return (
    <div className="LoginPage">
      <div className="LoginField">
        <img src={twitter} alt="twitterlogo" className="LoginLogo" />
        <div className="LoginInner">
          <p className="LoginTitle">Log in to twitter</p>
          <input
            onChange={onChange}
            type="text"
            placeholder="Phone, email or username"
            className="LoginInput"
          />
          <input
            onChange={onChange}
            type="password"
            placeholder="Password"
            className="LoginInput"
          />
          <button
            disabled={userDetails.length < 5}
            onClick={loginButton}
            className="LoginButton"
          >
            Login
          </button>
          <div className="LoginText">
            <a onClick={forgotPassword} href="">
              <p>Forgot password? </p>
            </a>
            <a href="https://twitter.com/login?lang=en" target="_blank">
              <p>Sign up for twitter</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
