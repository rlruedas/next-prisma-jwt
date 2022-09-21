import Router from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { hashPassword } from "../utils/encrypt";

import Layout from "../components/Layout";

function Register() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encryptPass = hashPassword(userInfo.password);
    const body = { username: userInfo.username, password: encryptPass };

    try {
      await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 backdrop-blur-sm bg-slate-700 p-9 rounded-md"
        method="Post"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="John"
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
            className="rounded-sm indent-2 py-1 px-1"
            required
            minLength="4"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            className="rounded-sm indent-2 py-1 px-1"
            required={true}
            minLength="6"
          />
        </div>
        <button
          disabled={!userInfo.username && !userInfo.password}
          onSubmit={handleSubmit}
          type="submit"
          className="bg-green-600 px-2 py-2 rounded-md"
        >
          Register
        </button>
      </form>
      <ToastContainer />
    </Layout>
  );
}

export default Register;
