import React from "react";
import Layout from "../components/Layout";
import { signIn } from "next-auth/react";
import Link from "next/link";

function Login() {
  return (
    <Layout>
      <Link href="/signup">
        <button className="bg-green-600 p-2 rounded-xl">
          Register
        </button>
      </Link>
      <button className="bg-blue-600 p-2 rounded-xl" onClick={() => signIn()}>
        Sign In
      </button>
    </Layout>
  );
}

export default Login;
