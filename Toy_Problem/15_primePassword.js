// 문제
// 다음의 조건을 만족하면서 현재의 비밀번호('curPwd')를 
// 새 비밀번호(newPwd)로 변경하는 데 필요한 최소 동작의 수를 리턴해야 합니다.
// 한 번에 한 개의 숫자만 변경가능하다.
// 4자리의 소수(prime)인 비밀번호로만 변경가능하다.
// 정리하면, 비밀번호가 계속 소수를 유지하도록 숫자 한 개씩을 바꿔갈 때 
// 현재 비밀번호에서 새 비밀번호로 바꾸는 데 최소 몇 개의 숫자를 변경해야 하는지를 리턴해야 합니다.

// 입력
// 인자 1 : curPwd
// number 타입의 1,000 이상 9,999 이하의 자연수
// 인자 2 : newPwd
// number 타입의 1,000 이상 9,999 이하의 자연수

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// 4자리인 소수는 1,000 이상의 소수를 말합니다.(0011, 0997 등은 제외)

/* Reference */
const primePassword = (curPwd, newPwd) => {
  // 현재 비밀번호와 새 비밀번호가 같다면 최소 동작수는 0
  if (curPwd === newPwd) return 0;
  // queue 배열과 front, rear 인덱스 이용
  const queue = [];
  let front = 0;
  let rear = 0;
  // queue가 비었는지 확인하는 함수
  const isEmpty = (queue) => front === rear;
  // queue에 item을 넣는 함수
  const enQueue = (queue, item) => {
    queue.push(item);
    rear ++;
  }
  // queue에서 item을 꺼내는 함수
  const deQueue = (queue) => {
    const item = queue[front];
    front ++;
    return item;
    // OR
    // return queue[front++];
  }
  // 4자리 소수로 작성되는 비밀번호 체크를 위한 배열 초기화
  const isChecked = Array(10000).fill(false);
  isChecked[curPwd] = true;
  // 비밀번호 변경을 위한 작동 수 확인 시작
  // queue에 필요한 동작수와 비밀번호를 저장하여 넣기
  enQueue(queue, [0, curPwd]);
  // queue에 item이 남아있는 동안 계속(즉, queue가 비워질때까지) 진행
  while (isEmpty(queue) === false) {
    const [step, num] = deQueue(queue);
    // 비밀번호 자리수 만큼 진행
    for (let i = 0; i < 4; i ++) {
      const digits = splitNum(num);
      // 각 자리수의 숫자는 0에서 9까지의 수만큼 진행
      for (let d = 0; d < 10; d ++) {
        // 각 자리수의 숫자가 원래 있던 수가 아닐 경우
        if (d !== digits[i]) {
          // 현재 자리수의 숫자를 변경하고
          digits[i] = d;
          // 변경된 4자리 수 구하기
          const next = joinDigits(digits);
          // 앞서 구한 4자리 수가 변경될 비밀번호와 같다면 작동수 1 증가
          if (next === newPwd) return step + 1;
          // 앞서 구한 4자리 수가 1000보다 크고, 소수이며, 체크된 적이 없다면
          if (next > 1000 && isPrime(next) && isChecked[next] === false) {
            // 체크하고
            isChecked[next] = true;
            // queue에 넣기
            enQueue(queue, [step + 1, next]);
          }
        }
      }
    }
  }
  // queue가 다 비워질때까지 새 비밀번호 변경을 위한 작동 수를 구하지 못하고 while 루프가 끝나면
  // 현재 비밀번호에서 새 비밀번호를 생성할 수 없다는 의미로 -1를 반환 
  return -1;
};

///////////////////////////////////////////////////////////
/* Helper Fucntions */
// 소수인지 확인하는 함수
function isPrime(num) {
  if (num % 2 === 0) return false;
  let sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};
// 4자리 수를 받아서 각 자리수의 수들의 배열로 변환하는 함수
//  let output = splitNum(3359);
//  console.log(output); // --> [3, 3, 5, 9]
function splitNum(num) {
  const digits = num.toString().split('');
  return digits.map((d) => Number(d));
};
// 길이의 4의 수 배열을 받아서, 4자리의 수로 변환하는 함수
//  let output = splitNum([3, 3, 5, 9]);
//  console.log(output); // --> 3359
// 배열의 각 요소가 숫자이지만 join()에 의해 문자로 취급되고 
// 다시 결과를 숫자로 반환하기위해 Number()를 사용  
function joinDigits(digits) {
  return Number(digits.join(''));
}