let removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      //요소가 빼야하는 숫자를 찾으면
      nums[i] = nums[n - 1]; // 그 숫자가 있는 자리에 배열의 맨마지막 요소를 집어 넣기.
      n--; //같은 숫자가 나올때마다 마지막 요소를 앞으로 집어넣기 때문에 배열의 길이를 줄이면서 마지막 인덱스를 삭제해 나간다.
      //그리고 같은 숫자가 나오면 i를 증가 시키지 않는다.
    } else {
      i++;
      //같은 숫자가 안나오면 i증가
    }
  }
  return n;
};

let input = [
  [[3, 2, 2, 3], 3], //2
  [[0, 1, 2, 2, 3, 0, 4, 2], 2], //5
];
for (let i = 0; i < input.length; i++) {
  console.log(removeElement(input[i][0], input[i][1]));
}
