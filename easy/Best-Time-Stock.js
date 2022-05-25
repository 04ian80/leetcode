var maxProfit = function (prices) {
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]); //미리 초기화해둔 제일 큰 값과 배열의 요소를 비교하면서 배열에서 제일 작은 값 찾기.
    max = Math.max(max, prices[i] - min); //사고 판 가격의 차이가 제일 큰값을 반환 해야 하기 때문에 배열을 돌면서 min을 빼보면서 확인한다.
  }
  return max;
};

let input = [
  [7, 1, 5, 3, 6, 4], //5
  [7, 6, 4, 3, 1], //0
  [2, 1, 4], //3
  [2, 4, 1], //2
];

for (let i = 0; i < input.length; i++) {
  console.log(maxProfit(input[i]));
}
