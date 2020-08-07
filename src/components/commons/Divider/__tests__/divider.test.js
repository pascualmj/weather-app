import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Divider from "../Divider";

describe("Component: Divider", () => {
  test("Should match snapshot.", () => {
    const { asFragment } = render(<Divider />);

    expect(asFragment()).toMatchSnapshot();
  });
});
