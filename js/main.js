function getRandom(from, to) {
    if (from > to) {
        return -1;
    }

    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

console.log(getRandom(0, 1));
console.log(getRandom(15, 20));
console.log(getRandom(15, 15));
console.log(getRandom(24, 1));
console.log(getRandom(0, 0));

function checkMaxLength(string, max_length) {
    return string.length <= max_length;
}