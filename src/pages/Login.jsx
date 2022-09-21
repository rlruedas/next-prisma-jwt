import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { router } from "next/router";
import Layout from "../components/Layout";

function Login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: userInfo.username,
      password: userInfo.password,
    });

    console.log(res);
  };

  return (
    <Layout>
      <div className="flex flex-col w-[20em] h-fit gap-5 py-5 justify-evenly items-center rounded-lg backdrop-blur-2xl bg-white bg-opacity-10">
        <form onSubmit={handleSubmit} className="flex flex-col w-fit gap-2">
          <section className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="johndoe"
              className="indent-2 rounded-sm p-1"
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
              required
            />
          </section>
          <section className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="indent-2 rounded-sm p-1 placeholder-gray-400"
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              required
            />
          </section>
        </form>
        <div className="flex w-[90%] justify-center items-center gap-5">
          <button
            onClick={handleSubmit}
            className="bg-blue-400 py-2 w-[30%] rounded-md"
            type="submit"
            disabled={!userInfo.username && !userInfo.password}
          >
            Login
          </button>
          <button
            onClick={() => router.push("/Register")}
            className="py-2 w-[30%] rounded-md border border-blue-400"
          >
            Sign Up
          </button>
        </div>
        <div className="border-[1px] border-white w-[70%]"></div>
        <div className="bg-gray-500 p-2 rounded-md">Sign in with Google</div>
      </div>
    </Layout>
  );
}

export default Login;
