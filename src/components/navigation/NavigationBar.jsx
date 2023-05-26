import React from "react";
import { NavLink, useLocation, useNavigation } from "react-router-dom";
// export async function loader({ request, params }) {
//   request.url
//   console.log("tojw url: ", );
//   return
// }
function NavigationBar() {
  const location = useLocation();
  console.log("location: ", location.pathname);
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };
  return (
    <nav style={navStyle}>
      <NavLink
        className="f5 fw3 pa3 mb0 white  pointer navlink "
        to={location.pathname !== "/" ? "/" : "signIn"}
      >
        {location.pathname === "/" ? (
          <span>Sign In</span>
        ) : (
          <span>Sign out</span>
        )}
      </NavLink>
    </nav>
  );
}
export default NavigationBar;
