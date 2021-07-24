import React from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import "./componentStyle/dashboard.css";
const DashBoard = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container Projects row ">
        <div className="list1 col-3">
          <ProjectList />
        </div>
        <div className="list2 col-9">
          <ProjectDetails />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
