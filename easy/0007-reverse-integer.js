var reverse = function(x) {
    let str = Math.abs(x).toString().split('').reverse().join('');
    let reverse = Number(x < 0 ? '-' + str : str);

    return reverse > 2 ** 31 || reverse < -(2 ** 31) ? 0 : reverse;
}