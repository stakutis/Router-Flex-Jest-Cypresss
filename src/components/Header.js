import React from "react";
import { NavLink } from "react-router-dom";

//<Link to="/today" /> // renders <a href="/calendar/today">

export default function (props) {
  return (
    <header className="App-header">
      <div className="App-header-edge-left">
        <NavLink
          className="App-link"
          exact={true}
          to="/page1"
          activeStyle={{ color: "red" }}
        >
          Page-1
        </NavLink>
        <NavLink
          className="App-link"
          exact={true}
          to="/page2"
          activeStyle={{ color: "red" }}
        >
          Page-2
        </NavLink>
        <NavLink
          className="App-link"
          exact={true}
          to="/tall"
          activeStyle={{ color: "red" }}
        >
          Tall
        </NavLink>
      </div>
      <div className="App-header-middle">Welcome to my TEST app!</div>
      <div className="App-header-edge-right">
        <NavLink
          className="App-link"
          exact={true}
          to="/login"
          activeStyle={{ color: "red" }}
        >
          Login/Out
        </NavLink>
      </div>
    </header>
  );
}
