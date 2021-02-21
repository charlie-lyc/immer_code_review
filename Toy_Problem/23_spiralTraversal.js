// 문제
// 2차원 M x N 배열을 나선형(spiral)으로 순회해야 합니다.

// 입력
// 인자 1 : matrix
// 세로 길이(matrix.length)가 M, 가로 길이(matrix[i].length)가 N인 2차원 배열
// matrix[i]는 string 타입을 요소로 갖는 배열
// matrix[i][j].length는 1

// 출력
// string 타입을 리턴해야 합니다.

// 주의사항
// 순회는 좌측 상단 (0,0)에서 시작합니다.
// 배열의 모든 요소를 순서대로 이어붙인 문자열을 리턴해야 합니다.

const spiralTraversal = function (matrix) {
  // 각 방향별 기본적인 이동을 행과 열의 변화로 정의
  const right = [0, 1];
  const down =  [1, 0];
  const left = [0, -1];
  const up = [-1, 0];
  // 각 방향별 lookup table 정의
  const moves = [right, down, left, up];
  const M = matrix.length;
  const N = matrix[0].length;
  // isValid() 정의
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;
  // 필요한 변수들 초기화
  let counter = 0;
  let row = 0, col = -1;
  let direction = 0;
  let result = '';
  // 나선형 순회
  while (counter < M * N) {
    const move = moves[direction];
    const [rowDir, colDir] = move;
    row = row + rowDir;
    col = col + colDir;
    while (isValid(row, col) && matrix[row][col] !== false) {
      result = result + matrix[row][col];
      // 한 요소에 한 번만 접근하기(중복 접근하지 않기)
      matrix[row][col] = false;
      row = row + rowDir;
      col = col + colDir;
      counter ++; 
    }
    // while loop를 벗어났다는 것은 row와 col이 주어진 matrix의 범위를 벗어났다는 의미이므로
    // back tracking 실행
    row = row - rowDir;
    col = col - colDir; 
    // 그리고 네가지 방향이 순환되므로
    direction = (direction + 1) % 4;
  }
  return result;
};


// 입출력 예시
// let matrix = [
//   ['A', 'B', 'C'],
//   ['D', 'E', 'F'],
//   ['G', 'H', 'I'],
// ];
// let output = spiralTraversal(matrix);
// console.log(output); // --> 'ABCFIHGDE'
// let matrix = [
//   ['T', 'y', 'r', 'i'],
//   ['i', 's', 't', 'o'],
//   ['n', 'r', 'e', 'n'],
//   ['n', 'a', 'L', ' '],
// ];
// let output = spiralTraversal(matrix);
// console.log(output); // --> 'Tyrion Lannister'