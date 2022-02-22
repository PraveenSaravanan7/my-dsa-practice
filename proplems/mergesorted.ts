// JavaScript program to merge k sorted
// arrays of size n each
class Node {
  data: number;
  next: Node | null;
  constructor(data?: number, next?: Node | null) {
    this.data = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

/*
	Takes two lists sorted in increasing order,
	and merge their nodes together to
	make one big sorted list.
	Below function takes O(Log n) extra space for
	* recursive calls, but it can be easily modified
	to work with same time and
	* O(1) extra space
	*/
export function SortedMerge(a: Node | null, b: Node | null) {
  var result = null;
  /* Base cases */
  if (a == null) return b;
  else if (b == null) return a;

  /* Pick either a or b, and recur */
  if (a.data <= b.data) {
    result = a;
    result.next = SortedMerge(a.next, b);
  } else {
    result = b;
    result.next = SortedMerge(a, b.next);
  }

  return result;
}

// The main function that takes an array of lists
// arr[0..last] and generates the sorted output
function mergeKLists(arr: Array<Node | null>, last: number) {
  // repeat until only one list is left
  while (last != 0) {
    var i = 0,
      j = last;

    // (i, j) forms a pair
    while (i < j) {
      // merge List i with List j and store
      // merged list in List i
      if (arr[i]) arr[i] = SortedMerge(arr[i], arr[j]);

      // consider next pair
      i++;
      j--;

      // If all pairs are merged, update last
      if (i >= j) last = j;
    }
  }

  return arr[0];
}

var k = 3; // Number of linked lists
var n = 4; // Number of elements in each list

// an array of pointers storing the head nodes
// of the linked lists
var arr = Array(k);

arr[0] = new Node(1);
arr[0].next = new Node(3);
arr[0].next.next = new Node(5);
arr[0].next.next.next = new Node(7999);

arr[1] = new Node(2);
arr[1].next = new Node(4);
arr[1].next.next = new Node(6);
arr[1].next.next.next = new Node(8);
arr[1].next.next.next.next = new Node(8);
arr[1].next.next.next.next.next = new Node(8);

arr[2] = new Node(0);
arr[2].next = new Node(9);
arr[2].next.next = new Node(10);
arr[2].next.next.next = new Node(11);

// Merge all lists
//var head = mergeKLists(arr, k - 1);

function mergeTwoSorted(a: Node | null, b: Node | null): Node | null {
  var result = null;
  /* Base cases */
  if (a == null) return b;
  else if (b == null) return a;

  /* Pick either a or b, and recur */
  if (a.data <= b.data) {
    result = a;
    result.next = mergeTwoSorted(a.next, b);
  } else {
    result = b;
    result.next = mergeTwoSorted(a, b.next);
  }

  return result;
}

function mergeTwoIteration(a: Node | null, b: Node | null): Node | null {
  /* Base cases */
  if (a == null) return b;
  else if (b == null) return a;

  const result: Node = new Node(0);
  let tail: Node | null = result;

  while (tail && a && b) {
    if (a.data < b.data) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
  }

  if (a) tail.next = a;
  if (b) tail.next = b;

  return result.next;
}

function printList(node: Node | null) {
  if (!node) return;
  let copy: Node | null = { ...node };
  while (copy != null) {
    console.log(copy.data + " ");
    copy = copy.next;
  }
}

// printList(arr[0]);
// printList(arr[1]);

//console.log(JSON.stringify(arr));

//console.log(JSON.stringify(mergeTwoSorted(arr[0], arr[1])));
//printList(mergeTwoSorted(arr[0], arr[1]));
printList(mergeTwoIteration(arr[0], arr[1]));
//printList(mergeTwoSortedIter(arr[0], arr[1]));
//console.log(JSON.stringify(head));

// This code contributed by gauravrajput1
