// 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다.
// 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

// 인자 1 : node
// 'value', 'children' 속성을 갖는 객체 (Node)
// 'node.value'는 number 타입
// 'node.children'은 Node를 요소로 갖는 배열

// 배열을 리턴해야 합니다.

// Tree 의 각 node는 전달받은 필터링 함수를 깊이 우선 방식으로 호출합니다.
// 매개변수로 전달받은 필터링 함수를 만족하는 Tree의 node들을 1차원 배열로 반환합니다.
// 필터링 함수는 형식이 정해져 있지 않습니다.
// 주어진 Tree클래스의 메서드(addChild, isDescendant, removeChild)를 이용해야 합니다.
// 깊이에 따른 필터링이 가능해야 합니다.

/* Reference: 이 구조도 이해하고 구현할 수 있어야 한다!!! */
let dfs = function (node) {
  let result = [node.value];
  node.children.forEach((childNode) => {
    result = result.concat(dfs(childNode));
  });
  return result;
};

/* My Solution : <Tree 구조의 재귀적 구현의 핵심> 'node' -> 'node.children[i]' */
let dfs = function (node) {
  const result = [];
  const searchDFSGetValue = (treeNode) => {
    result.push(treeNode.value);
    treeNode.children.forEach((childNode) => {
      searchDFSGetValue(childNode));
    });
  }
  searchDFSGetValue(node);
  return result;
};


/******************************************************************************/
/******************************************************************************/
// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};
// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
