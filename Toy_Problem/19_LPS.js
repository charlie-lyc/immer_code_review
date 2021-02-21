// 문제
// 문자열을 입력받아 다음의 조건을 만족하는 LPS*를 찾아 그 길이를 리턴해야 합니다.
// LPS: 주어진 문자열의 가장 긴 접두어이자 접미어(Longest Prefix which is also Suffix)
// non-overlapping: 접두어와 접미어는 서로 겹치는 부분이 없어야 합니다. 
// 다시 말해, prefix와 suffix는 문자열의 동일한 인덱스에 위치한 문자를 요소로 가지면 안 됩니다.

// 입력
// 인자 1 : str
// string 타입의 임의의 알파벳 소문자 문자열 (str.length <= 5,000,000)

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// prefix(접두어)는 문자열의 첫 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.
// suffix(접미어)는 문자열의 마지막 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.

/* Basic */
const LPS = function (str) {
  // 문자열의 길이가 1일 경우 결과 반환값은 0
  if (str.length < 2) return 0;
  // 문자열 중간위치의 내림값으로 halfSize 초기화
  const halfSize = Math.floor(str.length / 2);
  // 문자열 중간위치의 반올림값으로 rightStart 초기화
  const rightStart = Math.round(str.length / 2);
  // halfSize값을 기준으로 왼쪽 문자열을 prefix로, 오른쪽 문자열을 suffix로 할당
  // prefix는 끝에서부터 줄여가면서, suffix는 처음부터 길이를 늘여가면서 비교하여 같은 문자열이될 땍까지 탐색 
  for (let i = 0; i < halfSize; i ++) {
    const prefix = str.slice(0, halfSize - i);
    const suffix = str.slice(rightStart + i);
    if (prefix === suffix) return halfSize - i;
  }
  // 모든 탐색을 마칠때까는 같은 문자열을 찾지 못하면 결과 반환 값은 0
  return 0;
};

////////////////////////////////////////////////////////////////////////////////
/* Advanced */
const LPS = function (str) {
  // 문자열 중간위치의 반올림 값으로 midIdx 초기화
  let midIdx = Math.round(str.length / 2);
  // leftIdx 초기화
  let leftIdx = 0;
  // midIdx가 문자열 길이와 같아질때까지 탐색 진행
  while (midIdx < str.length) {
    // 문자열에서 leftIdx, midIdx에 해당되는 문자가 같으면 둘다 계속 진행
    if (str[leftIdx] === str[midIdx]) {
      leftIdx ++;
      midIdx ++;
    // leftIdx가 역으로 진행되다가 0이 되면 midIdx만 진행
    } else if (leftIdx === 0) {
      midIdx ++;
    // 그 어느 쪽에도 해당되지 않는다면 leftIdx는 역으로 진행
    } else {
      leftIdx --;
    }
  }
  return leftIdx;
};

/* Regular Expression */
// lps를 계산하는 효율적인 알고리즘(O(N))이 존재합니다. 
// 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
// 정규식(regular expression)을 활용하면 아래처럼 간단하게 구현할 수 있습니다. 
// 정규식에 대해서 학습하시기 바랍니다. (참고사이트 : https://regexr.com/)
const LPS = (str) => {
  const result = str.match(/^(\w*).*\1$/);
  return result[1].length;
};