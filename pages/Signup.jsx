import { useRouter } from "next/router";
import React, { useState } from "react";

import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";

import { hashPassword } from "../utils/encrypt";
import { signIn } from "next-auth/react";

function Signup() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passencrpyt = hashPassword(password);

    const res = await signIn("Credentials", {
      username,
      password: passencrpyt,
      redirect: false,
    });

    if (res?.error) {
      toast(res.error);
    }

    if (res?.ok) {
      toast("Logging In");
      router.push("/");
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 backdrop-blur-sm bg-slate-700 p-9 rounded-md"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="John"
            onChange={(e) => setUserName(e.target.value)}
            className="rounded-sm indent-2 py-1 px-1"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-sm indent-2 py-1 px-1"
          />
        </div>
        <button
          onClick={handleSubmit}
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

export default Signup;
