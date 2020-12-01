// 임의의 tree를 구성하는 루트 노드(root node) 입력받아 리프 노드(leaf node)의 개수를 리턴해야 합니다.
//
// 인자 1 : root
// 'value', 'children' 속성을 갖는 객체 (Node)
// 'node.value'는 number 타입
// 'node.children'은 Node를 요소로 갖는 배열
//
// number 타입을 리턴해야 합니다.
//
// 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.

/* My Solution */
let countLeaves = function (root) {
  let count = 0;
  const traverseTree = (node) => {
    if (node.children.length === 0) count ++;
    for (let child of node.children) {
      traverseTree(child);
    }
  }
  traverseTree(root);
  return count;
};

/* Reference */
let countLeaves = function (root) {
  if (root.children.length === 0) return 1;
  let sum = 0;
  for (let child of root.children) {
    sum = sum + countLeaves(child);
  }
  return sum;
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
