import React from "react";


// Demo Login Details
/*
  Email: demoUser@gmail.com
  Name: Demo User
  Password: demo123
  Role: Admin
  
*/



export default function DemoLogin() {
  return (
    <button
      className="btn btn-outline"
      onClick={() => {
        console.log("Demo Login Button");
      }}
    >
      Demo Login
    </button>
  );
}
