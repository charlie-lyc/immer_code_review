// 부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.
// 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
// 예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.

// 인자 1 : rotated
// number 타입을 요소로 갖는 배열
// rotated[i]는 정수
// 인자 2 : target
// number 타입의 정수

// number 타입을 리턴해야 합니다.

// rotated에 중복된 요소는 없습니다.
// target이 없는 경우, -1을 리턴해야 합니다.

// Hint: 이진 탐색(binary search)을 약간 변형하여 해결합니다.

/* Bare Minimum Requirements */
const rotatedArraySearch = function (rotated, target) {
  return rotated.indexOf(target);
};


////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// 단순히 처음부터 끝까지 찾아보는 방법(O(n)) 대신 다른 방법(O(log n))을 탐구해 보세요.
// Time Complexity: O(log n)
const rotatedArraySearch = function (rotated, target) {
  let leftIdx = 0
  let rightIdx = rotated.length - 1;
  while (leftIdx <= rightIdx) {
    const midIdx = Math.round((leftIdx + rightIdx) / 2);
    if (target === rotated[midIdx]) {
      return midIdx;
    } else if (rotated[leftIdx] < rotated[midIdx]) {
      if (rotated[leftIdx] <= target && target < rotated[midIdx]) rightIdx = midIdx - 1;
      else leftIdx = midIdx + 1;
    } else {
      if (rotated[midIdx] < target && target <= rotated[rightIdx]) leftIdx = midIdx + 1;
      else rightIdx = midIdx - 1;
    }
  }
  return -1;
};
