
class Node {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

const Tree = function(arr) {

  function buildTree(arr) {

    // returns 0,1 or -1 for comparison to sort
    arr.sort((a,b) => a - b);

    return arr;

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

  return {
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
  }

}

let treeObj = Tree();

let testArr = [3,1,6,7]

console.log(treeObj.buildTree(testArr));