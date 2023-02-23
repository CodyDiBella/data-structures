// Define a class for the stack
class Stack {
  constructor() {
    this.items = []; // the array used to store the stack's elements
  }

  // Add an element to the top of the stack
  // O(1) - This operation inserts an element at the end of the array, which takes constant time.
  push(element) {
    this.items.push(element);
  }

  // Remove the top element from the stack and return it
  // O(1) This operation removes the last element from the array, which takes constant time.
  pop() {
    if (this.items.length === 0) { // check if the stack is empty
      return null;
    }
    return this.items.pop();
  }

  // Get the top element of the stack without removing it
  // O(1) - This operation returns the last element of the array, which takes constant time.
  peek() {
    if (this.items.length === 0) { // check if the stack is empty
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  // O(1) - This operation checks the length of the array, which takes constant time.
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the stack
  // O(1) - This operation returns the length of the array, which takes constant time.
  size() {
    return this.items.length;
  }
}

// Example usage:
const stack = new Stack();

stack.push("apple");
stack.push("banana");
stack.push("cherry");
console.log(stack.peek()); // Output: "cherry"

stack.pop();
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
