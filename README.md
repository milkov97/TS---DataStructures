# Implementation of the common Data Structures using TypeScript

## 1.Linked List
#### A linked list is a linear data structure, where each element (node) contains a data field and references the next node in the list. The elements aren't stored at contiguous memory cells.
#### The common operations in linked list are - push (Add element at the end of the linked list), pop (Remove the last element of the linked list), shift (Remove the first element of the linked list), unshift (Add element at the begining of the linked list), get (Return the node at the given index), set (Change the value of the node at the given index), insert(Insert a new node at the given index), remove (Remove element at the given index), reverse (Reverse the linked list).
#### The time Complexity of these operations are :point_down: :point_down: :point_down:
#### :arrow_heading_down: push() - O1 (If the linked list haven't tail node, the complexity will be On, because we need to go through each element in the list until we find the last one :detective:)
#### :boom: pop() - On (We need to iterate over the whole linked list and set the element before tail to be the new tail ov the list)
#### :arrow_right_hook: shift() - O1 - (We set the new element as the head of the linked list)
#### :leftwards_arrow_with_hook: unshift() - O1 (We set the head.next node as the new head of the linked list)
#### :pinching_hand: get() - On (We need to iterate over the elements of the list until we find this one wich we are looking for)
#### :hammer_and_wrench: set() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and then change its value)
#### :comet: insert() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and insert the new element after it.)
#### :dash: remove() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and delete it)
#### :repeat: reverse() - On 

## 2. Dobly Linked List
#### A doubly linked list is a linear data structure, where each element (node) contains a data field and references the next and the previous node in the list. The elements aren't stored at contiguous memory cells.
#### The common operations in linked list are - push (Add element at the end of the linked list), pop (Remove the last element of the linked list), shift (Remove the first element of the linked list), unshift (Add element at the begining of the linked list), get (Return the node at the given index), set (Change the value of the node at the given index), insert(Insert a new node at the given index), remove (Remove element at the given index)
#### The time Complexity of these operations are :point_down: :point_down: :point_down:
#### :arrow_heading_down: push() - O1 (We set the new element to be the next of the tail node)
#### :boom: pop() - O1 (We set the last element to be the previous of the tail node)
#### :arrow_right_hook: shift() - O1 - (We set the new element as the head of the linked list)
#### :leftwards_arrow_with_hook: unshift() - O1 (We set the head.next node as the new head of the linked list)
#### :pinching_hand: get() - On (We need to iterate over the elements of the list until we find this one wich we are looking for)
#### :hammer_and_wrench: set() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and then change its value)
#### :comet: insert() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and insert the new element after it.)
#### :dash: remove() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and delete it)


### 3. Queue
#### A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, meaning the first element added to the queue is the first one to be removed. It can be thought of as a real-life queue or line, where the person who arrives first is served first. Queues are commonly used in various computer science applications, such as task scheduling and data buffering.
#### The common operations in a queue are - enqueue (Add an element to the back of the queue), dequeue (Remove the element from the front of the queue), peek (View the element at the front without removing it), isEmpty (Check if the queue is empty), size (Get the number of elements in the queue).
#### The time complexity of these operations are :point_down: :point_down: :point_down:
#### :arrow_heading_up: enqueue() - O1 (Adding an element to the back of the queue is an efficient O(1) operation)
#### :boom: dequeue() - O1 (Removing an element from the front of the queue is also an O(1) operation)
#### :eyes: peek() - O1 (Viewing the element at the front is a quick O(1) operation)
#### :hourglass_flowing_sand: isEmpty() - O1 (Checking if the queue is empty can be done in O(1) time)
#### :1234: size() - O1 (Getting the number of elements in the queue is an O(1) operation)

### 4. Stack
#### A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning the last element added to the stack is the first one to be removed. Think of it as a stack of plates where you can only add or remove plates from the top. Stacks are widely used in programming for functions calls, expression evaluation, and undo operations.
#### The common operations in a stack are - push (Add an element to the top of the stack), pop (Remove the element from the top of the stack), peek (View the element at the top without removing it), isEmpty (Check if the stack is empty), size (Get the number of elements in the stack).
#### The time complexity of these operations are :point_down: :point_down: :point_down:
#### :arrow_heading_up: push() - O1 (Adding an element to the top of the stack is an efficient O(1) operation)
#### :boom: pop() - O1 (Removing an element from the top of the stack is also an O(1) operation)
#### :eyes: peek() - O1 (Viewing the element at the top is a quick O(1) operation)
#### :hourglass_flowing_sand: isEmpty() - O1 (Checking if the stack is empty can be done in O(1) time)
#### :1234: size() - O1 (Getting the number of elements in the stack is an O(1) operation)

