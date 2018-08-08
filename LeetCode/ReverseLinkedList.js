/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
/*
  Input: 1->2->3->4->5->NULL, m = 2, n = 4
  Output: 1->4->3->2->5->NULL
*/
var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

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
/*
var reverseBetween = function(head, m, n) {
  var arr = [];
  
  let grabNode = function(node){
    
    if(node.next === null){
      arr.push(node.value)
      return node.value;
    }

    arr.push(node.value);
    return grabNode(node.next);

  }
  grabNode(head.head);
  var reverseValue = arr.splice(m,n).reverse();
  reverseValue.forEach((a, i) => {
    return arr.splice(i+1, 0, a);
  })

  let newLL = new LinkedList();
  arr.forEach((a) => {
    return newLL.addToTail(a);
  })
  return newLL.head 
};
console.log(reverseBetween(LL, 1,3));
*/

// Solution 1 48ms
var reverseBetween1 = function(head, m, n) {
  let arr=[];
  
  while(head.next){
      arr.push(head.value);
      head=head.next;
  }
  
  arr.push(head.value);
  
  let reversePart=arr.slice(m-1,n).reverse();

  let headPart=arr.slice(0,m-1);

  let endPart=arr.slice(n);
  
  let res=[...headPart,...reversePart,...endPart]
  
  return res;
};

// solution 2 52ms
var reverseBetween2 = function(head, m, n) {
  let beforeRev = null;
  let afterRev = null;
  let headOfRev = null;
  let tailOfRev = null;
  
  let p1 = head;
  let p2 = null;
  let p3 = null;
  
  while (m > 1) {
      if (m === 2) beforeRev = p1;
      p1 = p1.next;
      m--;
      n--;
  }
  
  tailOfRev = p1;
  p2 = p1.next;
  if (p2) p3 = p2.next;
  
  while (n > 1) {
      p2.next = p1;
      p1 = p2;
      p2 = p3;
      if (p3) p3 = p3.next;
      n--;
  }
  
  headOfRev = p1;
  afterRev = p2;
  
  if (beforeRev) {
      beforeRev.next = headOfRev;
  } else {   
      head = headOfRev;
  }
  
  tailOfRev.next = afterRev;
  
  return head;
};


let LL = new LinkedList();
LL.addToTail(1);
LL.addToTail(2);
LL.addToTail(3);
LL.addToTail(4);
LL.addToTail(5);

console.log(reverseBetween1(LL.head, 2, 4))
console.log(reverseBetween2(LL.head, 2, 4))