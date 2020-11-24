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

/* Bare Minumum Requirements */


const quickSort = function (arr) {

  for (let pivotIdx = 0; pivotIdx < arr.length; pivotIdx ++) {
    let storeIdx = pivotIdx + 1;
    for (let i = pivotIdx + 1; storeIdx < arr.length; storeIdx ++) {
      if (arr[pivotIdx] > arr[i]) {
        const temp = arr[i];
        arr[i] = arr[storeIdx];
        arr[storeIdx] = temp;
        storeidx ++;
      }
    }
    const temp = arr[pivotIdx];
    arr[pivotIdx] = arr[storeIdx-1];
    arr[storeIdx-1] = temp;
  }
  return arr;

};

// for each (unsorted) partition
// set first element as pivot
//   storeIndex = pivotIndex + 1
//   for i = pivotIndex + 1 to rightmostIndex
//     if element[i] < element[pivot]
//       swap(i, storeIndex); storeIndex++
//   swap(pivot, storeIndex - 1)


////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// quickSort 함수가 두 번째 인자로 callback 함수를 받아서,
// 그 함수의 리턴값을 기준으로 요소들을 정렬합니다.
