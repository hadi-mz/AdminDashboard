"use client";
import React, { useEffect, useRef } from "react";
import Styles from "./login.module.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/UserProvider";

export default function LoginPage() {
  const { user, setUser } = useUser();
  const userName = "hadi";
  const password = "12";
  const txtuserName = useRef();
  const txtpassword = useRef();
  function Login() {
    console.log(txtuserName.current.value, txtpassword.current.value);
    setUser(txtuserName.current.value)
    localStorage.setItem("user",txtuserName.current.value)
    if (
      password === txtpassword.current.value &&
      txtuserName.current.value === userName
    ) {
      window.location.href = "/dashbord";
    } else {
      alert("Worng !");
    }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.form}>
        <div className={Styles.title}>login Dashbord</div>
        <div className={Styles.inputs}>
          <div className="grid w-full max-w-sm items-center ">
            <Label htmlFor="email">username</Label>
            <Input
              type="email"
              id="email"
              placeholder="Username"
              ref={txtuserName}
              required
            />
          </div>
        </div>
        <div className={Styles.inputs}>
          <div className="grid w-full max-w-sm items-center ">
            <Label htmlFor="password">Password</Label>
            <Input
              type="Password"
              id="password"
              placeholder="Password"
              ref={txtpassword}
              required
            />
          </div>
        </div>
        <div className={Styles.button}>
          <button
            onClick={Login}
            className="bg-white  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
