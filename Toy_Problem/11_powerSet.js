// 문제
// 하나의 집합을 의미하는 문자열을 입력받아 
// 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 없는 알파벳 소문자 문자열

// 출력
// 배열(arr)을 리턴해야 합니다.
// arr[i]는 각 부분집합의 원소로 구성된 문자열

// 주의사항
// arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
// arr[i]는 알파벳 순서로 정렬되어야 합니다.              <=== !!!!!
// 집합은 중복된 원소를 허용하지 않습니다.
// 부분집합은 빈 문자열을 포함합니다.
// arr은 사전식 순서(lexical order)로 정렬되어야 합니다.  <=== !!!!!

/* My Solution */
const powerSet = function (str) {
  let notRepeated = '';
  for (let char of str) {
    if (notRepeated.indexOf(char) === -1) notRepeated += char;
  }
  const allPermutations = [''];
  const findPermutations = (sourceStr, initialStr) => {
    if (sourceStr.length === 0) return;
    for (let i = 0; i < sourceStr.length; i ++) {
      allPermutations.push(initialStr.concat(sourceStr[i]));
      findPermutations(sourceStr.slice(0, i).concat(sourceStr.slice(i + 1)), initialStr.concat(sourceStr[i]))
    }
  }
  findPermutations(notRepeated, '');
  const sortedStrArr = allPermutations.map((eachStr) => eachStr.split('').sort().join(''));
  const notDuplicated = sortedStrArr.reduce((acc, str) => {
    if (acc.indexOf(str) === -1) acc.push(str);
    return acc;
  }, []);
  return notDuplicated.sort();
};


/* Reference */
const powerSet = function (str) {
  // 정렬
  const sorted = str.split('').sort();
  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });
  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }
    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);
    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };
  pickOrNot(0, '');
  return subSets.sort();
};