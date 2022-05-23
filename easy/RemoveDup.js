/*
let removeDuplicates = function (nums) {
  let setted = [...new Set(nums)]; //[0, 1, 2, 3, 4]

  for (let i = 0; i < nums.length; i++) {
    //5
    if (setted[i] !== undefined) {
      tmpArr.push(setted[i]);
    } else {
      tmpArr.push('_');
    }
  }

  return `${setted.length}, nums = ${tmpArr}`;
};

let input = [
  [1, 1, 2], //2, nums = [1,2,_]
  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], //5, nums = [0, 1, 2, 3, 4,_,_,_,_,_]
];

for (let i = 0; i < input.length; i++) {
  console.log(removeDuplicates(input[i]));
}
*/

//메모리 쓰지 않고 중복된 요소 삭제 해야함.
function solution(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      //[0]과 [0]부터 비교해서 둘의 값이 다르면
      nums[++i] = nums[j]; // 증가한 i자리에 [j]값 집어넣기
    }
  }
  return nums;
}
/*
i    !==   j
-------------
[0](0) == [0](0)
[0](0) == [1](0)
[0](0) !== [2](1)
++i -> [1](0) = [2](1)
[1](1) == [3](1)
[1](1) == [4](1)
[1](1) !== [5](1)
++i -> [2](1) = [5](1)
[2](2) == [6](2)
[2](2) !== [7](2)
++i -> [3](1) = [7](3)
[3](3) == [8](3)
[3](3) !== [9](4)
++i -> [4](1) = [9](4)
=>5, [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
*/

let input = [
  [0, 1, 1, 2, 2, 2, 3, 3, 4], //5
  [1, 1, 2], //2
];
for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
