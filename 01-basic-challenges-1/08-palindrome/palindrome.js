function isPalindrome(inp) {
    let str = "" + inp;
    let i = 0;
    let j = str.length - 1;
    while (i <= i) {
        if (str[i] === str[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
        return true;
    }

}

// console.log(isPalindrome(13231));

module.exports = isPalindrome;
