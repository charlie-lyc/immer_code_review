/**
 * Ubuntu의 경우 "Command 'curl' not found" 메세지가 터미널에 출력될 때
 * 아래와 같이 curl을 설치한 다음 아래의 nvm설치 명령어를 입력해 주세요.
 */
// $ sudo apt-get update
// $ sudo apt install curl

/* 해당 파일이 없을 경우 만들기 */
// $ touch ~/.bash_profile

/* nvm 설치 하기 */
// $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash


/* nvm이 설치되었으면 버전을 확인합니다. */
// $ nvm --version
// v10.13.0


/* 이제 nvm을 이용하여 node.js를 설치해 봅시다. */
// $ nvm install 12.18.3


/* 성공적으로 node가 설치되었으면 node.js 버전을 확인합니다. */
// $ node -v
// v12.18.3
