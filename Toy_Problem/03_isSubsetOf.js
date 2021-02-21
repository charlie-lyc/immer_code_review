// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열
// base.length는 100 이하
// 인자 2 : sample
// number 타입을 요소로 갖는 임의의 배열
// sample.length는 100 이하

// 출력
// boolean 타입을 리턴해야 합니다.

// 주의사항
// base, sample 내에 중복되는 요소는 없다고 가정합니다.

/* Basic */
// 시간복잡도 O(M * logM) [또는 O(N * logN) 이지만, M >= N 이므로]
const isSubsetOf = function (base, sample) {
  // 그냥 sort()는 문자열의 사전적 순서 정렬
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

/* Reference */
// 시간복잡도 O(M * N)
const isSubsetOf = function (base, sample) {
  return sample.every(ele => base.indexOf(ele) !== -1);
};
// Or
const isSubsetOf = function (base, sample) {
  for (let ele of sample) {
    if (base.indexOf(ele) === -1) return false;
  }
  return true;
};
// Or
const isSubsetOf = function (base, sample) {
  return sample.every(ele => base.includes(ele));
};

////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// 시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.

// 시간복잡도 O(M * logM) [또는 O(N * logN) 이지만, M >= N 이므로]
const isSubsetOf = function (base, sample) {
  // 매개변수로 주어진는 각 배열을 숫자기준 오름차순으로 정렬 
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  // 시작되는 인덱스값이 주어지면 
  // 그 위치 부터 주어진 정렬된 배열내에 주어진 아이템이 있는지 확인하여
  // 있으면 해당 위치의 인덱스값을, 정렬된 배열의 값의 범위를 벗어나 없으면 -1을 반환하는 함수 작성
  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };
  // 시작되는 인덱스값을 0으로 설정하고 앞서 준비한 함수를 반복실행
  // 실행 도중 기본 인덱스값의 결과가 -1이 나오면 바로 false 반환
  // 그렇지 않고 끝까지 이상없이 실행하면 true 반환
  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};

