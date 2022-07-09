function solution(s) {
  const stringToNum = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < 10; i++) {
    s = s.split(stringToNum[i]).join(i);
    console.log(s);
  }
  return parseInt(s);
}

let input = ['one4seveneight', '23four5six7']; //1478, 234567

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
