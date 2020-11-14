// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 인자 1 : arr
// number 타입을 요소로 갖는 임의의 배열

// number 타입을 리턴해야 합니다.

// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.


/* My Solution: 정답 알고리즘과 거리는 멀었지만,
  가능한 모든 순열들(Permutations)의 경우를 구하는 알고리즘을 알게 되었다. */
const largestProductOfThree = function (arr) {
  const all3Permutations = [];
  const findPerms = (initResArr, sourceArr) => {
    if (initResArr.length === 3) {
      all3Permutations.push(initResArr);
      return;
    }
    for (let i = 0; i < sourceArr.length; i ++) {
      const newSourceArr = sourceArr.slice(0, i).concat(sourceArr.slice(i+1));
      findPerms(initResArr.concat(sourceArr[i]), newSourceArr);
    }
  }
  findPerms([], arr);

  const multiplyElements = all3Permutations.map((perm) => {
    return perm.reduce((acc, val) => acc * val);
  });
  return Math.max.apply(null, multiplyElements);
};


/* Reference */
const largestProductOfThree = function (arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const mayBeMax1 = sortedArr[arr.length - 1] * sortedArr[arr.length - 2] * sortedArr[arr.length - 3];
  const mayBeMax2 = sortedArr[arr.length - 1] * sortedArr[0] * sortedArr[1];
  return Math.max(mayBeMax1, mayBeMax2);
};
