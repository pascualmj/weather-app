import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "../Alert";

describe("Component: Alert", () => {
  test("Should match snapshot.", () => {
    const { asFragment } = render(<Alert text="a" type="success" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render text content.", () => {
    const { getByText } = render(<Alert text="b" />);

    expect(getByText(/b/i)).not.toBeNull();
  });
});
