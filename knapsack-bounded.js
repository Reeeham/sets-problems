const knapSack = (values, weights, n, target) => {
    //base case: when we cannot have take more items
    if(target < 0){
      return Number.MIN_SAFE_INTEGER;
    }
    
    //base case: when no items are left or capacity becomes 0
    if(n < 0 || target === 0){
      return 0;
    }
    
    // pick current item n in knapSack and recur for
    // remaining items (n - 1) with reduced capacity (weight - weights[n])
    let include = values[n] + knapSack(values, weights, n - 1, target - weights[n]);
  
    // leave the current item n from knapSack and recur for
    // remaining items (n - 1)
    let exclude = knapSack(values, weights, n - 1, target);
    
    // return maximum value we get by picking or leaving the current item
    return Math.max(include, exclude);
  }

//  Time complexity: O(2 ^ n).
// Space complexity: O(1).

/**      dynamic prog. Top-down approach (Recursive) */

const knapSackRec = (values, weights, n, target, lookup) => {
    // base case: when we cannot have take more items
    if (target < 0) {
      return Number.MIN_SAFE_INTEGER;
    }
  
    // base case: when no items are left or capacity becomes 0
    if (n < 0 || target == 0) {
      return 0;
    }
  
    // form a unique key from the inputs for memoization
    const key = `${n}|${target}`;
  
    // If the sub-problem is appearing for first time, solve it and
    // store its result in the map
    if (!lookup.has(key)){
  
      // pick current item n in knapSack and recur
      // for remaining items (n-1) with reduced capacity (target - weights[n])
      let include = values[n] + knapSackRec(values, weights, n - 1, target - weights[n], lookup);
  
      // leave current item n from knapSack and recur for
      // remaining items (n-1)
      let exclude = knapSackRec(values, weights, n - 1, target, lookup);
  
      // Assign max value we get by picking or leaving the current item
      lookup.set(key, Math.max(include, exclude));
    }
  
    // return the value
    return lookup.get(key);
  }

// Time complexity: O(values.length * target).
// Space complexity: O(values.length * target).



/************Bottom-up approach (Iterative) */
const knapSackIterative = (values, weights, target) => {
    // T[i][j] holds the max value of knapsack
    let T = new Array(values.length + 1);
    for(let i = 0; i < T.length; i++){
      T[i] = new Array(target+1).fill(0);
    }
  
    // for ith item
    for (let i = 1; i <= values.length; i++) {
      // choose all weights from 0 to maximum capacity W
      
      for (let j = 0; j <= target; j++) {
        // base case: don't pick ith element if j-weights[i-1] is negative
        if (weights[i-1] > j) {
          T[i][j] = T[i-1][j];
        } else {
          // store the max value that we get by picking or leaving the i'th item
          T[i][j] = Math.max(T[i-1][j], T[i-1][j-weights[i-1]] + values[i-1]);
        }
      }
    }
  
    // return maximum value
    return T[values.length][target];
  }
//   Time complexity: O(values.length * target).
//   Space complexity: O(values.length * target).
  
  
const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

console.log(knapSack(values, weights, target));