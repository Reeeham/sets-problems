/***********************DFS solution************************/

var subsets = function(nums, depth = 0, subset = [], results = []) {
    if(depth == nums.lenght) {
        results.push(subset);
    }else {
        subsets(nums,depth + 1, subset, results); //not including the current element (No)
        subsets(nums, depth + 1, [...subset, nums[depth]], results); // when i include the current element (yes)
    }
    return results; 
}


//input [1,2,3]
//output [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]

//input nums = [0]
//output [[], [0]]

//time complexity: O(2*2^n -1 + n* 2 ^ n) O(N*2^N)
//space complexity: O(N*2^N)


/***********************Recursive Backtracking solution************************/
var subsetsRecBT = function(nums, depth = 0, subset = [], results = []) {
    if(depth === nums.length) {
        results.push([...subset]);
    } else {
        subsetsRecBT(nums, depth + 1, subset, results);
        subset.push(nums[depth])
        subsetsRecBT(nums, depth + 1, subset, results);
        subset.pop();
    }
    return results;
}

// time and space complexity is the same as DFS solution


/****************************BINARY SOLUTION***********************/
const subsetsBinary = (nums) =>{

    const  subsetCount = Math.pow(2, nums.length);
    const  results = [];
    for(let i = 0; i < subsetCount; i++) {
        const binaryString = i.toString(2).padStart(nums.length, "0") //to binary
        const subset = [];
        for(let j = 0; binaryString.length; j++) {
            if(binaryString[j] === "1") {
                subset.push(nums[j]);
            }
        }
        results.push(subset);
    }
    return results;
}

// time complexity - O(N*2^N)
// space complexity - O(N*2^N)