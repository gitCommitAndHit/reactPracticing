import React from 'react';

it('renders without crashing', () => {
  const solution = (arr) => {
    let left = 0, right = 0;
    let isLeft = true;
    for (let i = 1; i < arr.length; i++) {
      let a = arr[i];
      if (a <= 0) continue;
      isLeft ? left += a : right += a;
      isLeft = !isLeft;
    }
    if (arr && arr.length === 0 || left === right) return "";
    return left > right ? "Left" : "Right";
  };
  expect(solution([3, 6, 2, 9, -1, 10])).toBe("Left");
  expect(solution([1, 10, 5, 1, 0, 6])).toBe("");

});
