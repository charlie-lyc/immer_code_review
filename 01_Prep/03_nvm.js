/* 아래의 명령어를 입력하면, 현재 nvm을 통해 설치한 node version들이 나옵니다. */
// $ nvm ls
// ->       system
// iojs -> N/A (default)
// node -> stable (-> N/A) (default)
// unstable -> N/A (default)
// nvm_list_aliases:36: no matches found: /Users/charlie/.nvm/alias/lts/*


/* 현재 nvm을 통해 설치한 node version들이 없어서 한가지를 설치합니다. */
// $ nvm install 10.13.0


/* 다시 아래의 명령어를 입력하여, 현재 nvm을 통해 설치한 node version들을 확인합니다. */
// $ nvm ls
// ->     v10.13.0
//          system
// default -> 10.13.0 (-> v10.13.0)
// node -> stable (-> v10.13.0) (default)
// stable -> 10.13 (-> v10.13.0) (default)
// iojs -> N/A (default)
// unstable -> N/A (default)
// lts/* -> lts/erbium (-> N/A)
// lts/argon -> v4.9.1 (-> N/A)
// lts/boron -> v6.17.1 (-> N/A)
// lts/carbon -> v8.17.0 (-> N/A)
// lts/dubnium -> v10.22.1 (-> N/A)
// lts/erbium -> v12.19.0 (-> N/A)


/* 다른 node version을 사용하고 싶을 땐 아래 명령어만 입력하면 됩니다. */
// $ nvm use (사용하고 싶은 node version : use 명령어 전에 해당 node version이 설치되어있어야 합니다.)
// ex) nvm use 12.13.0
