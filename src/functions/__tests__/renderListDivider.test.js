import renderListDivider from "../renderListDivider";

describe("src/functions - renderListDivider", () => {
  test("Should execute the divider fn once.", () => {
    const dividerFn = jest.fn();

    renderListDivider(0, 2, dividerFn);

    expect(dividerFn).toHaveBeenCalledTimes(1);
  });

  test("Should execute the divider fn 2 times.", () => {
    const dividerFn = jest.fn();
    const items = ["a", "b", "c"];

    items.forEach((_, index) =>
      renderListDivider(index, items.length, dividerFn)
    );

    expect(dividerFn).toHaveBeenCalledTimes(2);
  });

  test("Should not execute the divider fn.", () => {
    const dividerFn = jest.fn();

    renderListDivider(0, 1, dividerFn);

    expect(dividerFn).not.toHaveBeenCalled();
  });
});
