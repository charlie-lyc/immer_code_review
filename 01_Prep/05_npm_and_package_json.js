/**
 * npm install 명령어를 입력하시면, package.json에서 필요하다고 하는 모듈을 다운받습니다.
 * 다운로드가 완료되면 node_modules 디렉토리가 생긴 걸 확인하실 수 있습니다.
 */


/*

package.json 파일에는 아래와 같은 내용들이 명시되어 있습니다.
 1. dependencies
  이 프로젝트가 돌아가기위해 반드시 필요한 모듈들이 무엇인지가 적혀 있습니다.
  "dependencies": {
    "react": "^16.8.6",
  }

 2. devDependencies
  이 프로젝트를 개발하는 환경에서 필요한 모듈들이 무엇인지가 적혀 있습니다.
  실제 프로젝트 동작에 직접적으로 영향을 주지 않는 모듈들을 명시합니다.
  "devDependencies": {
    "jest": "^2.3.0",
    "eslint" : "^2.0.0"
  }

 3. scripts
  npm 으로 실행시킬 수 있는 명령어를 정의합니다.
  명령어를 입력하면 어떤 동작을 해야하는지가 적혀 있습니다.
  "scripts": {
    "start": "node app.js",
    "test": "node test.js",
  }
  ex) 'npm start' 명령어를 입력하면 "app.js 파일을 node 에서 실행"하게 됩니다.
  ex) 'npm test' 명령어를 입력하면 "test.js 파일을 node 에서 실행"하게 됩니다.

*/
