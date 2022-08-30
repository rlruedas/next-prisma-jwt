import React from "react";

function Login() {
  return (
    <div>
      
      <button className="bg-blue-600 p-2 rounded-xl" onClick={() => signIn()}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
