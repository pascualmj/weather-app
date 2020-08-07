import getForecastCopy from "../getForecastCopy";

describe("src/functions - getForecastCopy", () => {
  test("Should return an array with 2 items.", () => {
    const forecast = ["a", "b", "c"];
    const forecastCopy = getForecastCopy(forecast, 2);

    expect(forecastCopy).toHaveLength(2);
  });

  test("Should return an array with 3 items.", () => {
    const forecast = ["a", "b", "c", "d"];
    const forecastCopy = getForecastCopy(forecast, 3);

    expect(forecastCopy).toHaveLength(3);
  });

  test("Should return an array without the first item.", () => {
    const forecast = ["a", "b", "c"];
    const forecastCopy = getForecastCopy(forecast, 2);

    expect(forecastCopy).not.toContain("a");
  });
});
