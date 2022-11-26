const combinationSum = (candidates, target) => {
    const result = [];
    candidates.sort((a,b) => a-b);
    
    //dfs recursive helper
    const dfs = (i, candidates, target, slate) => {
        //backtracking case
        if(target < 0) return;
        //base case 
        if(target == 0) {
            result.push(slate.slice());
            return;
        }
        //dfs recursive case
        for(let j = i; j < candidates.length; j++) {
            slate.push(candidates[j]);
            dfs(j, candidates, target - candidates[j], slate);
            slate.pop();
        }
    }
    dfs(0, candidates, target, []);
    return result;
}


console.log(combinationSum([2,3,5],8)) //[[2,2,2,2],[2,3,3],[3,5]] 
console.log(combinationSum([2],1)) // [] 
console.log(combinationSum([2,3,6,7],7)) //[[2,2,3],[7]]