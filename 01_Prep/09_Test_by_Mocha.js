/* package.json의 일부분 */
"scripts": {
    "test:koans": "mocha modern-js-koans/*.js --sort",
    "test:ha": "mocha pre-hiring-assessment/**/index.test.js --sort",
    "test": "mocha modern-js-koans/*.js pre-hiring-assessment/**/index.test.js --sort",
    "lint": "eslint pre-hiring-assessment/**/*.js modern-js-koans/**/*.js",
    "report": "mocha modern-js-koans/*.js pre-hiring-assessment/**/index.test.js --sort --reporter @mochajs/json-file-reporter",
    "submit": "node ./.travis/submit.js"
  }


/* 위의 내용에서 볼 수 있듯이 본 프로젝트에 대한 테스트 파일을 실행할 수 있는 몇 가지 방법이 있다.


< Mocha가 전역으로 설치된 경우 >

1. modern-js-koans와 pre-hiring-assessment 동시에 테스트 실행
$ mocha modern-js-koans/*.js pre-hiring-assessment/**/index.test.js --sort

2. modern-js-koans, pre-hiring-assessment 따로 테스트 실행
$ mocha modern-js-koans/*.js
$ mocha pre-hiring-assessment/**/index.test.js

3. 파일별 테스트 실행
$ mocha pre-hiring-assessment/01_test1/index.test.js
$ mocha pre-hiring-assessment/02_test2/index.test.js
$ mocha pre-hiring-assessment/03_test3/index.test.js
$ mocha pre-hiring-assessment/04_test4/index.test.js
$ mocha pre-hiring-assessment/05_test5/index.test.js
$ mocha pre-hiring-assessment/06_test6/index.test.js
$ mocha pre-hiring-assessment/07_test7/index.test.js


< Mocha가 로컬로 설치된 경우(프로젝트 내 실행) >

1. modern-js-koans와 pre-hiring-assessment 동시에 테스트 실행
$ npm run test
// 또는
$ ./node_modules/mocha/bin/mocha modern-js-koans/*.js pre-hiring-assessment/**/index.test.js --sort

2. modern-js-koans, pre-hiring-assessment 따로 테스트 실행
$ npm run test:koans
// 또는
$ ./node_modules/mocha/bin/mocha modern-js-koans/*.js

$ npm run test:ha
// 또는
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/**/index.test.js

3. 파일별 테스트 실행
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/01_test1/index.test.js
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/02_test2/index.test.js
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/03_test3/index.test.js
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/04_test4/index.test.js
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/05_test5/index.test.js
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/06_test6/index.test.js
$ ./node_modules/mocha/bin/mocha pre-hiring-assessment/07_test7/index.test.js


*/
