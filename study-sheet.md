# Data Structures Cheat Sheet

## Memory allocation:

Memory allocation refers to the process of reserving memory space for data in a computer's memory. When a program is executed, it requires memory space to store variables, data structures, and other resources.

## Contiguous arrays

Contiguous arrays are a data structure where elements are stored in a contiguous block of memory, allowing for constant-time access to elements. In a contiguous array, each element is stored at a fixed memory address, making it easy to access elements by their index. This makes contiguous arrays a very efficient data structure for random access of elements.

However, adding or removing elements from the middle of a contiguous array can be expensive, as it requires moving all the elements after the added or removed element. To address this issue, data structures such as linked lists are often used.

## Linked lists

Linked lists are a data structure where elements are stored as nodes with pointers to the next node in the list, allowing for dynamic resizing and insertion/deletion of elements. Linked lists can be singly linked or doubly linked, with the latter having pointers to both the next and previous nodes.

The advantage of linked lists is that they allow for efficient insertion and deletion of elements, as only the pointers need to be updated. However, accessing elements in a linked list is not as efficient as in a contiguous array, as the elements are not stored in contiguous memory.

## Abstract Data Types

Abstract Data Types (ADTs) are high-level data types that define a set of operations that can be performed on them, without specifying how those operations are implemented. ADTs are designed to encapsulate the implementation details and provide a clean interface for the user to interact with the data.

Examples of ADTs include stacks, queues, and trees. The implementation details of these data structures can vary, but the operations that can be performed on them are well-defined and independent of the implementation.

## Stacks

A stack is a data structure that follows the Last-In-First-Out (LIFO) principle, meaning the last element added to the stack is the first one removed. Stacks have two primary operations: push, which adds an element to the top of the stack, and pop, which removes the top element from the stack.

The name "stack" comes from the analogy of a stack of plates, where the last plate added is the first one removed.

## Queues

A queue is a data structure that follows the First-In-First-Out (FIFO) principle, meaning the first element added to the queue is the first one removed. Queues have two primary operations: enqueue, which adds an element to the back of the queue, and dequeue, which removes the front element from the queue.

The name "queue" comes from the analogy of a line of people waiting for a service, where the first person in line is the first to be served.

## Tree data structure

A tree data structure is a hierarchical data structure where elements are organized in a tree-like structure with a root node and child nodes. Each node in a tree can have zero or more child nodes, and each child node can have its own children.

Trees are commonly used to represent hierarchical relationships between data, such as file systems or organization charts. Trees can also be used for searching and sorting data, with the most common type of tree for this purpose being binary search trees.

## Binary Search Trees

A binary search tree is a type of tree data structure that has at most two child nodes for each node. It's called a "search tree" because it's optimized for fast searching and sorting. In a binary search tree, each node has a value, and the value of the left child is less than the parent node, while the value of the right child is greater. This property makes it easy to search for a specific value by recursively checking whether the value you're looking for is greater than or less than the current node.

Binary search trees are commonly used to implement other data structures like maps, sets, and priority queues. They are also used in many algorithms, such as finding the closest point to a given value or finding the median of a list of numbers.

When implementing a binary search tree in JavaScript, there are several operations you can perform, such as inserting a node, searching for a value, deleting a node, and traversing the tree in different orders.

## Breadth-first search

Breadth-first search is a graph traversal algorithm that visits all the nodes at the same level before moving to the next level. This algorithm starts at a given node, then visits all of its neighbors, then all the neighbors of those neighbors, and so on, until all nodes have been visited.

Breadth-first search is commonly used to find the shortest path between two nodes in a graph or to determine if a graph is connected. When implementing this algorithm in JavaScript, you typically use a queue to keep track of the nodes that need to be visited, and an array or a map to keep track of the nodes that have already been visited.

## Depth-first search

Depth-first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. This algorithm starts at a given node, then visits its first unvisited neighbor, then the first unvisited neighbor of that node, and so on, until it reaches a dead end. Then it backtracks to the most recent node with unvisited neighbors and continues exploring from there.

Depth-first search is commonly used to search for a path between two nodes in a graph or to explore all possible paths in a maze. When implementing this algorithm in JavaScript, you typically use a stack or recursion to keep track of the nodes that need to be visited, and an array or a map to keep track of the nodes that have already been visited.

## In-order, pre-order, and post-order tree traversal

These are different ways of visiting the nodes of a tree in a specific order.

### In-order traversal

In-order traversal visits the left subtree, then the root node, and finally the right subtree. For a binary search tree, the in-order traversal visits the nodes in ascending order. In other words, the left subtree is always visited before the root node, and the right subtree is always visited after the root node.

### Pre-order traversal

Pre-order traversal visits the root node first, then the left subtree, and finally the right subtree. This means that the root node is always the first node to be visited. Pre-order traversal is often used to create a copy of a tree, as the first node visited is the root node, which can be used to create a new tree with the same structure.

### Post-order traversal

Post-order traversal visits the left subtree, then the right subtree, and finally the root node. This means that the root node is always the last node to be visited. Post-order traversal is often used to delete a tree, as the nodes can be deleted in the reverse order in which they were visited.

All three methods of tree traversal can be implemented recursively or iteratively, depending on the specific needs of the algorithm.

## TDD practices

This refers to the practice of writing automated tests for your code before you write the code itself, to ensure that the code is functioning as expected.

### The TDD process typically involves the following steps:

#### Write a test

The first step in the TDD process is to write a test for the code that you want to implement. The test should be small and focused on a specific behavior of the code.

#### Run the test

Once the test is written, run it to ensure that it fails. This is an important step as it ensures that the test is actually testing what you want it to test.

#### Write the code

With the failing test in place, write the code that will make the test pass. The code should be focused on implementing the behavior that the test is testing.

#### Run the test again

Once the code is written, run the test again to ensure that it passes. If the test does not pass, go back to step 3 and make changes until it does.

#### Refactor the code

Once the test is passing, refactor the code to ensure that it is clean, efficient, and maintainable. Refactoring should not change the behavior of the code, only its structure.

#### Repeat the process

Repeat the process for each new feature or behavior that you want to implement.

By following the TDD process, you can ensure that your code is tested thoroughly and that it works correctly. TDD also encourages good coding practices, such as writing modular, testable code and focusing on small, specific behaviors. In addition, TDD can help catch bugs early in the development process, which can save time and money in the long run.