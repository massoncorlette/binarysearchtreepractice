
class Node {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

const Tree = function(arr) {

  let root = null;

  function sortArr(arr) {
    arr.sort((a,b) => a - b);

    const newArr = arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });

    return newArr;
  }

  function buildTree(arr, start, end) {

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

  function insert(root, value) {

    if (root === null ) {
      return new Node(value);
    }

    if (root.val === value) {
      return root;
    }

    if (value < root.val) {
      root.left = insert(root.left, value);
    } else if ( value > root.val) {
      root.right = insert(root.right, value);
    }
    return root;
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
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`); // Change from node.data to node.val
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

let testArr = [1, 7, 4, 23, 8, 9]
let lengthArr = testArr.length;

treeObj.sortArr(testArr);
console.log(testArr);

// getting the base 0 level of tree returned value from the recursion
let root = treeObj.buildTree(testArr, 0, lengthArr - 1) ;
root = treeObj.insert(root, 24);

console.log(root);

treeObj.prettyPrint(root);


