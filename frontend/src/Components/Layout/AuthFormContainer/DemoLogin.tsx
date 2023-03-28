import React, { useState } from "react";
import { useLoginUserMutation } from "../../../Apis/authApi";
import { apiResponse, userModel } from "./../../../Interfaces";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedInUser } from "../../../Storage/Redux/userAuthSlice";
import jwt_decode from "jwt-decode";

// Demo Login Details
/*
  Email: demoUser@gmail.com
  Name: Demo User
  Password: demo123
  Role: Admin
*/

export default function DemoLogin() {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const response: apiResponse = await loginUser({
      userName: "demoUser@gmail.com",
      password: "demo123",
    });

    if (response.data) {
      const { token } = response.data.result;
      const { fullName, id, email, role }: userModel = jwt_decode(token);
      localStorage.setItem("token", token);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
      navigate("/");
    } else if (response.error) {
      setError(response.error.data.errorMessages[0]);
      console.error("Our demo user does not exist or username password is different please check.");
    }
  };

  return (
    <button className="btn btn__outline-dark" onClick={handleSubmit}>
      Demo Login
    </button>
  );
}
