// 임의의 문자열을 입력받아 문자열 내에서 한 번만 등장하는 문자를 리턴해야 합니다.
//
// 인자 1 : str
// string 타입의 공백이 없는
// string 타입을 리턴해야 합니다.
// 
// 조건을 만족하는 문자 중 가장 먼저 위치한 문자를 리턴해야 합니다.
// 조건을 만족하는 문자가 없는 경우, null을 리턴해야 합니다.

const firstNonRepeatedCharacter = function (str) {
  const splitStr = str.split('');
  const charDict = splitStr.reduce((acc, char) => {
    if (!(char in acc)) acc[char] = 1;
    else acc[char] ++;
    return acc;
  }, {});
  for (let char in charDict) {
    if (charDict[char] === 1) return char;
  }
  return null;
};
