// 가운데 글자 가져오기

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// 입출력 예
// s	     return
// "abcde"	 "c"
// "qwer"	 "we"

function solution(s) {
    var answer = '';
    // 입출력의 예를 통해 파악할 수 있는 사실
    // 마지막 인덱스 값을 2로 나누었을 때 
    // 나머지가 0이면 그 몫을 인덱스값으로 하는 문자를 결과값으로 반환
    // 나머지가 1이면 그 몫의 내림, 올림 값을 인덱스로 하는 문자를 결과값으로 반환
    const lastIdx = s.length - 1; 
    if (lastIdx % 2 === 0) {
        answer = s[lastIdx / 2];
    } else {
        answer = s[Math.floor(lastIdx / 2)] + s[Math.ceil(lastIdx/2)];
    }
    return answer;
}