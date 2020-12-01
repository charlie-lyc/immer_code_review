// 문자열을 입력받아 다음의 조건을 만족하는 가장 긴 lps*를 찾아 그 길이를 리턴해야 합니다.
//
// lps: 주어진 문자열의 가장 긴 접두어이자 접미어(longest prefix which is also suffix)
// non-overlapping: 접두어와 접미어는 서로 겹치는 부분이 없어야 합니다.
// 다시 말해, prefix와 suffix는 문자열의 동일한 인덱스에 위치한 문자를 요소로 가지면 안 됩니다.
//
// 인자 1 : str
// string 타입의 임의의 알파벳 소문자 문자열 (str.length <= 5,000,000)
//
// number 타입을 리턴해야 합니다.
// 
// prefix(접두어)는 문자열의 첫 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.
// suffix(접미어)는 문자열의 마지막 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.


/* Bare Minimum Requirements : Reference
  => Naive Solution : 그런데 테스트는 통과하지 못한다??? */
// const lps = function (str) {
//   if (str.length < 2) return 0;
//   let halfSize = Math.floor(str.length / 2);
//   let rightStart = Math.round(str.length / 2);
//   for (let i = 0; i < halfSize; i++) {
//     const prefix = str.slice(0, halfSize - i);
//     const suffix = str.slice(rightStart + i);
//     if (prefix === suffix) return halfSize - i;
//   }
//   return 0;
// };

////////////////////////////////////////////////////////////////////////////////
/* Advanced : Reference */
const lps = function (str) {
  if (str.length < 2) return 0;
  let leftIdx = 0;
  let rightIdx = Math.round(str.length / 2);
  while (rightIdx < str.length) {
    if (str[leftIdx] === str[rightIdx]) {
      leftIdx++;
      rightIdx++;
    } else if (leftIdx === 0) {
      rightIdx++;
    } else {
      // backtracking?
      leftIdx--;
    }
  }
  return leftIdx;
};


// lps를 계산하는 효율적인 알고리즘(O(N))이 존재합니다. 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
// 정규식(regular expression)을 활용하면 아래처럼 간단하게 구현할 수 있습니다. 정규식에 대해서 학습하시기 바랍니다. (참고사이트)
const lps = (str) => {
  const result = str.match(/^(\w*).*\1$/);
  return result[1].length;
};
