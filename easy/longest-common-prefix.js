let longestCommonPrefix = function (strs) {
  let answer = '';

  //1. strs에 값이 없거나 0인 경우에는 빈배열 반환
  if (strs === null || strs === 0) {
    return answer;
  }

  //2. 문자열들 중에 길이가 제일 작은 문자열 찾기
  let min = strs[0].length; //flower, dog
  for (let i = 1; i < strs.length; i++) {
    min = Math.min(min, strs[i].length); //min과 strs[i]의 length중에 더 작은걸 저장.
  }

  //min문자갯수만큼 돌면서 첫번째 문자열의 문자와 나머지 문자열의 문자를 비교하면서 중복되는 문자를 반환.
  //prefix이기때문에 문자를 처음부터 돌다가 같지않으면 바로 반환.
  for (let i = 0; i < min; i++) {
    //flow i < 4
    let current = strs[0][i]; //f/l/o
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== current) {
        //[0][0]f, [1][0]f, [2][0]f & [0][1]l, [1][1]l, [2][1]l & [0][2]o, [1][2]o, [2][2]i return
        return answer;
      }
    }
    answer += current; //answer='f'+'l'
  }

  return answer;
};

let input = [
  ['flower', 'flow', 'flight'], //'fl'
  ['dog', 'racecar', 'car'], //''
];

for (let i = 0; i < input.length; i++) {
  console.log(longestCommonPrefix(input[i]));
}
