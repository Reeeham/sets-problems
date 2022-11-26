const combinationSum2 = (candidates, target) => {
    //global result 
    const result = [];

    //sort input
    candidates.sort((a,b) => a-b); //ascending order

    //dfs recursive helper
    const dfs = (i, candidates, target, slate) => {
        // backtracking case
        if(target < 0) return; //don't do anything and end this call

        // base case to stop on it and do something
        if(target === 0) {
            result.push(slate.slice());
            return; // should call return nothing to end the call from the stack,
            // because we don't need to return anything here just pushing the current slate to our result array 
        }

            //dfs recursive case
            // when the base case ( our target is not 0 yet ) repeat this
            for(let j = i; j < candidates.length; j++) {
                if(i !== j && candidates[j] === candidates [j - 1]) continue;
                slate.push(candidates[j]);
                dfs(j + 1, candidates, target - candidates[j], slate);
                slate.pop();
            } 
    }

    dfs(0, candidates, target, []);
    return result;
}


//Time Complexity O(2^n * n)
//Space Complexity O(2^n * n)

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
 //[
// [1, 1, 6],
// [1, 2, 5],
// [1, 7],
// [2, 6]
//]
