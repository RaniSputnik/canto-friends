import { textToTones } from "./tones";

describe("textToTones", () => {
  test("extracts a tone", () => {
    expect(textToTones("nei5")).toEqual([5]);
  });

  test("extracts multiple tones", () => {
    expect(textToTones("nei5 hou2")).toEqual([5, 2]);
  });

  test("doesn't require spaces", () => {
    expect(textToTones("bei6tai3cung4")).toEqual([6, 3, 4]);
  });

  test("ignores text with no numbers", () => {
    expect(textToTones("hello, world")).toEqual([]);
  });
});
