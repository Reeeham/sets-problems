const maximumSubArrayBruteForce1 = (arr, n) => {

    let ans = Number.MIN_VALUE, sum = 0;
    for (let subArraySize = 0; subArraySize <= n; subArraySize++) {

        for (let startIndex = 0; startIndex < n; startIndex++) {
            if(startIndex + subArraySize > n) 
                break;
            sum = 0; // reset sum 
            for (let i = startIndex; i < (startIndex + subArraySize); i++) {
                sum += arr[i];                
            }
            ans = Math.max(ans, sum);
        }

    }

    return ans;
}

const maximumSubArrayBruteForce2 = (arr, n) => {

    let ans = Number.MIN_VALUE;
    for(let startIndex = 1; startIndex < n; ++startIndex) {

        let sum = 0;
        for(let subArraySize = 0; subArraySize <= n; ++subArraySize){ 
            if(startIndex + subArraySize > n) //subarray exceeds array bounds
               break;
            sum += arr[startIndex+subArraySize - 1];//last element of the new subarray
            ans = Math.max(ans, sum);
        }
    }
    return ans;
}
//O(n^2)
const maximumSubArrayDivideAndConquer = (arr, n) => {

    if(n==1) return arr[0];
    let m = n/2;
    let leftMSS = maximumSubArrayDivideAndConquer(arr, m);
    let rightMSS = maximumSubArrayDivideAndConquer(arr, n-m);
    let leftSum =  Number.MIN_VALUE, rightSum =  Number.MIN_VALUE, sum = 0;
    for(let i = m; i < n; i++) {
        sum += arr[i];
        rightSum = Math.max(rightSum, sum);
    }
    sum = 0;
    for(let i = (m-1); i >= 0; i--) {
        sum += arr[i];
        leftSum = Math.max(leftSum, sum);
    }

    let ans = Math.max(leftMSS,rightMSS);
    return Math.max(ans, rightSum + leftSum);
}
//[3,-2, 5,-1]
//[3,-2] [5,-1]   5+3
//[3] [3,-2] 3 or 1
//[5] or [5,-1] 5 or 4
//O(nlogn) like merge sort

const maximumSubArrayKande = (arr, n) => {

  let ans = 0, sum = 0;
  for(let i = 0; i < n; ++i) {
    if(sum + arr[i] > 0) 
      sum += arr[i];
    else
      sum = 0;
    ans  = Math.max(ans, sum);
  }
  return ans;
}

console.log(maximumSubArrayBruteForce1([3, -2, 5, -1],4))