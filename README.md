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

 --------

### Linked List

Linked Lists come in multiple variants. The following overview of big O notation for linked lists is not exhaustive, but rather a summary of the most common operations and their time complexity.

#### Singly Linked List:

A singly linked list is a type of linked list where each node has a reference to only the next node in the sequence. Singly linked lists have the following time and space complexities:

Search: O(n)
In the worst case, searching a singly linked list requires iterating through each node until the desired node is found. This takes O(n) time.

Insertion at the Head: O(1)
Inserting a node at the head of a singly linked list only requires creating a new node and setting its next pointer to the current head. This takes constant time, O(1).

Insertion at the Tail: O(n)
Inserting a node at the tail of a singly linked list requires iterating through the entire list to find the last node, then setting its next pointer to the new node. This takes O(n) time.

Deletion at the Head: O(1)
Deleting a node at the head of a singly linked list only requires setting the head pointer to the second node in the list. This takes constant time, O(1).

Deletion at the Tail: O(n)
Deleting a node at the tail of a singly linked list requires iterating through the entire list to find the second to last node, then setting its next pointer to null. This takes O(n) time.

Space: O(n)
A singly linked list requires storing a reference to each node in the list, so its space complexity is O(n).

#### Doubly Linked List:

A doubly linked list is a type of linked list where each node has a reference to both the next and the previous node in the sequence. Doubly linked lists have the following time and space complexities:

Search: O(n)
In the worst case, searching a doubly linked list requires iterating through each node until the desired node is found. This takes O(n) time.

Insertion at the Head: O(1)
Inserting a node at the head of a doubly linked list only requires creating a new node and setting its next pointer to the current head and its previous pointer to null. This takes constant time, O(1).

Insertion at the Tail: O(1)
Inserting a node at the tail of a doubly linked list only requires creating a new node and setting its previous pointer to the current tail and its next pointer to null. This takes constant time, O(1).

Deletion at the Head: O(1)
Deleting a node at the head of a doubly linked list only requires setting the head pointer to the second node in the list and setting the new head's previous pointer to null. This takes constant time, O(1).

Deletion at the Tail: O(1)
Deleting a node at the tail of a doubly linked list only requires setting the tail pointer to the second to last node in the list and setting the new tail's next pointer to null. This takes constant time, O(1).

Space: O(n)
A doubly linked list requires storing a reference to each node in the list, so its space complexity is O(n).