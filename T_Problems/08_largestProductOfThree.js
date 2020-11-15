// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 인자 1 : arr
// number 타입을 요소로 갖는 임의의 배열

// number 타입을 리턴해야 합니다.

// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.

/* Reference: My Solution보다 훨씬 더 효율적이고 가독성도 높다! */
const largestProductOfThree = function (arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const len = sortedArr.length;
  const mayBeMax1 = sortedArr[len - 3] * sortedArr[len - 2] * sortedArr[len -1];
  const mayBeMax2 = sortedArr[0] * sortedArr[1] * sortedArr[len - 1];
  return Math.max(mayBeMax1, mayBeMax2);
};

/* My Solution: 정답 알고리즘과 거리는 멀었지만,
  가능한 모든 순열들(Permutations)의 경우를 구하는 알고리즘을 알게 되었다. */
const largestProductOfThree = function (arr) {
  const allPermutations = [];
  const findPermutations = (array, initialArr) => {
    if (initialArr.length === 3) allPermutations.push(initialArr);
    for (let i = 0; i < array.length; i ++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      findPermutations(newArray, initialArr.concat(array[i]));
    }
  }
  findPermutations(arr, []);
  const multiplyPermutations = allPermutations.map((permutation) => permutation.reduce((acc, val) => acc * val));
  return Math.max.apply(null, multiplyPermutations);
};
