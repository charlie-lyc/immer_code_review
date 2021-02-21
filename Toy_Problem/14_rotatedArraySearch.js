// 문제
// 부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.
// 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
// 예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.

// 입력
// 인자 1 : rotated
// number 타입을 요소로 갖는 배열
// rotated[i]는 정수
// 인자 2 : target
// number 타입의 정수

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// rotated에 중복된 요소는 없습니다.
// target이 없는 경우, -1을 리턴해야 합니다.

/* Basic */
const rotatedArraySearch = function (rotated, target) {
  return rotated.indexOf(target);
};

////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// 단순히 처음부터 끝까지 찾아보는 방법[O(N)] 대신 다른 방법[O(logN)]을 탐구해 보세요.

// 힌트
// 이진 탐색(binary search)을 약간 변형하여 해결합니다.

// Time Complexity: O(log n)
const rotatedArraySearch = function (rotated, target) {
  // debugger;
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

// "else if (rotated[midIdx] < rotated[rightIdx])" 로 작성될 경우에는 왜 안되는 것인가???
// 예를 들어 설명하자면, 위의 logic이 진행되어 left === 3 && right === 3 인 상태가 되면
// middle 또한 3이 되고 영원히 while 루프에서 빠져 나오지 못하게 되는 경우가 발생된다.
// 즉, target이 대상 배열에 없는 경우를 찾기 위해서는 어떤 경우든 left는 +, right는 - 방향으로 진행시켜
// while 루프에서 빠져 나올 수 있는 조건 left > right인 상태를 발생시켜야 하는데
// 위와 같은 두개의 else if 조건만으로는 그럴 수 가 없다.
// 이 같은 사실은 "debugger"를 이용해 콘솔에서 실행해 보면 확인할 수 있다.
