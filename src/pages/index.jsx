import { useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import Login from "./login";
import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <Login />
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </Layout>
  );
}
