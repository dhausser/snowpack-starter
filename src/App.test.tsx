import * as React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";
import App from "./App";

test("renders header text", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/welcome to snowpack!/i);
  expect(document.body.contains(headerElement));
});
