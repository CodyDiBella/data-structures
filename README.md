# Data Structures in JavaScript

This project contains implementations of several common data structures in JavaScript:

- Linked List
- Stack
- Queue
- Binary Search Tree

## Big O notation

### Stack

| Operation | Average Case | Worst Case |
| --- | --- | --- |
| Push | O(1) | O(1) |
| Pop | O(1) | O(1) |
| Peek | O(1) | O(1) |
| Search | O(n) | O(n) |### Queue

### Queue

| Operation | Average Case | Worst Case |
| --- | --- | --- |
| Enqueue | O(1) | O(1) |
| Dequeue | O(1) | O(1) |
| Peek | O(1) | O(1) |
| Search | O(n) | O(n) |### Binary Search Tree

### Binary Search Tree

| Operation | Average Case | Worst Case |
| --- | --- | --- |
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |
| Traversal | O(n) | O(n) |

---

## Binary Search Tree in more detail

A Binary Search Tree is a data structure that has some special properties. First, it is a tree, which means it has nodes connected by edges, but it is a special kind of tree where each node has at most two children (hence the "binary" part of the name).

The key property of a BST is that for each node in the tree, all the nodes in its left subtree have values less than the value in that node, and all the nodes in its right subtree have values greater than the value in that node. This property makes it very easy and efficient to search for a particular value in the tree.

Another advantage of a BST is that it allows for quick insertion and deletion of nodes while maintaining the property that each node in the left subtree has a smaller value and each node in the right subtree has a larger value.

## Linked Lists in more detail

So, Linked Lists are a really important data structure in computer science. There are a few different types of Linked Lists, and each has its own time and space complexities for common operations.

### Singly Linked List:

This type of Linked List only has a reference to the next node in the sequence. Here are the common operations and their time and space complexities:

Search: O(n). In the worst case, you'll have to go through each node until you find the one you're looking for.

Insertion at the Head: O(1). This is pretty fast - you just create a new node and set its next pointer to the current head.

Insertion at the Tail: O(n). This one takes a bit longer, because you have to go through the entire list to find the last node and set its next pointer to the new node.

Deletion at the Head: O(1). This is also pretty fast - you just set the head pointer to the second node in the list.

Deletion at the Tail: O(n). This takes a bit longer, because you have to go through the entire list to find the second to last node and set its next pointer to null.

As for space complexity, Singly Linked Lists need to store a reference to each node, so their space complexity is O(n).

### Doubly Linked List:

These have references to both the next and previous nodes in the sequence. Here are the common operations and their time and space complexities:

Search: O(n). Same as with Singly Linked Lists.

Insertion at the Head: O(1). This is just like with Singly Linked Lists.

Insertion at the Tail: O(1). This is different from Singly Linked Lists, because you can just set the new node's previous pointer to the current tail and its next pointer to null.

Deletion at the Head: O(1). This is just like with Singly Linked Lists.

Deletion at the Tail: O(1). This is also different from Singly Linked Lists, because you can just set the new tail's next pointer to null.

As for space complexity, Doubly Linked Lists also need to store a reference to each node, so their space complexity is O(n).

That's the basic idea! Of course, there are other variations of Linked Lists out there, but this should give you a good understanding of how Singly Linked Lists and Doubly Linked Lists work.
