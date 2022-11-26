// const lcs = (str1, str2, len1, len2) => {
//     if(len1 === str1.length
//     || len2 === str2.length) {
//         return 0;
//     }

//     if(str1[len1] === str2[len2]) {
//         return 1 + lcs(str1, str2, len1 + 1, len2 + 2) 
//     } else {
//         return Math.max(lcs(str1, str2, len1 + 1, len2), lcs(str1, str2, len1, len2 + 1))
//     }

// }


 const lcsDynamic = (x, y) => {
    let m = x.length
    let n = y.length;
    let dp = {}

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
    }
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {

            if (i == 0 || j == 0) {
                dp[i][j] = 0;
            }
            else if (x[i - 1] == y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[x.length][y.length];
}
const findLCS = (str1, str2) => {

    let len1 = str1.length;
    let len2 = str2.length;
    let dp = {};
    for (let i = 0; i <= len1; i++) {
        dp[i] = [];
    }
    for(let i = 0; i <= len1; i++) {
        for(let j = 0; j <= len2; j++) {
            if( i == 0 || j == 0)
               dp[i][j] = '';
            else if(str1[i-1] === str2[j-1])
               dp[i][j] = dp[i-1][j-1] + str1[i-1];
            else dp[i][j] = dp[i][j-1].length > dp[i-1][j].length ? dp[i][j-1] : dp[i-1][j];
        }
    }
    return dp[len1][len2];
}
module.exports = {
    lcs: lcsDynamic,
    findLCS: findLCS
}

//console.log(lcsDynamic('ABCDGH', 'AEDFHR')) //ADH LENGTH =  3
console.log(findLCS('ABCDGH', 'AEDFHR')) //ADH LENGTH =  3

//Time complexity O(n^2)