import * as React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";
import App from "./App";

describe("<App>", () => {
  test("renders header text", () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/hello world/i);
    expect(document.body.contains(headerElement));
  });
});
