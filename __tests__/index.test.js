import finalGrade from "../dist/index.js"

test('testname', () => {
  expect(finalGrade(100, 12)).toBe(100);
  expect(finalGrade(99, 0)).toBe(100);
  expect(finalGrade(10, 15)).toBe(100);
  expect(finalGrade(90, 10)).toBe(90);
  expect(finalGrade(85, 5)).toBe(90);
  expect(finalGrade(55, 3)).toBe(75);
  expect(finalGrade(55, 0)).toBe(0);
  expect(finalGrade(20, 2)).toBe(0);
});