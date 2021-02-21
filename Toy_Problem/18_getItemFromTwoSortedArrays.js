// 문제
// 길이가 m, n이고 오름차순으로 정렬되어 있는 자연수 배열들을 입력받아 
// 전체 요소 중 k번째 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr1
// 자연수를 요소로 갖는 배열
// arr1.length는 m
// 인자 2 : arr2
// 자연수를 요소로 갖는 배열
// arr2.length는 n
// 인자 3 : k
// number 타입의 0 이상의 정수

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// 두 배열의 길이의 합은 1,000,000 이하입니다.
// 어떤 배열 arr의 k번째 요소는 arr[k-1]을 의미합니다.

/* Basic */
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // 두개의 배열을 동시에 탐색, 전체 탐색 갯수 count 초기화
  // arr1에서 left, arr2에서 right 초기화
  let count = 0, left = 0, right = 0;
  // 탐색 중 현재값을 담는 target 선언
  let target;
  // count === k 조건이 될때까지 탐색 진행
  while (count < k) {
    if (arr1[left] < arr2[right]) {
      target = arr1[left];
      left ++;
    } else {
      target = arr2[right];
      right ++;
    }
    count ++;
  }
  return target;
};


/////////////////////////////////////////////////////////
/* Advanced */
// 단순히 처음부터 끝까지 찾아보는 방법(O(K)) 대신 다른 방법(O(logK))을 탐구해 보세요.
// 힌트
// 이진 탐색(binary search)을 응용하여 해결합니다.
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    // arr1, arr2 탐색 인덱스 초기화
    let leftIdx = 0, rightIdx = 0;
    // k 값이 0보다 작을때까지 탐색 진행
    while (k > 0) {
        // letfStep, rightStep을 k의 가운데 값으로 초기화
        let center = Math.ceil(k / 2);
        let leftStep = center, rightStep = center;
        // 탐색 중 leftIdx가 arr1길이만큼 진행되었다면 남은 k값을 rightIdx에 더하기 
        if (leftIdx === arr1.length) {
        rightIdx = rightIdx + k;
        break;
        }
        // 탐색 중 rightIdx가 arr2길이만큼 진행되었다면 남은 k값을 leftIdx에 더하기
        if (rightIdx === arr2.length) {
        leftIdx = leftIdx + k;
        break;
        }
        // 탐색 중 각 배열의 길이에서 진행된 인덱스만큼 뺀 값이 center보다 작다면 그 값을 Step에 저장
        if (center > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
        if (center > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;
        // 각 배열의 값을 서로 비교하여 Idx와 k 갱신
        if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
        leftIdx = leftIdx + leftStep;
        k = k - leftStep;
        } else {
        rightIdx = rightIdx + rightStep;
        k = k - rightStep;
        }
    }
    // 모든 탐색을 마친 뒤 얻은 Idx가 해당 배열에 존재하면 값을 얻고, 존재하지 않으면 -1 얻음
    const leftMax = arr1[leftIdx - 1] || -1;
    const rightMax = arr2[rightIdx - 1] || -1;
    // 둘중 큰 값을 결과값으로 반환
    return Math.max(leftMax, rightMax);
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};