// LeetCode 872. Leaf-Similar Trees
// Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Constraints:
// Both of the given trees will have between 1 and 200 nodes.
// Both of the given trees will have values between 0 and 200

// using stacks
var leafSimilar = function(root1, root2) {
    let leaves1 = [];
    getLeaves(root1, leaves1);
    let leaves2 = [];
    getLeaves(root2, leaves2);
    
    if(leaves1.length != leaves2.length) {
        return false;
    }
    
    for(let i = 0; i < leaves1.length; i++) {
        if(leaves1[i] != leaves2[i]) {
            return false;
        }
    }
    
    return true;
    function getLeaves(root, leaves) {
        if(root != null) {
            if(root.left == null && root.right == null)
                leaves.push(root.val);
            getLeaves(root.left, leaves);
            getLeaves(root.right, leaves);
        }
    }
};


// using stacks
var leafSimilar = function (root1, root2) {
    let stack1 = [root1];
    let stack2 = [root2];
    let node1 = null;
    let node2 = null;

    while (stack1.length || stack2.length) {
        while (stack1.length) {
            node1 = stack1.pop();
            if (node1 != null) {
                if (node1.left == null && node1.right == null) {
                    break;
                }
                if (node1.right) stack.push(node1.right);
                if (node1.left) stack.push(node1.left);
            }
        }

        while (stack2.length) {
            node2 = stack2.pop();
            if (node2 != null) {
                if (node2.left == null && node2.right == null) {
                    break;
                }
                if (node2.right) stack.push(node2.right);
                if (node2.left) stack.push(node2.left);
            }
        }

        if (nod1.val != node2.val) {
            return false;
        }
    }

    return true;
};



// recursion
var leafSimilar = function(root1, root2) {
    return helper(root1)===helper(root2);
};


var helper=function(root){
    var op=[];
    inorder(root,op);
    return op.join(",");
}

var inorder=function(root,op){
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        op.push(root.val);
    }
    inorder(root.left,op);
    inorder(root.right,op);
}