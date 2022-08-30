import React from "react";
import Layout from "../components/Layout";

function Dashboard(props) {
  return (
    <Layout>
      <div>
        <h1>
          Hello {session.user.name}
          <button onClick={() => signOut()}>Sign Out</button>
        </h1>
      </div>
    </Layout>
  );
}

export default Dashboard;
