// 두 개의 객체를 입력받아 이 두 객체가 동일한 데이터를 담고 있는지 여부를 리턴해야 합니다.

// 인자 1 : obj1
// 임의의 속성을 갖는 객체
// 인자 2 : obj2
// 임의의 속성을 갖는 객체

// boolean 타입을 리턴해야 합니다.

// 입력으로 주어지는 객체는 object literal 또는 object initializer만을 의미합니다.
// object literal: 중괄호({, })와 콤마(,)를 사용하여 정의된 key-value store (MDN 참고)
// 객체의 속성은 object literal, number, string, boolean, undefined, null 중 하나입니다.
// 순환객체는 고려하지 않습니다.
// 두 객체의 키(key)와 속성(property)이 전부 일치한 경우에만 true를 리턴해야 합니다.

const deepEquals = function (obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;
  const obj1KeysArr = Object.keys(obj1);
  const obj2KeysArr = Object.keys(obj2);
  if (obj1KeysArr.length !== obj2KeysArr.length) return false;
  return obj1KeysArr.every((key) => deepEquals(obj1[key], obj2[key]));
};
