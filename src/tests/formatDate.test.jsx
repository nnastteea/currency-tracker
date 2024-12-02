import { formatDate } from "@helpers/formatDate";

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const date = new Date(2023, 10, 5);
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("2023-11-05");
  });
  it("should handle single-digit months and days", () => {
    const date = new Date(2023, 0, 1);
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("2023-01-01");
  });
});
