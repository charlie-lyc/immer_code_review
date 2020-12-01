// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.
//
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// arr[i].length 100,000 이하
//
// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 오름차순으로 정렬되어야 합니다.
// arr[i] <= arr[j] (i < j)
//
// 병합 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

const merge = function (left, right) {
  let merged = [];
  let leftIdx = 0;
  let rightIdx = 0;
  for (let i = 0; i < left.length + right.length; i++) {
    if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return merged;
};

const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = Math.round(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
};




// <참고>
// 병합 정렬은 표준 라이브러리에서 정렬을 구현할 때 퀵 정렬이나 힙 정렬의 대안으로 사용하는 최적화된 정렬 알고리즘입니다.
// 병합 정렬은 다음과 같은 알고리즘을 사용합니다.
//
// N의 길이를 가진 배열 리스트를 1의 길이를 가진 "부분 리스트"가 N개 모인 것으로 취급합니다.
// 인접한 부분 리스트들을 정렬하여 2의 길이를 가진 부분 리스트로 병합합니다.
// 2의 길이를 가진 인접한 부분 리스트들을 4의 길이를 가진 부분 리스트로 합칩니다.
// 하나의 정렬된 리스트가 될 때까지 위 과정을 반복합니다.
// N이 홀수라면, 첫 번째 병합 때 1의 길이를 가진 부분 리스트를 남깁니다.
// 병합 정렬은 두 가지 방식으로 구현 가능합니다. 재귀적 접근(위->아래) 그리고 반복적 접근(아래->위)
//
// 반복적 접근
//
// 1. 주어진 배열이 "정렬된" 부분 리스트로 나뉘어집니다.
// [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
//
// 2. 인접한 부분 리스트 2개가 정렬된 부분 리스트로 병합됩니다.
// [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
//
// 2. 병합 과정 (반복) :
// [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
//
// 2. 병합 과정 (반복) :
// [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
//
// 3. 마무리 : 정렬된 배열이 리턴됩니다.
// [1,2,3,4,4,7,9]
// 재귀적 접근
//
// 주어진 배열을 절반으로 나눕니다.
// 4, 7, 4, 3, 9, 1, 2 -> 4, 7, 4, 3, 9, 1, 2
//
// 두 배열이 재귀적으로 정렬됩니다.
// 4, 7, 4 -> 4, 4, 7 -> 1, 2, 3, 9
//
// 두 배열이 병합됩니다.
// 4, 7, 4, 3, 9, 1, 2 -> 1, 2, 3, 4, 4, 7, 9
//
// 2단계에서 나뉘어진 각각의 배열 4, 7, 4에 대해서도 1-3번의 과정이 재귀적으로 똑같이 진행됩니다.
//
// 주어진 배열을 절반으로 나눕니다.
// 4, 7, 4 -> 4, 7, 4
//
// 두 배열이 재귀적으로 정렬됩니다.
// 4 -> 4 -> 4, 7
//
// 두 배열이 병합됩니다.
// 4, 4, 7 -> 4, 4, 7
//
// 이 과정의 2단계에서 나뉘어진 4, 7에 대해서도 재귀가 호출됩니다.
// 4는 원소가 하나이기 때문에 정렬하지 않아도 되겠죠?
//
// 주어진 배열을 절반으로 나눕니다.
// 7, 4 -> 7, 4
//
// 두 배열이 재귀적으로 정렬됩니다.
// 7 -> 7 -> 4
//
// 두 배열이 병합됩니다.
// 7, 4 -> 4, 7
//
// 모든 재귀 호출이 완료되면 3단계에서 병합이 되기 때문에 최종적으로 정렬된 하나의 배열이 리턴됩니다.
