
class Node {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}



const Tree = function() {

  const root = null;

  function sortArr(arr) {
    arr.sort((a,b) => a - b);

    return arr;
  }

  function buildTree(arr,start,end) {

    if (start > end)
    {
        return null;
    }

    const mid = parseInt((start + end) / 2);
    const node = new Node(arr[mid]);
    
    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);
    
    return node;

  }

  function insert(value) {

  }

  function deleteItem(value) {

  }

  function find(value) {

  }

  function levelOrder(callback) {

  }

  function inOrder(callback) {

  }

  function preOrder(callback) {
    
  }

  function postOrder(callback) {
    
  }

  function height(node) {

  }

  function depth(node) {

  }

  function isBalanced() {

  }

  function rebalance() {

  }

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 

  return {
    root:root,
    sortArr:sortArr,
    buildTree:buildTree,
    insert:insert,
    deleteItem:deleteItem,
    find:find,
    levelOrder:levelOrder,
    inOrder:inOrder,
    preOrder:preOrder,
    postOrder:postOrder,
    height:height,
    depth:depth,
    isBalanced:isBalanced,
    rebalance:rebalance,
    prettyPrint:prettyPrint,
  }

}

let treeObj = Tree();

let testArr = [3,1,6,7]
let lengthArr = testArr.length;

// getting the base 0 level of tree returned value from the recursion
const root = treeObj.buildTree(testArr, testArr[0], testArr[lengthArr - 1]);

console.log(root);

treeObj.sortArr(testArr);


treeObj.prettyPrint(root);
