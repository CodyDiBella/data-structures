// Define a class for the binary search tree node
class Node {
  constructor(value) {
    this.value = value; // the value stored in the node
    this.left = null; // the left child node
    this.right = null; // the right child node
  }
}

// Define a class for the binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null; // the root node of the tree
  }

  // Insert a value into the binary search tree
  // O(log n) on average, but can be O(n) in the worst case if the tree is unbalanced and resembles a linked list.
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) { // if the tree is empty
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) { // if the value already exists in the tree
        return undefined;
      }
      if (value < current.value) { // if the value is less than the current node's value
        if (current.left === null) { // if there's no left child
          current.left = newNode;
          return this;
        }
        current = current.left; // move to the left child
      } else { // if the value is greater than the current node's value
        if (current.right === null) { // if there's no right child
          current.right = newNode;
          return this;
        }
        current = current.right; // move to the right child
      }
    }
  }

  // Find a value in the binary search tree
  // O(log n) on average, but can be O(n) in the worst case if the tree is unbalanced and resembles a linked list.
  find(value) {
    if (this.root === null) { // if the tree is empty
      return null;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) { // if the value is found
        return current;
      }
      if (value < current.value) { // if the value is less than the current node's value
        if (current.left === null) { // if there's no left child
          return null;
        }
        current = current.left; // move to the left child
      } else { // if the value is greater than the current node's value
        if (current.right === null) { // if there's no right child
          return null;
        }
        current = current.right; // move to the right child
      }
    }
  }
}

// Example usage:
const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);
console.log(tree.find(7)); // Output: Node { value: 7, left: null, right: null }
console.log(tree.find(13)); // Output: null
