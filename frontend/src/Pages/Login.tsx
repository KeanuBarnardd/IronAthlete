import React, { useState } from "react";
import { useLoginUserMutation } from "../Apis/authApi";
import { inputHelper } from "../Helper";
import { apiResponse, userModel } from "../Interfaces";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedInUser } from "../Storage/Redux/userAuthSlice";
import { MainLoader } from "../Components/Page/Common";
import { DemoLogin, AuthFormContainer } from "../Components/Layout";


function Login() {
  const [error, setError] = useState("");
  const [loginUser] = useLoginUserMutation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    userName: "",
    password: "",
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response: apiResponse = await loginUser({
      userName: userInput.userName,
      password: userInput.password,
    });
    if (response.data) {
      const { token } = response.data.result;
      const { fullName, id, email, role }: userModel = jwt_decode(token);
      localStorage.setItem("token", token);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
      navigate("/");
    } else if (response.error) {
      setError(response.error.data.errorMessages[0]);
    }
    setLoading(false);
  };

  return (
    <AuthFormContainer
      title={
        <h1>
          Let's get to work, Iron Athlete! <span>Login</span>  now to start <span>your</span>  fitness journey.
        </h1>
      }
      subtitle={"Don't wait to get healthy eat with the best food people now. "}
      loading={loading}
      form={
        <div className="form__content">
          <form className="login__form-container" method="post" onSubmit={handleSubmit}>
            <h1>Hey, Hello 👋 </h1>
            <p className="p-text" style={{ marginBottom: "30px" }}>
              Enter your information you entered while registering.{" "}
            </p>
            <div className="input__container col">
              <p className="">Email</p>
              <input
                type="text"
                className="input"
                placeholder=""
                required
                name="userName"
                value={userInput.userName}
                onChange={handleUserInput}
              />
            </div>

            <div className="input__container col">
              <p>Password</p>
              <input
                type="password"
                className="input"
                placeholder=""
                required
                name="password"
                value={userInput.password}
                onChange={handleUserInput}
              />
            </div>

            {error && (
              <div className="error__container">
                <p className="error__text">{error}</p>
              </div>
            )}
            <button type="submit" className="btn btn__dark">
              Login
            </button>
            <div className="or__container">
              <hr />
              <p>or</p>
              <hr />
            </div>
          </form>
          <div className="row">
            <button
              className="btn btn__outline-dark"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>

            <DemoLogin />
          </div>
        </div>
      }
    />
  );
}

export default Login;
