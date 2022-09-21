import React from "react";
import Layout from "../components/Layout";
import { signOut } from "next-auth/react";

function Dashboard() {
  return (
    <Layout>
      <h1>Hello </h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </Layout>
  );
}

export default Dashboard;
