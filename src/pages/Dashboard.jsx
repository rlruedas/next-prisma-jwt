import React from "react";
import Layout from "../components/layout";
import { signOut, useSession } from "next-auth/react";

function Dashboard() {
  const { data: session } = useSession();

  const { username } = session.user;

  const handleSignOut = async (e) => {
    e.preventDefault();

    signOut({ callbackUrl: "/" });
  };

  console.log(session);
  return (
    <Layout>
      <h1>Hello {username.toUpperCase()} </h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </Layout>
  );
}

export default Dashboard;
