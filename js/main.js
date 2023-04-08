function getRandom(from, to) {
  if (from > to) {
    return -1;
  }

  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function checkMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

getRandom(15, 25);

checkMaxLength('Hello world!', 255);


