// 두 개의 문자열을 입력받아 두 문자열에 공통으로 등장하는 문자들로 구성된 문자열을 리턴해야 합니다.

// 인자 1 : str1
// string 타입의 공백이 없는 알파벳 소문자 문자열 (str1.length >= 0)
// 인자 2 : str2
// string 타입의 공백이 없는 알파벳 소문자 문자열 (str2.length >= 0)

// string 타입을 리턴해야 합니다.

// 중복되는 문자는 하나의 문자로 간주합니다.
// 공통으로 등장하는 문자가 없는 경우, 빈 문자열을 리턴해야 합니다.
// 리턴되는 문자열의 각 문자는 첫 번째 문자열에 등장하는 순서대로 정렬되어야 합니다.


/* Bare Minimum Requirements */
let commonCharacters = function (str1, str2) {
  let result = '';
  for (let char of str1) {
    if (result.indexOf(char) === -1 && str2.indexOf(char) !== -1) result += char;
  }
  return result;
};

/* Advanced */
// 세 개 이상의 문자열을 받아 모든 문자열에 공통으로 등장하는 문자들로 구성된 문자열을 리턴합니다.
let commonCharacters = function (str1, str2, ...rest) {
  let newRest = [str2, ...rest];
  let result = '';
  for (let char of str1) {
    if (result.indexOf(char) === -1) {
      const isCommon = newRest.every(str => str.indexOf(char) !== -1);
      if (isCommon) result += char;
    }
  }
  return result;
};
