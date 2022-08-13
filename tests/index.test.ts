import * as iterable from "../src";



test("blank", () => {
  var a = iterable.count([1, 2, 3], v => v===1);
  expect(a).toBe(1);
  var a = iterable.size([1, 2, 3]);
  expect(a).toBe(3);
});
