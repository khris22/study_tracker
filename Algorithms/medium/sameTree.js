// LeetCode 100. Same Tree
// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false

// Recursion
var isSameTree = function(p, q) {
    // check if the 2 nodes are not null
      if (!p && !q) {
          return true;
      }
      // check if either the nodes are not null
      // check if the values of the two nodes are equal, if not return false
      if (!p || !q || p.val !== q.val) {
          return false;
      }
      console.log(p, q)
      // check the children of the nodes and its siblings
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  
//   console.log(isSameTree([1,null,3],   [1,2,3]))
  
  
  var isSameTree = function(p, q) {
      const stack1 = [], stack2 = [];
      while (p || q || stack1.length || stack2.length) {
          while (p) {
              stack1.push(p);
              p = p.left
          }
          while (q) {
              stack2.push(q);
              q = q.left;
          }
          p = stack1.pop();
          q = stack2.pop();
          if (!p && !q) {
              continue;
          }
          if (!p || !q || p.val !== q.val) {
              return false;
          }
          stack1.push(null);
          stack2.push(null);
          p = p.right;
          q = q.right;
      }
      return true;
  };
  

// Queue data structure in javascript. A Queue works on the FIFO(First in First Out) principle. Hence, it performs two basic operations that is addition of elements at the end of the queue and removal of elements from the front of the queue. Like Stack, Queue is also a linear data structure.
