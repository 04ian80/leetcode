'use strict';

const twoSums = function (nums, target) {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
