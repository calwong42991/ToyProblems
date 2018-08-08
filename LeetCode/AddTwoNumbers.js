/*
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example
  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.

  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
  
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}

*/

var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
      var newNode = Node(value);
      if (this.head === null) {
        this.head = newNode;
      }
      if (this.tail !== null) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
  };

  list.removeHead = function () {
      var prevHead = list.head;
      list.head = prevHead.next;
      return prevHead.value;
  };

  list.contains = function (target) {
      var searchTarget = function (node) {
          //base case if value = target return true;
          if (node.value === target) {
              return true;
          }
          //tail the end of the Linked List
          if (node.next === null) {
              return false;
          }
          //recurssive case 
          return searchTarget(node.next);
      }
      return searchTarget(list.head);
  };
  return list;
};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

var addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0);
};
// recursion
var add = function(l1, l2, c) {
  // get linkedlist value for l1, l2
  var l1Val = l1 && l1.val;
  var l2Val = l2 && l2.val;
  
  // return null if either has no value 
  if (l1Val === null && l2Val === null && !c) {
    return null;
  }
  
  // add the values and carry(remainder)
  var sum = l1Val + l2Val + c;
  
  // carry = 0 to start
  var carry = 0;
  // check to see if carry is needed
  if (Math.floor(sum / 10) === 1) {
    carry = 1;
    sum = sum - 10;
  }
  
  // create new node to add to next
  var result = new ListNode(sum);
  // add it to excisting node as node.next and check for next
  result.next = add(l1 && l1.next, l2 && l2.next, carry);
  return result;
}

console.log(addTwoNumbers(list1.head, list2.head));