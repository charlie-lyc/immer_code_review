// 문제
// 스도쿠는 숫자 퍼즐로, 가로 9칸, 세로 9칸으로 이루어져 있는 표에 1부터 9까지의 숫자를 채워 넣는 퍼즐입니다. 
// 퍼즐을 푸는 방법은 아홉 가로줄, 세로줄, 3X3 칸에 1에서 9까지의 숫자를 중복되지 않게 한 번씩만 넣으면 됩니다. 
// 일부 칸이 비어있는 상태인 스도쿠 보드를 입력받아 스도쿠 퍼즐이 완성된 보드를 리턴해야 합니다.

// 입력
// 인자 1 : board
// 가로 길이(board[i].length)와 세로 길이(board.length)가 모두 9인 2차원 배열
// matrix[i][j]는 1 이상 9 이하의 자연수

// 출력
// 가로와 세로의 길이가 모두 9인 2차원 배열을 리턴해야 합니다.

// 주의사항
// 입력으로 주어지는 board를 직접 수정해도 상관없습니다.
// 입력으로 주어지는 board 가지고 완성시킬 수 있는 보드는 유일(unique)합니다.
// 숫자가 입력되지 않은 칸은 편의상 0이 입력되어 있습니다.

// 입출력 예시
// let board = [
//   [0, 3, 0, 2, 6, 0, 7, 0, 1],
//   [6, 8, 0, 0, 7, 0, 0, 9, 0],
//   [1, 9, 0, 0, 0, 4, 5, 0, 0],
//   [8, 2, 0, 1, 0, 0, 0, 4, 0],
//   [0, 0, 4, 6, 0, 2, 9, 0, 0],
//   [0, 5, 0, 0, 0, 3, 0, 2, 8],
//   [0, 0, 9, 3, 0, 0, 0, 7, 4],
//   [0, 4, 0, 0, 5, 0, 0, 3, 6],
//   [7, 0, 3, 0, 1, 8, 0, 0, 0],
// ];
// let output = sudoku(board);
// console.log(output);
// [
//   [4, 3, 5, 2, 6, 9, 7, 8, 1],
//   [6, 8, 2, 5, 7, 1, 4, 9, 3],
//   [1, 9, 7, 8, 3, 4, 5, 6, 2],
//   [8, 2, 6, 1, 9, 5, 3, 4, 7],
//   [3, 7, 4, 6, 8, 2, 9, 1, 5],
//   [9, 5, 1, 7, 4, 3, 6, 2, 8],
//   [5, 1, 9, 3, 2, 6, 8, 7, 4],
//   [2, 4, 8, 9, 5, 7, 1, 3, 6],
//   [7, 6, 3, 4, 1, 8, 2, 5, 9],
// ];


/**
 * sudoku 문제 이해 정리
 * 1. 최초 0~9의 숫자로 문제가 주어진다.
 * 2. 0으로 입력된 곳에 1~9사이의 숫자를 채울수 있다.
 * 3. 단, 열 또는 행 방향으로 검증시 1~9사이의 숫자가 한번씩만 사용되어야 한다.
 */
const sudoku = function (board) {
    // 문제를 푸는 과정을 검증하기 위한 일종의 빈 체크란 준비
    const rowChecked = [];
    const colChecked = [];
    const boxChecked = [];
    /**
     * Array(num)
     * => 길이가 num인 임의의 배열[값이 'empty'로 채워진 배열]을 생성
     * Array.prototype.fill(i, j, k)
     * => 주어지는 배열의 인덱스 범위[j ~ k(k값 자체는 범위에 포함되지 않음)]를 i값으로 채움
     */
    for (let row = 0; row < board.length; row++) {
        rowChecked.push(Array(board.length + 1).fill(false));
        colChecked.push(Array(board.length + 1).fill(false));
        boxChecked.push(Array(board.length + 1).fill(false));
    }
    // 문제를 풀기 위해 사용해야하는 숫자들로 채워진 2차원 배열 준비
    const box = [
        [0, 0, 0, 1, 1, 1, 2, 2, 2],
        [0, 0, 0, 1, 1, 1, 2, 2, 2],
        [0, 0, 0, 1, 1, 1, 2, 2, 2],
        [3, 3, 3, 4, 4, 4, 5, 5, 5],
        [3, 3, 3, 4, 4, 4, 5, 5, 5],
        [3, 3, 3, 4, 4, 4, 5, 5, 5],
        [6, 6, 6, 7, 7, 7, 8, 8, 8],
        [6, 6, 6, 7, 7, 7, 8, 8, 8],
        [6, 6, 6, 7, 7, 7, 8, 8, 8],
    ];
    // board를 순회하면서 값이 0인 위치를 확인하고, 0이 아닌 곳의 값을 각 체크란에서 확인 
    const blank = [];
    for (let row = 0; row < board.length; row ++) {
        for (let col = 0; col < board.length; col ++) {
            if (board[row][col] === 0) {
                blank.push([row, col]);
            } else {
                const boardNum = board[row][col];
                const boxNum = box[row][col];
                rowChecked[row][boardNum] = true;
                colChecked[col][boardNum] = true;
                boxChecked[boxNum][boardNum] = true;
            }
        }
    }
    // 체크란이 사용가능한지(아직 체크가 되지않은 상태인지) 확인하는 헬퍼 함수 준비
    const isAvailable = (row, col, num) => {
        const boxNum = box[row][col];
        return (rowChecked[row][num] === false && colChecked[col][num] === false && boxChecked[boxNum][num] === false);
    };
    // board의 특정 위치 값을 바꾸고 체크란을 작성하는 헬퍼 함수 준비
    const toggleNum = (row, col, num) => {
        const boxNum = box[row][col];
        board[row][col] = num;
        rowChecked[row][num] = !rowChecked[row][num];
        colChecked[col][num] = !colChecked[col][num];
        boxChecked[boxNum][num] = !boxChecked[boxNum][num];
    };
    // 메인 함수 준비
    const mainFunc = (index, blank, problemSudoku) => {
        // escape case
        if (index === blank.length) return true;
        // recursive case
        const [row, col] = blank[index];
        for (let num = 1; num <= 9; num ++) {
            if (isAvailable(row, col, num) === true) {
                // back tracking
                toggleNum(row, col, num);
                if (mainFunc(index + 1, blank, problemSudoku) === true) return true;
                toggleNum(row, col, num);
            }
        }
        return false;
    };
    // 메인 함수 실행, 수정된 결과 반환
    mainFunc(0, blank, board);
    return board;
};