// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열 (base.length <= 100 )
// 인자 2 : sample
// number 타입을 요소로 갖는 임의의 배열 (sample.length <= 100 )

// boolean 타입을 리턴해야 합니다.
// base, sample 내에 중복되는 요소는 없다고 가정합니다.

/* Bare Minimum Requirements */
const isSubsetOf = function (base, sample) {
  for (let ele of sample) {
    if (base.indexOf(ele) === -1) return false;
  }
  return true;
};

/* Reference */
const isSubsetOf = function (base, sample) {
  return sample.every(ele => base.indexOf(ele) !== -1);
};

/* Advanced */
// 시간 복잡도를 개선하여, 주석으로 처리된 테스트 케이스(base, sample의 길이가 100,000 이상)를 통과해보세요.
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  let fromIdx = 0;
  for (let ele of sample) {
    let hasElement = false;
    for (let i = fromIdx; i < base.length; i ++) {
      if (ele === base[i]) {
        fromIdx = i + 1;
        hasElement = true;
      }
    }
    if (!hasElement) return false;
  }
  return true;
};
