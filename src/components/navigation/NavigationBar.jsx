import React from "react";

export default function NavigationBar() {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };
  return (
    <nav style={navStyle}>
      <p className="f3 link dim mb0 black pa3 pointer">Sign out</p>
    </nav>
  );
}
