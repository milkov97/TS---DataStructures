# Implementation of the common Data Structures using TypeScript

## 1.Linked List
#### A linked list is a linear data structure, where each element (node) contains a data field and references the next node in the list. The elements aren't stored at contiguous memory cells.
#### The common operations in linked list are - push (Add element at the end of the linked list), pop (Remove the last element of the linked list), shift (Remove the first element of the linked list), unshift (Add element at the begining of the linked list), get (Return the node at the given index), set (Change the value of the node at the given index), insert(Insert a new node at the given index), remove (Remove element at the given index), reverse (Reverse the linked list).
#### The Big O complexity of these operations are :point_down: :point_down: :point_down:
#### :arrow_heading_down: push() - O1 (If the linked list haven't tail node, the complexity will be On, because we need to go through each element in the list until we find the last one :detective:)
#### :boom: pop() - On (We need to iterate over the whole linked list and set the element before tail to be the new tail ov the list)
#### :arrow_right_hook: shift() - O1 - (We set the new element as the head of the linked list)
#### :leftwards_arrow_with_hook: unshift() - O1 (We set the head.next node as the new head of the linked list)
#### :pinching_hand: get() - On (We need to iterate over the elements of the list until we find this one wich we are looking for)
#### :hammer_and_wrench: set() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and then change its value)
#### :comet: insert() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and insert the new element after it.)
#### :dash: remove() - On (We need to iterate over the elements of the list until we find this one wich we are looking for and delete it)
#### :repeat: reverse() - On 
