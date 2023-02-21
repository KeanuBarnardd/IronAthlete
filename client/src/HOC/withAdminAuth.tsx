import React from "react";
import jwt_decode from "jwt-decode";
import { SD_Roles } from "../Utility/SD";

export default function withAdminAuth(WrappedComponent: any) {
  return (props: any) => {
    console.log("HOC Called");
    // If a user is not logged in then it will take us to the login page...
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      const decode: { role: string } = jwt_decode(accessToken);
      if (decode.role !== SD_Roles.ADMIN) {
        window.location.replace("/accessDenied");
        return null;
      }
    } else {
      window.location.replace("/login");
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}
