import React, { useRef } from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import useOutsideListener from "../useOutsideListener";

function TestComponent({ handler }) {
  const wrapper = useRef(null);
  useOutsideListener(wrapper, handler);

  return (
    <div data-testid="wrapper">
      <div ref={wrapper} data-testid="wrapper-ref"></div>
    </div>
  );
}

describe("Custom Hook: useOutsideListener", () => {
  describe("Should attach event to the document.", () => {
    test("Should call the handler while clicking outside the wrapper ref element.", () => {
      const handler = jest.fn();
      const { container } = render(<TestComponent handler={handler} />);

      fireEvent.click(container);

      expect(handler).toHaveBeenCalledTimes(1);
    });

    test("Should not call the handler while clicking the wrapper ref element.", () => {
      const handler = jest.fn();
      const { getByTestId } = render(<TestComponent handler={handler} />);

      fireEvent.click(getByTestId("wrapper-ref"));

      expect(handler).not.toHaveBeenCalled();
    });
  });
});
