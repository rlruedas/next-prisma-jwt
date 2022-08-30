import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(status);
  return (
    <Layout>{session ? <Dashboard session={session} /> : <Login />}</Layout>
  );
}
