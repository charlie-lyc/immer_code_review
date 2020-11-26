// 비동기 함수들을 요소로 갖는 배열(tasks)과 함수(final)를 입력받아 아래와 같은 동작을 하는 함수를 구현해야 합니다.
// 비동기 함수들을 차례대로 실행하고, 비동기 함수의 콜백함수에 전달되는 인자를 비동기 함수의 실행 순서대로 저장합니다.
// 모든 결과가 저장되면, 전체 결과를 final 함수에 적용(apply)합니다.

// 인자 1 : tasks
// function 타입을 요소로 갖는 배열
// tasks[i]는 비동기 함수
// 인자 2 : final
// function 타입의 함수

// final의 리턴을 따릅니다.

// tasks의 각 비동기 함수들은 엄밀한 의미에서 비동기 함수는 아니며, 비동기 오퍼레이션을 포함하고 있는 함수입니다.
// final은 입력으로 주어지므로 출력의 형태는 신경쓰지 않아도 됩니다.
// tasks의 각 비동기 함수들은 콜백함수를 인자로 받아, 비동기 오퍼레이션이 완료될 때 호출합니다.
// final 함수는 tasks의 각 비동기 함수의 콜백에 전달된 결과들을 비동기 함수의 실행 순서대로 담은 배열을 인자로 받아 실행되어야 합니다.
// 비동기 함수들의 실행 순서와 완료 순서는 서로 다를 수 있습니다.
// Promise.all 사용은 금지됩니다.

// Reference
const asyncMap = function (tasks, final) {
  const results = [];
  let count = 0;
  tasks.forEach((task, idx) => {
    task((data) => {
      // 어떤 task가 먼저 끝날지 모르기 때문에 result.push가 아니라 인덱스를 특정해야 한다.
      // push는 동기적 처리?, bracket notation은 비동기적 처리?
      results[idx] = data;
      count ++;
      // 완료된 비동기 작업이 tasks의 개수와 같은 경우 즉, 모든 비동기 함수의 실행이 종료된 경우
      if (count === tasks.length) final(results);
    });
  });
};

// Hint
// 이 문제는 Promise.all로 아래와 같이 쉽게 해결할 수 있습니다.
// 즉, 여러분들이 구현한 코드와 아래 코드의 결과는 같아야 합니다.
// 직접 실행하고 결과를 비교해 보시기 바랍니다.
const asyncMap = function (tasks, final) {
  const promises = tasks.map((task) => new Promise(task));
  return Promise.all(promises).then((result) => final(result));
};
