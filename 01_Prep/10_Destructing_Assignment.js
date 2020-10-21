/**
 * Destructing Assignment(분해 할당)
 */
/* 배열 분해 */
const array = ['hello', 'world', 'good', 'bye'];
const [first, second] = array;
console.log(first, second);  // hello world
/* 전달인자 분해 */
function foo([first, second]) {
  console.log(second, first);
}
foo(array); // world hello
/* 객체 분해 */
const student = { name: 'Charlie', major: 'software engineering' };
const { name } = student;
console.log(name);  // Charlie


/**
 * Rest Parameter(나머지 매개변수)와 Spread Operator(전개 연산자)
 */
const array = ['hello', 'world', 'good', 'bye'];
const [start, ...rest] = array;
console.log(start); // hello
console.log(rest);  // ['world', 'good', 'bye']


/**
 * 나머지 매개변수와 전개연산자를 이용한 분해 할당
 */
/* 객체 분해 */
const student = { name: 'Charlie', major: 'software engineering' };
const { name, ...args } = student;
console.log(name); // Charlie
console.log(args);  // { major: 'software engineering' }


/**
 * Shorthand Syntax(단축 문법)
 */
/* 객체 단축 문법 */
const name = 'Charlie';
const age = 43;
const person = {
  name,
  age,
  level: 'Junior',
};
console.log(args);
/*
{
  name: '김코딩',
  age: 28,
  level: 'Junior',
}
*/
