function solution(new_id) {
  let answer = '';
  const regex = /[^a-z-_.0-9]/g;
  const split = new_id.split('');
  // 대문자 -> 소문자
  split.forEach((id) => {
    answer += id.toLowerCase();
  });

  // - _ . 제외 특수문자x
  const specialChar = answer.match(regex) !== null ? answer.match(regex) : [];
  answer = answer.split('');

  for (let i = 0; i < specialChar.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (specialChar[i] === answer[j]) {
        answer.splice(j, 1);
      }
    }
  }

  // 마침표 연속x
  let noDot = [];
  // let noSpecial = answer;
  for (let i = 0; i < answer.length; i++) {
    noDot.push(answer[i]);
    if (answer[i] === '.' && answer[i + 1] === '.') {
      noDot.pop();
    }
  }
  // 마침표 첫 or 끝 x
  if (noDot[0] === '.') {
    noDot.shift();
  } else if (noDot[noDot.length - 1] === '.') {
    noDot.pop();
  }

  // 빈문자열 -> a
  if (noDot.length === 0) {
    for (let i = 0; i < 3; i++) {
      noDot.push('a');
    }
  }

  // < 15

  while (noDot.length >= 15) {
    if (noDot.length === 15) {
      break;
    }
    noDot.pop();
  }
  if (noDot[noDot.length - 1] === '.') {
    noDot.pop();
  }

  // > 2 이면 마지막 문자 반복
  let lastWord = noDot[noDot.length - 1];
  if (noDot.length < 3) {
    for (let i = 0; i < 3 - noDot.length + 1; i++) {
      noDot.push(lastWord);
    }
  }
  // answer = noDot.join('');

  return noDot.join('');
}

let input = [
  '...!@BaT#*..y.abcdefghijklm', // "bat.y.abcdefghi"
  'z-+.^.', // "z--"
  'z',
  '',
  '=.=', // "aaa"
  '123_.def', // "123_.def"
  'abcdefghijklmn.p', //"abcdefghijklmn"
];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
