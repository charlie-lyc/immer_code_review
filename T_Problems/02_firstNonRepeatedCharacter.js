// 임의의 문자열을 입력받아 문자열 내에서 한 번만 등장하는 문자를 리턴해야 합니다.


const firstNonRepeatedCharacter = function (str) {
  const strArr = str.split('');
  const dict = strArr.reduce((acc, char) => {
    if (!(char in acc)) acc[char] = 1;
    else acc[char] ++;
    return acc;
  }, {});
  for (let char of str) {
    if (dict[char] === 1) return char;
  }
  return null;
};
