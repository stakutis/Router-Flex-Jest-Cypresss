import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const auth = {
  isAuthenticated: false,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(
    "PrivateRoute: component:",
    Component,
    "rest:",
    rest,
    "auth:",
    auth
  );
  if (!auth.isAuthenticated) alert("Please click Login FIRST!");
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

function App() {
  const Login = (props) => {
    console.log("Logggggggin");
    if (auth.isAuthenticated) {
      auth.isAuthenticated = false;
      return <Redirect to="/" />;
    }
    auth.isAuthenticated = true;
    return <Redirect to="/page2" />;
  };

  console.log("Rendering app, auth:", auth);

  const Page1 = (props) => {
    return (
      <div>
        This is page 1 {auth.isAuthenticated ? "authenticated" : "not authed"}
      </div>
    );
  };

  const Page2 = (props) => {
    return (
      <div>
        This is page 2 {auth.isAuthenticated ? "authenticated" : "not authed"}
      </div>
    );
  };

  const TallPage = (props) => {
    return (
      <div>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Main">
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/nowhere">
              No Where! {auth.isAuthenticated ? "authenticated" : "not authed"}
            </Route>
            <Route exact path="/">
              STAKUTIS ROOT auth:
              {auth.isAuthenticated ? "authenticated" : "not authed"}
            </Route>
            <PrivateRoute exact path="/page1" component={Page1}></PrivateRoute>
            <PrivateRoute exact path="/page2" component={Page2}></PrivateRoute>
            <PrivateRoute
              exact
              path="/tall"
              component={TallPage}
            ></PrivateRoute>
            <Redirect to="/nowhere" />
          </Switch>
        </div>
        <div className="App-footer">
          <div className="App-footer-item2">Test</div>
          <div className="App-footer-item1">My footer</div>
        </div>
      </Router>
    </div>
  );
}

export default App;
