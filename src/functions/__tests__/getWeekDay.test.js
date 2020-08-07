import getWeekDay from "../getWeekDay";

describe("src/functions - getWeekDay", () => {
  test("Should return 'Friday'.", () => {
    const weekDay = getWeekDay(1596820150);

    expect(weekDay).toBe("Friday");
  });

  test("Should not return 'Friday'.", () => {
    const weekDay = getWeekDay(1596690540);

    expect(weekDay).not.toBe("Friday");
  });
});
