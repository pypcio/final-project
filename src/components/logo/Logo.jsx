import React from "react";
import Tilt from "react-parallax-tilt";
import "../../styles/logo.css";
import LOGOimg from "./TEST-Logo.png";
function Logo() {
  return (
    <Tilt className="logoStyle">
      <div>
        <img src={LOGOimg} alt="TEST Logo" />
        {/* <h1>React Parallax Tilt </h1> */}
      </div>
    </Tilt>
  );
}
export default Logo;