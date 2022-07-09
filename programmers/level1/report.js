function solution(id_list, report, k) {
  var answer = [];
  let result = [];
  let gotReport = new Map();
  let sendReport = new Map();
  let set = new Set(report);
  console.log(set);

  set.forEach((user) => {
    answer.push(user.split(' '));
  });
  let count = 0;
  answer.sort((a, b) => a[1].charCodeAt() - b[1].charCodeAt());

  for (let i = 0; i < answer.length; i++) {
    if (gotReport.get(answer[i][1]) === undefined) {
      count = 0;
    }
    gotReport.set(answer[i][1], ++count);
  }

  let count2 = 0;
  for (let i = 0; i < answer.length; i++) {
    if (gotReport.get(answer[i][0]) === undefined) {
      count2 = 0;
    }
    if (gotReport.get(answer[i][1]) === k) {
      sendReport.set(answer[i][0], ++count2);
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    if (sendReport.get(id_list[i]) === undefined) {
      result.push(0);
    } else {
      result.push(sendReport.get(id_list[i]));
    }
    console.log(result);
  }

  console.log(sendReport);
  // console.log(sorted);
  console.log(gotReport);
  console.log(gotReport.get('frodo'));
  return result;
}

let input = [
  [
    ['muzi', 'frodo', 'apeach', 'neo'],
    [
      'muzi frodo',
      'muzi frodo',
      'apeach frodo',
      'frodo neo',
      'muzi neo',
      'apeach muzi',
    ],
    2,
  ], // [2, 1, 1, 0]
];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i][0], input[i][1], input[i][2]));
}
