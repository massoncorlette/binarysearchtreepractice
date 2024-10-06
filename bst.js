
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

  function getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
        curr = curr.left;
    }
    return curr;
  }

  function deleteItem(root,value) {

    if (root === null) {
      return root;
    }

    if (root.val > value) {
      root.left = deleteItem(root.left, value);
    } else if (root.val < value) {
      root.right = deleteItem(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      }

      if (root.right === null) {
        return root.left;
      }

      let succ = getSuccessor(root);
      root.val = succ.val;
      root.right = deleteItem(root.right, succ.val);
    }
    return root;
  }

  function find(root,value) {
    if (root === null ) {
      return null;
    }

    if (root.val === value) {
      return root;
    }

    if (value < root.val) {
      return find(root.left, value);
    } else if ( value > root.val) {
      return find(root.right, value);
    }
    return root;
  }

  // level order traversal to callback func on every node
  // Get a sense of these functions, the coming projects will
  // be where it is ingrained
  function levelOrder(root,callback) {

    if(!(typeof callback === 'function')) {
      throw new TypeError("Second arg must be a function");
    }

    let Que = [];

    if (root === null) {
      return 
    } else {
      Que.push(root);
    }

    while (Que.length !== 0) {
      let currentQue = Que.shift();

      currentQue.val = callback(currentQue.val);

      if (currentQue.left !== null) {
        Que.push(currentQue.left);
      }

      if (currentQue.right !== null) {
        Que.push(currentQue.right);
      }  
    }

  }

  function inOrder(root,callback) {
    
    if(!(typeof callback === 'function')) {
      throw new TypeError("Second arg must be a function");
    }

    if (root == null) {
      return;
    }


  }

  function preOrder(root,callback) {

    if(!(typeof callback === 'function')) {
      throw new TypeError("Second arg must be a function");
    }

    if (root == null) {
      return;
    }

    root.val = callback(root.val);

    preOrder(root.left);
    
  }

  function postOrder(callback) {

    if(!(typeof callback === 'function')) {
      throw new TypeError("Second arg must be a function");
    }

    if (root == null) {
      return;
    }
    
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
    getSuccessor:getSuccessor,
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
root = treeObj.insert(root, 3);

root = treeObj.deleteItem(root, 9)

console.log(root);

treeObj.prettyPrint(root);

console.log(treeObj.find(root, 23))

function addone(val) {
  return val = val + 1;
}

treeObj.levelOrder(root);

console.log(root);

