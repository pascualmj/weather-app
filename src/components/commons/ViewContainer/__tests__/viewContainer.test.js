import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewContainer from "../ViewContainer";

describe("Component: ViewContainer", () => {
  test("Should match snapshot.", () => {
    const { asFragment } = render(<ViewContainer>lorem</ViewContainer>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render children.", () => {
    const { getByText } = render(<ViewContainer>hi!</ViewContainer>);

    expect(getByText(/hi!/i)).not.toBeNull();
  });
});
