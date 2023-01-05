module.exports = function reverse(n) {
    let result;
    if (n % 10 === 0) {
        n /= 10
    };
    let digits = String(n);
    if (n < 0) {
        digits = digits.split('-')
        digits[1] = digits[1].split('').reverse().join('')
        result = digits.join('')
    } else {
        digits = digits.split('').reverse();
        result = digits.join('')
    }
    return result
}
