import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../Text";

describe("Component: Text", () => {
  test("Should match snapshot.", () => {
    const { asFragment } = render(<Text>hi</Text>);

    expect(asFragment()).toMatchSnapshot();
  });
});
