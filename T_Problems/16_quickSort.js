// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// arr[i]의 길이는 100,000 이하

// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 오름차순으로 정렬되어야 합니다.
// arr[i] <= arr[j] (i < j)

// 퀵 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

/* Pseudo Code form Visual Algo */
// for each (unsorted) partition
// set first element as pivot
//   storeIndex = pivotIndex + 1
//   for i = pivotIndex + 1 to rightmostIndex
//     if element[i] < element[pivot]
//       swap(i, storeIndex); storeIndex++
//   swap(pivot, storeIndex - 1)

/* Bare Minumum Requirements */
const quickSort = function (arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [ ...quickSort(left), pivot, ...quickSort(right)];
};


////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// quickSort 함수가 두 번째 인자로 callback 함수를 받아서,
// 그 함수의 리턴값을 기준으로 요소들을 정렬합니다.
const quickSort = function (arr, cb = ele => ele) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i ++) {
    if (cb(arr[i]) < cb(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [ ...quickSort(left, cb), pivot, ...quickSort(right, cb)];
  // return [ ...quickSort(left), pivot, ...quickSort(right)];
};
