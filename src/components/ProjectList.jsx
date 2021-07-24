import React from "react";
import "./componentStyle/ProjectLists.css";
import { NavLink } from "react-router-dom";
const ProjectList = () => {
  return (
    <div className="list">
      <div className="user">
        <img
          className="developer-img"
          src="https://images.unsplash.com/photo-1623122245120-7eef6faa39c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h2 className="developer-name">Developer Name</h2>
      </div>
      <div className="projectItems">
        <div className="Projects_list">
          <NavLink className="pro-links" activeClassName="pro-active" to="/">
            Project 1
          </NavLink>

          <NavLink className="pro-links" activeClassName="pro-active" to="/">
            Project 2
          </NavLink>

          <NavLink className="pro-links" activeClassName="pro-active" to="/">
            Project 3
          </NavLink>

          <NavLink className="pro-links" activeClassName="pro-active" to="/">
            Project 4
          </NavLink>

          <NavLink className="pro-links" activeClassName="pro-active" to="/">
            Project 5
          </NavLink>

          <NavLink className="pro-links" activeClassName="pro-active" to="/">
            Project 6
          </NavLink>

          <NavLink className="pro-links" activeClassName="pro-active" to="/">
            Project 7
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ProjectList;
