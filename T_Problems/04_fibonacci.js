// 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 인자 1 : n
// number 타입의 n (n은 0 이상의 정수)

// number 타입을 리턴해야합니다.
// fibonacci 함수는 재귀함수 형태로 작성해야 합니다.

/* Bare Minimum Requirements */
function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  return fibonacci(n-2) + fibonacci(n-1);
}

////////////////////////////////////////////////////////////////////////////////
/* Advnaced */
// 재귀함수의 형태를 유지한 채, 메모이제이션(memoization)을 적용하여 주석으로 처리된 테스트 케이스를 통과해보세요.
let memo = [0, 1];
function fibonacci(n) {
  if (memo[n] !== undefined) return memo[n];
  return memo[n] = fibonacci(n-2) + fibonacci(n-1);
}
// 'const memo = [0, 1];'로 실행하면 테스트를 통과 하지 못한다. 왜 일까 ?
// node.js환경에서는 이상없이 실행된다.
