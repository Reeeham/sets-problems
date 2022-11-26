var lcsModule = require('./longest-common-subsequence');

const shortestCommonSuperSequence = (str1, str2) => {

    let ans = '';
    let lcs = lcsModule.findLCS(str1, str2);
    console.log(lcs);
    let p1 = 0, p2 = 0;
    Array.from(lcs).forEach(char => {
        while(str1[p1] != char)  {
            ans += str1[p1++];//add it to ans then increment the p1 counter

        }
        while(str2[p2] != char) {
            ans += str2[p2++];//add it to ans then increment the p2 counter
        }

        ans += char; //add lcs char and increment both ptrs

        ++p1;
        ++p2;
      });

    ans += str1.substr(p1) + str2.substr(p2);
    return ans;
}

console.log(shortestCommonSuperSequence('abac', 'cab')) //cabac