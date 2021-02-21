// 문제
// 아래와 같은 과정을 거쳐 부등호 수(inequalityNumber)를 만들 수 있습니다.
// 최대 9개의 부등호(<, >)가 주어집니다.
// 부등호의 좌우에는 0부터 9사이의 숫자가 한 번씩만 들어가야 합니다.
// 부등호를 만족하는 숫자의 조합을 차례대로 이어 붙여 만든 정수를 부등호 수라고 한다.
// 부등호 기호들을 입력받아 부등호를 만족하는 최대 부등호 수와 최소 부등호 수의 차이를 리턴해야 합니다.

// 입력
// 인자 1 : signs
// string 타입의 공백을 사이에 둔 부등호 기호들
// signs.length는 17 이하 (최대 9개의 부등호 기호)

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// 첫 자리가 0인 경우도 부등호 수에 포함되어야 합니다.
// 모든 입력에 답은 항상 존재합니다.

const inequalityNumber = function (signs) {
  // 재귀 함수 정의 
  const recurFunc = (idx, signs, nums, digits, isChecked) => {
    // escape case : 부등호 수를 만든 경우
    if (idx === signs.length) return parseInt(nums.join(''));
    // recursive case : 부등호 수를 만들기 위해 자리수만큼 차례로 탐색
    const sign = signs[idx];
    for (let i = 0; i < digits.length; i ++) {
      const right = digits[i];
      // 이미 사용된 숫자인 경우 통과
      if (isChecked[right]) continue;
      // 첫번째 자리가 아닐 경우 실행
      if (idx >= 0) {
        const left = nums[nums.length - 1];
        if (sign === '<' && left >= right) continue;
        if (sign === '>' && left <= right) continue;
      }
      // 이미 사용되지 않았거나 첫번째 자리가 아닐 경우 true 할당
      isChecked[right] = true;
      // 재귀적 실행을 통해 부등호 수 찾기 
      const target = recurFunc(idx + 1, signs, nums.concat(right), digits, isChecked);
      // 부등호 수를 찾았다면 결과 반환
      if (target !== undefined) return target;
      // back tracking : 부등호 수를 찾지 못했다면 다시 false 할당
      isChecked[right] = false;
    }
    return undefined;
  }
  // 재귀 함수 실행
  signs = signs.split(' ');
  // 자리수 초기화
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 최대, 최소 부등호 수 찾기
  const min = recurFunc(-1, signs, [], digits, Array(10).fill(false));
  const max = recurFunc(-1, signs, [], digits.reverse(), Array(10).fill(false));
  // 최대 - 최소 결과 반환
  return max - min;
};


// 입출력 예시
// let output = inequalityNumber('<');
// console.log(output); // --> 88 (89 - 01)
// let output = inequalityNumber('< >');
// console.log(output); // --> 876 (897 - 021)
// let output = inequalityNumber('> < >');
// console.log(output); // --> 8,754 (9,786 - 1,032)