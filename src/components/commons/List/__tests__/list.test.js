import React from "react";
import { render, getByAltText } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../List";

describe("Component: List", () => {
  const setupProps = (items) => ({
    items: [...items],
    keyExtractor: (item) => item,
    renderItems: (item) => item,
  });

  test("Should match snapshot.", () => {
    const { asFragment } = render(<List {...setupProps(["a", "b", "c"])} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render the items.", () => {
    const { getByText } = render(<List {...setupProps(["hello", "world"])} />);

    getByText("hello");
    getByText("world");
  });
});
