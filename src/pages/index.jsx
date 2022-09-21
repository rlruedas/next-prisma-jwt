import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import Login from "./login";
import Layout from "../components/Layout";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(status);

  if(status === "loading") {
    return <Layout><h1>Loading...</h1></Layout>
  }

  return (
    <Layout>{session ? <Dashboard data={session} /> : <Login />}</Layout>
  );
}
