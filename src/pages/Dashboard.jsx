import React from "react";
import Layout from "../components/Layout";
import { signOut } from "next-auth/react";

function Dashboard(props) {
  const { data } = props;

  return (
    <Layout>
      <h1>Hello {data.user.name}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </Layout>
  );
}

export default Dashboard;
