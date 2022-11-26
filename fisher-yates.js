const fisherYates = (arr) => {
    let i = arr.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i]; 
        arr[i] = temp;
    }
    return arr;
}

console.log(['A', 'B', 'C','D','E','F','G','H'])