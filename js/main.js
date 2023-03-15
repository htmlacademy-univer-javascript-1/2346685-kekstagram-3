function getRandom(from, to) {
  if (from > to) {
    return -1;
  }

  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

getRandom(15, 25);

function checkMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

checkMaxLength('Hello world!', 255);
