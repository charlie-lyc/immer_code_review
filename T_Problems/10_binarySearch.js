// 오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// 인자 2 : target
// number 타입의 정수

// number 타입을 리턴해야 합니다.

// 이진탐색 알고리즘(O(log n))을 사용해야 합니다.
// 단순한 배열 순회(O(n))로는 통과할 수 없는 테스트 케이스가 존재합니다.
// target이 없는 경우, -1을 리턴해야 합니다.

/* Time Complexity: O(log n) */
const binarySearch = function (arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    const middleIdx = Math.round((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === target) return middleIdx;
    else if (arr[middleIdx] > target) rightIdx = middleIdx - 1;
    else if (arr[middleIdx] < target) leftIdx = middleIdx + 1;
  }
  return -1;
};


/* Time Complexity: O(n) */
const binarySearch = function (arr, target) {
  return arr.indexOf(target);
};
