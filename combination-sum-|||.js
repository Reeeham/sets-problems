const combinationSum3 = (k, n) => {
    //global result 
    const result = [];

    const nums = [];

    for(let i = 0; i < n; i++) nums.push(i+1);
    //dfs recursive helper
    const dfs = (i, nums, k, n, slate) => {
        //backtracking case
        if(n < 0) return;

        //base case
        if(slate.length === k) {
            if(n === 0) {
                result.push(slate.slice());
            }
        }

        //dfs recursive case
        for(let j = i; j < nums.length; j++) {
            slate.push(nums[j]);
            dfs(j + 1, nums, k, n - nums[j], slate);
            slate.pop();
        }
    }

    dfs(0, nums, k, n, []);
    return result;
}

console.log(combinationSum3(3, 9));