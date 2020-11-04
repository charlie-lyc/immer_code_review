// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// base: number 타입을 요소로 갖는 임의의 배열 (base.length <= 100)
// sample: number 타입을 요소로 갖는 임의의 배열 (sample.length <= 100)

// boolean 타입을 리턴해야 합니다.
// base, sample 내에 중복되는 요소는 없다고 가정합니다.

/* Bare Minimum Requirements */
// const isSubsetOf = function (base, sample) {
//   for (let ele of sample) {
//     if (base.indexOf(ele) === -1) return false;
//   }
//   return true;
// };

/* Reference */
// const isSubsetOf = function (base, sample) {
//   return sample.every(ele => base.indexOf(ele) !== -1);
// };

/* Advanced */
// base, sample의 길이가 10,000 이상일 경우... 아마도 Time Complexity를 최소화 하는 문제인듯...
const isSubsetOf = function (base, sample) {
  const sortedBase = base.sort((a, b) => {
    if (a < b) return -1;
    return 1;
  });
  const sortedSample = sample.sort((a, b) => a - b);
  const hasElement = (arr, idx, ele) => {
    for (let i = idx; i < arr.length; i ++) {
      if (ele === arr[i]) return i;
      else if (ele < arr[i]) return -1;
    }
    return -1;
  }
  let fromIdx = 0;
  for (let j = 0; j < sortedSample.length; j ++) {
    fromIdx = hasElement(sortedBase, fromIdx, sortedSample[j]);
    if (fromIdx === -1) return false;
  }
  return true;
};
