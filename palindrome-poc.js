const checkPalindrome = (number) => {
    let orgNum = number;
    let palNum = 0;
    let mode = 0;
    while (number > 0) {
        mode = number % 10;
        palNum = palNum * 10 + mode;
        number = parseInt(number / 10);
    }
    if (orgNum === palNum)
        return true;
    else
        return false
}

console.log(checkPalindrome(12321));
console.log(checkPalindrome(12333321));
console.log(checkPalindrome(12345678));