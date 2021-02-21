// 문제
// 두 수를 입력받아 거듭제곱을 리턴해야 합니다.

// 입력
// 인자 1: base
// number 타입의 자연수 (base >= 2)
// 인자 2: exponent
// number 타입의 정수 (exponent >= 0)

// 출력
// number 타입을 리턴해야 합니다.
// 실제 계산 결과를 1000000009로 나눈 나머지를 리턴해야 합니다.

// 주의사항
// Math.pow, 거듭제곱 연산자 사용은 금지됩니다.
// 시간복잡도 O(logN)을 만족해야 합니다.
// 나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 
// 하지만 모든 연산이 끝난 뒤에 그 결과를 1000000009로 나누려고 해서는 안 됩니다. 
// 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.

/* Reference */
function power(base, exponent) {
  // escape case :
  // 거듭제곱의 수가 1일 경우 결과 1을 반환
  if (exponent === 0) return 1;
  // recursive case :
  // 거듭제곱의 수를 2로 나눈 값을 구하고 
  const half = Math.floor(exponent / 2);
  // 그 값에 대하여 재귀적으로 표현 
  const temp = power(base, half);
  // 결과값이 컴퓨터로 나타낼수 있는 범위의 수인지 중간 확인
  const result = (temp * temp) % 1000000009;
  // result === temp * temp * base 일 경우 컴퓨터로 나타낼수 있는 범위의 수인지 확인하고 결과값을 반환
  if (exponent % 2 === 1) return (base * result) % 1000000009;
  // result === temp * temp 일 경우 앞서 확인했으므로 바로 결과값을 반환
  else return result;
}