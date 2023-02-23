// Define a class for the queue
class Queue {
  constructor() {
    this.items = []; // the array used to store the queue's elements
  }

  // Add an element to the back of the queue
  // O(1) - This operation inserts an element at the end of the array, which takes constant time.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove the front element from the queue and return it
  // O(n) - This operation removes the first element from the array, which 
  // requires shifting all the remaining elements one position to the left. 
  // This takes linear time proportional to the number of elements in the array, in the worst case.
  dequeue() {
    if (this.items.length === 0) { // check if the queue is empty
      return null;
    }
    return this.items.shift();
  }

  // Get the front element of the queue without removing it
  // O(1) - This operation returns the first element of the array, which takes constant time.
  front() {
    if (this.items.length === 0) { // check if the queue is empty
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  // O(1) - This operation checks the length of the array, which takes constant time.
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the queue
  // O(1) - This operation returns the length of the array, which takes constant time.
  size() {
    return this.items.length;
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("cherry");
console.log(queue.front()); // Output: "apple"

queue.dequeue();
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
