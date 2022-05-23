/*
let mergeTwoLists = function (list1, list2) {
  let stack = [];
  if (list1.length === 0) {
    return list2.sort((a, b) => a - b);
  } else if (list2.length === 0) {
    return list1.sort((a, b) => a - b);
  } else if (list1.length === 0 && list2.length === 0) {
    return stack;
  }

  let count = 0;
  while (stack.length < list1.length + list2.length) {
    if (list1.length !== 0) {
      stack.push(list1[count]);
    }
    if (list2.length !== 0) {
      stack.push(list2[count]);
    }
    count++;
  }

  return stack.sort((a, b) => a - b);
};

let input = [
  [
    [1, 2, 4],
    [1, 3, 4],
  ],
  [[], []],
  [[], [0]],
  [[], [1, 9, 6, 7]],
  [[7, 3, 8, 2], []],
];

for (let i = 0; i < input.length; i++) {
  console.log(mergeTwoLists(input[i][0], input[i][1]));
}
*/

let node = new ListNode(0);
let a = node;
console.log(a);
