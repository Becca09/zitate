import React from "react";
import NavBar from "../../layouts/NavBar";
import SideNav from "../../layouts/SideNav";

const Container = (props) => {
  return (
    <>
        <SideNav />
      

        <NavBar/>

      <div className="dashboardBodyContainer">{props.children}</div>
    </>
  );
};

export default Container;
