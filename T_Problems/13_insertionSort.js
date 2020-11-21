// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// arr[i]의 길이는 1,000 이하

// 삽입 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.


/* Bare Minimum Requirements */
const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i-1] > arr[i]) {
      let j = i;
      while(arr[j-1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        j --;
      }
    }
  }
  return arr;
};

////////////////////////////////////////////////////////////////////////////////
/* Advanced */
// insertionSort 함수가 두 번째 인자로 callback 함수를 받아서,
// 그 함수의 리턴값을 기준으로 요소들을 정렬합니다.
const insertionSort = function (arr, cb = (ele) => ele) {
  for (let i = 1; i < arr.length; i ++) {
    if (cb(arr[i-1]) > cb(arr[i])) {
      let j = i;
      while(cb(arr[j-1]) > cb(arr[j])) {
        const temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        j --;
      }
    }
  }
  return arr;
};
// 테스트 통과의 경우를 보고 추정하건데, 콜백함수가 어떤 일을 하는지 상관 없는 케이스가 아니다.
// 임의의 콜백함수를 정의하고, 그 콜백함수를 거쳐 얻은 결과를 반영하여 정렬되는 것이 요점인것 같다.
