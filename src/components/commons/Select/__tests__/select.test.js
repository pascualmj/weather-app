import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "../Select";

describe("Component: Select", () => {
  const setupProps = () => ({
    options: [
      {
        value: "a",
        label: "a",
      },
      {
        value: "b",
        label: "b",
      },
    ],
    value: "a",
    onChange: jest.fn(),
  });

  test("Should match snapshot.", () => {
    const { asFragment } = render(<Select {...setupProps()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
