import React from "react";

export default function withAuth(WrappedComponent: any) {
  return (props: any) => {
    console.log("HOC Called");
    // If a user is not logged in then it will take us to the login page...
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      window.location.replace("/login");
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}
