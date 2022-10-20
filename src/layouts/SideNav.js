/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";
import "../layouts/layouts.css";

const SideNav = () => {
  const [width, setWidth] = useState("20%");
  function toggleWidth() {
    width === "20%" ? setWidth("10%") : setWidth("20%");
  }

  const navigate = useNavigate();
  return (
    <div className="dashboardSideNav" style={{ width: width }}>
      <h1 color="white">
        {" "}
        <ImQuotesRight /> zitate <ImQuotesRight />
      </h1>
      <div className="sideNavControlSection">
        <div id="userName">
          <h3>Bunmi Oluoye</h3>
        </div>
      </div>
      <div className="sideNavLinks">
        <div className="links" onClick={() => navigate("./")}>
          {" "}
          {width === "20%" ? (
            <p>
              {" "}
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Quotes{" "}
              </Link>
              <ImQuotesLeft style={{ marginLeft: "7%" }} />{" "}
            </p>
          ) : (
            <ImQuotesLeft />
          )}
        </div>
        <div className="links" onClick={() => navigate("./my-quotes")}>
          {width === "20%" ? (
            <p>
              {" "}
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/my-quotes"
              >
                {" "}
                My Quotes{" "}
              </Link>{" "}
              <ImQuotesRight style={{ marginLeft: "7%" }} />{" "}
            </p>
          ) : (
            <ImQuotesRight />
          )}
        </div>
        <div className="links" onClick={() => navigate("./new-quote")}>
          {width === "20%" ? (
            <p>
              {" "}
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/new-quote"
              >
                {" "}
                New Quote{" "}
              </Link>{" "}
              <BiMessageSquareAdd style={{ marginLeft: "7%" }} />{" "}
            </p>
          ) : (
            <BiMessageSquareAdd />
          )}
        </div>
        <div className="links">
          {" "}
          {width === "20%" ? (
            <p>
              {" "}
              Logout <RiLogoutCircleRLine style={{ marginLeft: "7%" }} />{" "}
            </p>
          ) : (
            <RiLogoutCircleRLine />
          )}
        </div>
      </div>

      <div id="sideNavHamburger">
        {width === "10%" ? (
          <AiOutlineArrowLeft
            color="white"
            display="flex"
            fontSize={22}
            onClick={toggleWidth}
            cursor="pointer"
          />
        ) : (
          <AiOutlineArrowRight
            color="white"
            display="flex"
            fontSize={22}
            onClick={toggleWidth}
            cursor="pointer"
          />
        )}
      </div>
    </div>
  );
};

export default SideNav;
