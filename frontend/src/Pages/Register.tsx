import React, { useState } from "react";
import { useRegisterUserMutation } from "../Apis/authApi";
import { inputHelper, toastNotify } from "../Helper";
import { apiResponse } from "../Interfaces";
import { SD_Roles } from "../Utility/SD";
import { useNavigate } from "react-router-dom";
import { MainLoader } from "../Components/Page/Common";
import { AuthFormContainer, DemoLogin } from "../Components/Layout";

function Register() {
  const [registerUser] = useRegisterUserMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    userName: "",
    password: "",
    role: "",
    name: "",
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response: apiResponse = await registerUser({
      userName: userInput.userName,
      password: userInput.password,
      role: userInput.role,
      name: userInput.name,
    });
    if (response.data) {
      toastNotify("Registeration successful! Please login to continue.");
      navigate("/login");
    } else if (response.error) {
      toastNotify(response.error.data.errorMessages[0], "error");
    }
    setLoading(false);
  };

  return (
    <AuthFormContainer
      title={
        <h1>
          <span>Register</span> with us today and feel the difference for <span>yourself</span>
        </h1>
      }
      subtitle={"Discover the delicious, wholesome flavors of healthy eating. "}
      loading={loading}
      form={
        <div className="form__content">
          <form method="post" onSubmit={handleSubmit}>
            <h1>Join Us 👋 </h1>
            <p className="sub-title p-text" style={{ marginBottom: "15px" }}>
              Enter your details below and start your healthy eating journey.{" "}
            </p>

            <div className="input__container">
              <p>Email</p>
              <input
                type="text"
                className="form-control"
                required
                name="userName"
                value={userInput.userName}
                onChange={handleUserInput}
              />
            </div>
            <div className="input__container">
              <p>Name</p>
              <input
                type="text"
                className="form-control"
                required
                name="name"
                value={userInput.name}
                onChange={handleUserInput}
              />
            </div>
            <div className="input__container">
              <p>Password</p>
              <input
                type="password"
                className="form-control"
                required
                name="password"
                value={userInput.password}
                onChange={handleUserInput}
              />
            </div>
            <div className="input__container">
              <select
                className="form-control form-select"
                required
                value={userInput.role}
                name="role"
                onChange={handleUserInput}
              >
                <option value="">Select Role</option>
                <option value={`${SD_Roles.CUTOMER}`}>Customer</option>
                <option value={`${SD_Roles.ADMIN}`}>Admin</option>
              </select>
            </div>

            <button type="submit" className="btn btn__dark" disabled={loading}>
              Register
            </button>
            <div className="or__container">
              <hr />
              <p>or</p>
              <hr />
            </div>
          </form>
          <div className="row">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn btn__outline-dark"
            >
              Login
            </button>
            <DemoLogin />
          </div>
        </div>
      }
    />
  );
}

export default Register;
