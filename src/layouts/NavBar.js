import React from "react";
import "../layouts/layouts.css";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { ImQuotesRight } from "react-icons/im";


const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 color="white">
        {" "}
        <ImQuotesRight /> zitate <ImQuotesRight />
      </h1>
      <div className="headerNavLinks">
        <div className="links" onClick={() => navigate("./")}>
          {" "}
          Quotes{" "}
        </div>
        <div className="links" onClick={() => navigate("./my-quotes")}>
          My Quotes
        </div>
        <div className="links" onClick={() => navigate("./new-quote")}>
          {" "}
          <p> New Quotes</p>
        </div>
        <div className="links">
          {" "}
          <p>
            {" "}
            <RiLogoutCircleRLine style={{ marginLeft: "7%" }} />{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
