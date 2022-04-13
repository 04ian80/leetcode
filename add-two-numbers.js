const x = -122;
let isPalindrome = function (x) {
  let backward = x.toString().split('').reverse().join('');
  if (x == backward) {
    return true;
  } else {
    return false;
  }
};
//내가 한 풀이:
//1. backward변수를 준다. x를 string으로 바꾸고, ''로 문자 하나하나씩 나눈 다음, reverse, 그리고 다시 합치기(string)
//2. x와 backward가 같으면(==) true 반환
//3. 같지 않으면 false반환.
