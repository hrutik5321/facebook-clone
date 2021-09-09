import React, { useState } from "react";
import { signin, authenticate } from "../../Backend/authhelper";
import Link from "next/link";
import { useRouter } from "next/router";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("hrutikdhumal@gmail.com");
  const [password, setPassword] = useState("hrutik123");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    signin({ email, password }).then((data) => {
      if (data.error) {
        console.log("Error While Signin");
        return "";
      } else {
        authenticate(data, () => {
          router.push("/");
        });
      }
    });
  };

  return (
    <form className="w-3/6 h-80 bg-white border border-gray-200 shadow-md rounded-lg p-4">
      <input
        type="email"
        className="rounded-md w-full border border-gray-300 p-3 text-base outline-none  focus:border-blue-500"
        placeholder="Email or phone number"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="rounded-md w-full border border-gray-300 p-3 mt-3 outline-none  focus:border-blue-500"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Link href="/">
        <button
          type="submit"
          onClick={onSubmitHandler}
          className="w-full mt-3 rounded-lg py-3 bg-blue-600 text-white text-xl font-bold"
        >
          Log in
        </button>
      </Link>
      <p className="text-center text-sm text-blue-600 mt-3">Forget Password</p>
      <hr className="mt-4 border bg-gray-300" />
      <div className="flex w-full justify-center mt-3.5">
        <button className="p-3 bg-green text-white rounded-md text-base font-bold bg-green-dark ">
          Create a new Account
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
