import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <div>
    <Link to="/strive" style={{ color: "white" }}>
      Strive
    </Link>
    <Link to="/anything" style={{ color: "white", marginLeft: "2em" }}>
      Anything
    </Link>
  </div>
);

export default NavBar;
