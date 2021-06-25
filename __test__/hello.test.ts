const sum = function (a, b) {
  return a + b;
};

test('方法测试demo，两数相加，1 + 2', () => {
  expect(sum(1, 2)).toBe(3);
});
