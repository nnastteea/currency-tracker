import { changeTheme } from "@helpers/changeTheme"; // Измените путь на правильный
import { themes } from "@themes/theme";

describe("changeTheme", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should change from light to dark theme", () => {
    const setCurrentTheme = jest.fn();

    changeTheme(themes.light, setCurrentTheme);

    expect(setCurrentTheme).toHaveBeenCalledWith(themes.dark);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("should change from dark to light theme", () => {
    const setCurrentTheme = jest.fn();

    changeTheme(themes.dark, setCurrentTheme);

    expect(setCurrentTheme).toHaveBeenCalledWith(themes.light);
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
