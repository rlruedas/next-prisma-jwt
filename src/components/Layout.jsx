import React from "react";

function Layout(props) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {props.children}
    </div>
  );
}

export default Layout;
