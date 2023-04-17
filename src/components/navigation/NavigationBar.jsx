import React from "react";

export default function NavigationBar() {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };
  return (
    <nav style={navStyle}>
      <p className="f5 fw3 link pa3 dim mb0 black  pointer underline-hover">
        Sign out
      </p>
    </nav>
  );
}
