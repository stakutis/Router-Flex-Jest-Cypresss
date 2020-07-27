import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [loggedIn, setLogged] = useState(false);
  const Login = (props) => {
    setLogged(!loggedIn);
    return <Redirect to="/page2" />;
    return <div>Hi</div>;
  };

  console.log("Rendering app, loggedIn:", loggedIn);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Main">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/">
              Logged-in? {loggedIn ? "Yes" : "Nah"}
            </Route>
            {/* loggedIn ? (
              <>
                <Route exact path="/page1">
                  This is page 1
                </Route>
                <Route exact path="/page2">
                  This is page 2; Logged-in? {loggedIn ? "Yes" : "Nah"}
                </Route>
              </>
            ) : (
              <Redirect to="/" />
            )*/}
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
