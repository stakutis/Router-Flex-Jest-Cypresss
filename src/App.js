import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { DropDown, DropDownItem } from "./components/DropDown";
import { TallPage } from "./components/TallPage";
import styled from "styled-components";

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
    if (auth.isAuthenticated) {
      auth.isAuthenticated = false;
      return <Redirect to="/" />;
    }
    auth.isAuthenticated = true;
    return <Redirect to="/page2" />;
  };

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

  const BorderedTextWithEmbeddedLabel = (props) => {
    return (
      <div
        style={{
          border: "3px solid black",
          width: props.boxWidth,
          paddingTop: "5px",
          position: "relative",
        }}
      >
        <label
          htmlFor="myText"
          style={{
            position: "absolute",
            top: "-13px",
            left: 8,
            backgroundColor: "white",
          }}
        >
          {props.label}
        </label>
        {props.children}
      </div>
    );
  };

  const useMyHook = () => {
    const [myValue, setMyValue] = useState(5);

    useEffect(() => {
      setInterval(() => {
        setMyValue((prev) => {
          return prev + 1;
        });
      }, 1000);
    }, []);
    return [myValue, setMyValue];
  };

  const wrapAComponent = (BaseComp) => (props) => {
    return (
      <BaseComp {...props} name="stakutis">
        Wrapped; name value overriden Wrapped: has children: {props.children}
      </BaseComp>
    );
  };

  const InnerComponent = (props) => {
    return (
      <div>
        Inner Component <button>InnerButton</button>
        <p>props.fish:{props.fish}</p>
        <p>props.name:{props.name}</p>
        <p>My children: {props.children}</p>
      </div>
    );
  };

  const UseHookExample = (props) => {
    const [myValue, setMyValue] = useMyHook();
    return <div>Value is w/sub-hook is {myValue}</div>;
  };

  // Styled component named StyledButton
  const StyledButton = styled.button`
    background-color: grey;
    font-size: 12px;
    color: white;
  `;

  function StyledComponent(props) {
    // Use it like any other component.
    return (
      <p style={{ display: "block " }}>
        <StyledButton> This is a styled-component button </StyledButton>
        {props.children}
      </p>
    );
  }

  const MyDropDown = (props) => {
    // we could blend dropdownstyle first...
    return (
      <DropDown
        labelStyle={{ backgroundColor: "blue", width: 200 }}
        dropDownStyle={{
          width: 150,
          paddingLeft: 5,
          backgroundColor: "green",
          textAlign: "left",
        }}
        {...props}
      >
        {props.children}
      </DropDown>
    );
  };

  const Home = (props) => {
    const [myValue, setMyValue] = useState("Initial value");
    const [dropdownDisplay, setDropdownDisplay] = useState("none");
    let WrappedComponent = wrapAComponent(InnerComponent);

    return (
      <div>
        <h2>Welcome to a simple set of test/example code fragments</h2>
        <p>
          The tabs at the top: Home gets you here. The Tall one gets you to page
          that is tall-enough to need scrolling and be sure that the bottom Nav
          stays glued etc. The other two Links require you to be logged-in;
          ensure it fails if not, and then click login.
        </p>
        <p>
          Part of this test/suite/examples is automated testing, but Jest and
          Cypresss. To run each do:
          <ul>
            <li> Jest: npm test</li>
            <li> Cypresss GUI: npx cypress open</li>
            <li> Or: npm run cypress -- CLI (or npx cypress run</li>
          </ul>
        </p>
        What is your current authenticated state:{" "}
        {auth.isAuthenticated ? "Authenticated" : "NOT authenticated"}
        <p>---Component Dropdown button-------</p>
        <p>
          Mouse-over the black buttons; Ensure dropdown occurs, mouse down and
          ensure animates item; click and ensure visits the target page. Ensure
          ALL 4 buttons go across the page, no breaking, and no movement when
          mousing-over.
        </p>
        <button>Just a fake button</button>
        <DropDown
          label="Car Type"
          dropDownStyle={{ width: 150, paddingLeft: 5 }}
        >
          <DropDownItem to="/page1" as={NavLink}>
            Page1
          </DropDownItem>
          <DropDownItem to="/page2" as={NavLink}>
            Page2
          </DropDownItem>
          <DropDownItem to="/tall">Tall</DropDownItem>
        </DropDown>
        <DropDown label="Color">
          <div style={{ color: "red" }}>Red</div>
          <DropDownItem style={{ color: "blue" }}>Blue </DropDownItem>
          <div style={{ color: "black" }}>Ugly</div>
        </DropDown>{" "}
        <button>Just another fake button</button>
        <p>---- Layered dropdown component----------</p>
        <p>Similar to above, but uses a wrapped-component to alter defaults</p>
        <MyDropDown label="MyDropDown">
          <div style={{ color: "red" }}>Red</div>
          <DropDownItem style={{ color: "blue" }}>Blue </DropDownItem>
          <div style={{ color: "black" }}>Ugly</div>
        </MyDropDown>
        <MyDropDown label="MyDropDown2">
          <div style={{ color: "red" }}>Red</div>
          <DropDownItem style={{ color: "blue" }}>Blue </DropDownItem>
          <div style={{ color: "black" }}>Ugly</div>
        </MyDropDown>
        <button>Just another fake button</button>
        <StyledComponent> eat me...</StyledComponent>
        <p>--Padding/Margin examples; W/O box-sizing:border-box</p>
        <span
          style={{
            display: "inline-block",
            padding: 0,
            margin: 0,
            width: "400px",
            backgroundColor: "blue",
            color: "white",
            border: "3px solid black",
          }}
        >
          No pad/marg
        </span>
        <button>next</button>
        <p></p>
        <span
          style={{
            display: "inline-block",
            padding: 0,
            margin: 0,
            width: "400px",
            backgroundColor: "blue",
            color: "white",
            border: "3px solid black",
            padding: 30,
          }}
        >
          pad30
        </span>
        <button>next</button>
        <p></p>
        <span
          style={{
            display: "inline-block",
            padding: 0,
            margin: 0,
            width: 400,
            backgroundColor: "blue",
            color: "white",
            border: "3px solid black",
            margin: 30,
          }}
        >
          marg30
        </span>
        <button>next</button>
        <p></p>
        <span
          style={{
            display: "inline-block",
            width: 400,
            backgroundColor: "blue",
            color: "white",
            border: "3px solid black",
            margin: 30,
            padding: 30,
          }}
        >
          marg+pad30
        </span>
        <button>next</button>
        <p></p>
        <p>--- Now WITH box-sizing:border-box and padding...</p>
        <span
          style={{
            display: "inline-block",
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
            width: "400px",
            backgroundColor: "blue",
            color: "white",
            border: "3px solid black",
            padding: 30,
          }}
        >
          pad30 w/border-box
        </span>
        <button>next</button>
        <p></p>
        <p>--- use Hook example ----</p>
        <UseHookExample />
        <p>--- HOC example ----</p>
        <InnerComponent fish="myfish" name="haha">
          Inner component not wrapped
        </InnerComponent>
        <p>-------------------</p>
        <WrappedComponent fish="food" name="haha">
          Main Level Child
        </WrappedComponent>
        <p>----- Label-upper placement example --------------</p>
        <form>
          <BorderedTextWithEmbeddedLabel
            placeholder="My placeholder..."
            boxWidth="400px"
            label="This is my label"
          >
            <input
              type="text"
              value={myValue}
              style={{
                backgroundColor: "rgba(255,0,0,.5)",
                width: "calc(100% - 20px)",
                margin: 0,
              }}
              id="myText"
              name="name"
              onChange={(e) => {
                setMyValue(e.target.value);
              }}
              placeholder="Enter something please"
            />
            <input type="text" placeholder="Myplace" />
            <button
              onClick={(e) => {
                alert("Clicked! Value:" + myValue);
              }}
            >
              Click me!
            </button>
          </BorderedTextWithEmbeddedLabel>
        </form>
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
              <Home />
            </Route>
            <PrivateRoute exact path="/page1" component={Page1}></PrivateRoute>
            <PrivateRoute exact path="/page2" component={Page2}></PrivateRoute>
            <Route exact path="/tall" component={TallPage}></Route>
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
