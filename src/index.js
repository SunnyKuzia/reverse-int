module.exports = function reverse(n) {
    let str = "";

    if (n < 0) {
        str = n.toString().slice(1);
    } else {
        str = n.toString();
    }

    let arr = str.split("").reverse();
    return parseInt((arr.join("")));
}
