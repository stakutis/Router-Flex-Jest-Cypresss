import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ShowModalBackground, {
  MessageModal,
} from "./components/ShowModalBackground";

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

  const Adv = (props) => {
    const [showAd, setShowAd] = useState(true);
    if (showAd)
      return (
        <div className="Adv">
          This is an add
          <br />
          <button
            onClick={(e) => {
              setShowAd(false);
            }}
          >
            Cancel
          </button>
        </div>
      );
    return (
      <MessageModal>
        This is a test modal
        <br />
        Click anywhere on the page and it should go away
        <p>Or click my button</p>
        <button>My Button</button>
      </MessageModal>
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
        <p>Tall page Try to scroll down...</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page Make sure the banners and 'ad' stay in place...</p>
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
        <Adv />

        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>
          Lots and lots to talk about....test test test ...Dont get the virus!!
        </p>
        <p>
          Lots and lots to talk about....test test test ...Dont get the virus!!
        </p>
        <p>
          Lots and lots to talk about....test test test ...Dont get the virus!!
        </p>
        <p>
          Lots and lots to talk about....test test test ...Dont get the virus!!
        </p>
        <p>Tall page</p>
        <p>Tall page</p>
        <p>Tall page</p>
      </div>
    );
  };

  const BorderedTextWithEmbeddedLabel = (props) => {
    console.log("props:", props);
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
    console.log("wrapAComponent BaseComp:", BaseComp, "props:", props);
    return (
      <BaseComp {...props} name="stakutis">
        <p>Wrapped; name value overriden</p>
        <p>Wrapped: has children: {props.children}</p>
      </BaseComp>
    );
  };

  const InnerComponent = (props) => {
    console.log("Render: InnerComponent props:", props);
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

  const InitialRoute = (props) => {
    const [myValue, setMyValue] = useState("Initial value");
    console.log("RE Rendering ", myValue);
    let WrappedComponent = wrapAComponent(InnerComponent);
    return (
      <div>
        "STAKUTIS ROOT auth:"
        {auth.isAuthenticated ? "authenticated" : "not authed"}
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
                console.log("Making  update... ");
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
              <InitialRoute />
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
