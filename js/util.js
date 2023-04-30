export function getRandom(from, to) {
  if (from > to) {
    return -1;
  }

  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export function clamp(number, min, max) {
  return Math.max(Math.min(number, max), min);
}

export function checkMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

export const isEscapeKey = (ev) => ev.key === 'Escape';
