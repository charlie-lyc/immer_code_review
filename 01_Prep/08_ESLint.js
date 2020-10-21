/**
 * npm을 이용해 전역 설치된 패키지 확인하는 방법
 * $ npm ls --depth=0 --global
 */


/*

0. 프로그램의 구동에 영향을 미칠 수 있으므로 전역 설치는 추천하지 않는다.
npm install eslint --global

1. 로컬 설치(프로젝트 내 설치)
$ npm install eslint --save-dev

2. 설정 => https://eslint.org/docs/user-guide/configuring 참조
$ npx eslint --init

3-1. 전역 실행
$ eslint <file name>

3-2. 로컬 실행(프로젝트 내 실행)
$ npx eslint <file name>

3-3. Immersive Prep Sprint에서 실행
$ npm run lint     //  => 아래의 package.json 파일의 "scripts"부분 참조

3-4. Immersive Prep Sprint에서 다른 실행 방법들(3-3과 동일한 실행 결과)
$ npx eslint modern-js-koans/**/*.js pre-hiring-assessment/**/*.js
$ ./node_modules/eslint/bin/eslint.js modern-js-koans/**/*.js pre-hiring-assessment/**/*.js

*/


/* package.json의 일부분 */
"scripts": {
    "test:koans": "mocha modern-js-koans/*.js --sort",
    "test:ha": "mocha pre-hiring-assessment/**/index.test.js --sort",
    "test": "mocha modern-js-koans/*.js pre-hiring-assessment/**/index.test.js --sort",
    "lint": "eslint pre-hiring-assessment/**/*.js modern-js-koans/**/*.js",
    "report": "mocha modern-js-koans/*.js pre-hiring-assessment/**/index.test.js --sort --reporter @mochajs/json-file-reporter",
    "submit": "node ./.travis/submit.js"
  }
