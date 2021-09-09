import React from "react";

import LoginLogo from "../components/Login/LoginLogo";
import LoginForm from "../components/Login/LoginForm";

function Login() {
  return (
    <div className="w-screen flex justify-center items-center h-screen">
      <div className="w-3/4 flex  items-center justify-between">
        <LoginLogo />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
