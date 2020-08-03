import React from "react";
import { render, fireEvent, findByTestId } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";
import { TallPage } from "./components/TallPage";

/*** Example from web; note that it loads/renders a single component then plays with it
import React from "react";
import renderer from "react-test-renderer";

import { Counter } from "./App";

describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Counter counter={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
***/

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to my TEST app!/i);
  expect(linkElement).toBeInTheDocument();
});

test("Test that the TallPage component is ok by JSON", () => {
  let tall = renderer.create(<TallPage />);
  expect(tall.toJSON().toString().includes("Try to scroll down"));
  // There  should  be a  better way  to run down the fake DOM and findBy()  etc...
});

test("Test that TallPage renders ok...", () => {
  const { getByText } = render(<TallPage />);
  const linkElement = getByText(/Try to scroll down/i);
  expect(linkElement).toBeInTheDocument();
});

test("Navigate to TallPagee...", async () => {
  const { getByTestId, findByText, getByText } = render(<App />);
  let element = getByTestId("link-TallPage");
  fireEvent.click(element);
  // See if main page contents appear
  element = await findByText(/try to scroll down/i);
  // See if Advertisement  appears
  element = await findByText(/This is an add/i);
  // Click  the ad's cancel
  element = await findByText(/cancel/i);
  fireEvent.click(element);
  // Test that the modal  appears after clicking cancel
  element = getByText(/This is a test modal/i);
});
