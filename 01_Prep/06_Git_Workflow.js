/* Git Workflow:

1. Both pairs fork repository on Github

2. Both pairs clone their repository to local
$ git clone <repository URL>

3. Add pair's fork as remote
$ git remote add <naming pair's repository> <repository URL for pair's fork>
$ git remote -v  // 또는 git remote --verbose
$ git remote show

4. Commit your change to your local repository
$ git add <change file>
$ git commit -m "change"

5. Push your code to your remote origin
$ git push origin master
// 또는
$ git push <other branch name>

6. Pull pair's code to your local repository: "pull" = "fetch" + "merge"
$ git pull <pair's repository named at Step 3.> master
// 또는
$ git pull <other branch name>

7. Commit pair's change to your local repository
$ git add <change file>
$ git commit -m "change TOO"

8. Push pair's code to your remote origin
$ git push origin master
// 또는
$ git push <other branch name>

9. Pull latest version of pair's code
$ git pull <pair's repository named at Step 3.> master
// 또는
$ git pull <other branch name>


And Repeat!!!
여기서 주의할 점은 pull은 페어의 repository로 부터,
push는 나의 repository로 실행한다는 점이다.

*/
