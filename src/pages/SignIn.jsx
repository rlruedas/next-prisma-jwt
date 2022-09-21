import React, { useState } from "react";
import { signIn } from "next-auth/react"
import { router } from "next/router"

function SignIn() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn('credentials', {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false
    })

  };

  return (
    <div className="flex flex-col w-[20em] h-fit gap-5 py-5 justify-evenly items-center rounded-lg backdrop-blur-2xl bg-white bg-opacity-10">
      <form onSubmit={handleSubmit} className="flex flex-col w-fit gap-2">
        <section className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="johndoe"
            className="indent-2 rounded-sm p-1"
            value={userInfo.username}
            onChange={e => setUserInfo({...userInfo, username: e.target.value})}
          />
        </section>
        <section className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="indent-2 rounded-sm p-1 placeholder-gray-400"
            value={userInfo.password}
            onChange={e => setUserInfo({...userInfo, password: e.target.value})}
          />
        </section>
      </form>
      <div className="flex w-[90%] justify-center items-center gap-5">
        <button onClick={handleSubmit} className="bg-blue-400 py-2 w-[30%] rounded-md">Login</button>
        <button onClick={() => router.push("/Signup")} className="py-2 w-[30%] rounded-md border border-blue-400">
          Sign Up
        </button>
      </div>
      <div className="border-[1px] border-white w-[70%]"></div>
      <div className="bg-gray-500 p-2 rounded-md">Sign in with Google</div>
    </div>
  );
}

export default SignIn;
