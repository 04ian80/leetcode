var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let str = '';
  for (let t of s) {
    if (str.includes(t)) {
      longest = Math.max(longest, str.length);
      str = str.substring(str.indexOf(t) + 1);
      console.log(`if: ${str}`);
    }
    str += t;
    console.log(`+=: ${str}`);
  }
  if (str.length > longest) longest = str.length;
  return longest;
};

let input = ['abcabcbb', 'bbbbb', 'pwwkew'];

for (let i = 0; i < input.length; i++) {
  console.log(lengthOfLongestSubstring(input[i]));
}
