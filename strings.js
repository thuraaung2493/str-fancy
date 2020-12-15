require("./polyfill");
const path = require("path");
const anyAscii = require("any-ascii");
const pluralize = require("pluralize");

/**
 * Return the remainder of a string after the first occurrence of a given value.
 *
 * @param {String} subject
 * @param {String} search
 * @returns {String}
 */
function after(subject, search) {
  if (subject === "") return subject;

  const index = subject.indexOf(search);

  return index === -1 ? subject : subject.slice(index + search.length);
}

/**
 * Return the remainder of a string after the last occurrence of a given value.
 *
 * @param {String} subject
 * @param {String} search
 * @returns {String}
 */
function afterLast(subject, search) {
  return subject === "" ? subject : subject.split(search).pop();
}

/**
 * Append the given values to the string.
 *
 * @param {String} value
 * @param {String[]} values
 * @returns {String}
 */
function append(value, ...values) {
  return value.concat(...values);
}

/**
 * Get the trailing name component of the path.
 *
 * @param {String} value
 * @param {String} [suffix = ""]
 * @returns {String}
 */
function basename(value, suffix = "") {
  return path.basename(value, suffix);
}

/**
 * Transliterate a Unicode string to ASCII.
 *
 * @param {String} value
 * @returns {String}
 */
function ascii(value) {
  return anyAscii(value);
}

/**
 * Get the portion of a string before the first occurrence of a given value.
 *
 * @param {String} subject
 * @param {String} search
 * @returns {String}
 */
function before(subject, search) {
  if (search === "") return subject;

  if (subject.search(search) === -1) return subject;

  return subject.split(search).shift();
}

/**
 * Get the portion of a string before the last occurrence of a given value.
 *
 * @param {String} subject
 * @param {String} search
 * @returns {String}
 */
function beforeLast(subject, search) {
  if (search === "") return subject;

  const index = subject.lastIndexOf(search);

  return index === -1 ? subject : subject.slice(0, index);
}

/**
 * Get the portion of a string between two given values.
 *
 * @param {String} subject
 * @param {String} from
 * @param {String} to
 * @returns {String}
 */
function between(subject, from, to) {
  if (from === "" || to === "") return subject;

  return beforeLast(after(subject, from), to);
}

/**
 * Convert a value to camel case.
 *
 * @param {String} value
 * @returns {String} fooBar
 */
function camel(value) {
  return lcfirst(studly(value));
}

/**
 * Determine if a given string contains a given substring.
 *
 * @param {String} haystack
 * @param {String|String[]} needles
 * @returns {Boolean}
 */
function contains(haystack, needles) {
  for (let needle of arrayWrap(needles)) {
    if (needle !== "" && haystack.includes(needle)) return true;
  }
  return false;
}

/**
 * Determine if a given string contains all array values.
 *
 * @param {String} haystack
 * @param {String[]} needles
 * @returns {Boolean}
 */
function containsAll(haystack, needles) {
  for (let needle of needles) {
    if (!contains(haystack, needle)) return false;
  }
  return true;
}

/**
 * Get the parent directory's path.
 *
 * @param {String} value
 * @param {Number} [level = 1]
 * @returns {String}
 */
function dirname(value, level = 1) {
  const arr = value.split(path.sep);

  return arr.slice(0, arr.length - level).join(path.sep);
}

/**
 * Determine if a given string ends with a given substring.
 *
 * @param {String} haystack
 * @param {String|String[]} needles
 * @param {Number} [length]
 * @returns {Boolean}
 */
function endsWith(haystack, needles, length) {
  for (let needle of arrayWrap(needles)) {
    if (haystack.endsWith(needle, length)) return true;
  }
  return false;
}

/**
 * Cap a string with a single instance of a given value.
 *
 * @param {String} value
 * @param {String} cap
 * @returns {String}
 */
function finish(value, cap) {
  const re = new RegExp(`(?:${cap})+$`, "u");

  return value.replace(re, "") + cap;
}

/**
 * Determine if a given string matches a given pattern.
 *
 * @param {String} value
 * @param {String|[]} pattern
 * @returns {Boolean}
 */
function is(pattern, value) {
  const patterns = Array(pattern);

  if (patterns.length === 0) return false;

  for (let pattern of patterns) {
    if (pattern == value) return true;

    pattern = pattern.replace(/[*]/, ".*");

    const re = new RegExp(`^${pattern}`, "u");

    if (re.test(value)) return true;
  }

  return false;
}

/**
 * Determine if a given string is 7 bit ASCII.
 *
 * @param {String} value
 * @returns {Boolean}
 */
function isAscii(value) {
  return !/[^\x09\x10\x13\x0A\x0D\x20-\x7E]/.test(value);
}

/**
 * Convert a value to kebab case.
 *
 * @param {String} value
 * @param {String} [delimiter = "_"]
 * @returns {String} foo_bar
 */
function kebab(value, delimiter = "_") {
  return value
    .replace(/\s/g, "")
    .replace(/(.)(?=[A-Z])/, function (_, p1) {
      return p1 + delimiter;
    })
    .toLowerCase();
}

/**
 * Limit the number of characters in a string.
 *
 * @param {String} value
 * @param {Number} [limit = 100]
 * @param {String} [end = "..."]
 * @returns {String}
 */
function limit(value, limit = 100, end = "...") {
  if (value.length <= limit) return value;

  return value.slice(0, limit).trimEnd() + end;
}

/**
 * Convert the given string to lower-case.
 *
 * @param {String} value
 * @returns {String}
 */
function lower(value) {
  return value.toLowerCase();
}

/**
 * Left trim the string of the given characters.
 *
 * @param {String} value
 * @param {String} [characters = " "]
 * @returns {String}
 */
function ltrim(value, characters = " ") {
  const re = new RegExp(`^${characters}+`);
  return value.replace(re, "");
}

/**
 * Get the string matching the given pattern.
 *
 * @param {String} value
 * @param {RegExp} pattern
 * @returns {String}
 */
function match(value, pattern) {
  const matches = value.match(pattern);

  return !matches ? "" : matches[1] || matches[0];
}

/**
 * Get the string matching the given pattern.
 *
 * @param {String} value
 * @param {RegExp} pattern
 * @returns {String}
 */
function matchAll(value, pattern) {
  const regex = new RegExp(pattern, "g");

  const [...matches] = value.matchAll(regex);

  return matches.map((m) => (!m ? "" : m[1] || m[0]));
}

/**
 * Pad both sides of a string with another.
 *
 * @param {String} value
 * @param {Number} length
 * @param {String} [pad = " "]
 * @returns {String}
 */
function padBoth(value, length, pad = " ") {
  return value.padStart((value.length + length) / 2, pad).padEnd(length, pad);
}

/**
 * Pad the left side of a string with another.
 *
 * @param {String} value
 * @param {Number} length
 * @param {String} [pad = " "]
 * @returns {String}
 */
function padLeft(value, length, pad = " ") {
  return value.padStart(length, pad);
}

/**
 * Pad the right side of a string with another.
 *
 * @param {String} value
 * @param {Number} length
 * @param {String} [pad = " "]
 * @returns {String}
 */
function padRight(value, length, pad = " ") {
  return value.padEnd(length, pad);
}

/**
 * Get the plural form of an English word.
 *
 * @param {String} value
 * @param {Number} [count = 2]
 * @param {Boolean} [inclusive = false] - Whether to prefix with the number (e.g. 3 ducks)
 * @returns {String}
 */
function plural(value, count = 2, inclusive = false) {
  return pluralize(value, count, inclusive);
}

/**
 * Prepend the given values to the string.
 *
 * @param {String} value
 * @param {String[]} values
 * @returns {String}
 */
function prepend(value, ...values) {
  return values.join("").concat(value);
}

/**
 * Prepend the given values to the string.
 *
 * @param {String} value
 * @param {String[]} values
 * @returns {String}
 */
function replace(value, search, replace) {
  return value.replaceAll(search, replace);
}

/**
 * Prepend the given values to the string.
 *
 * @param {String} value
 * @param {String} search
 * @param {String[]} replaces
 * @returns {String}
 */
function replaceArray(value, search, replaces) {
  return replaces.reduce((str, replace) => str.replace(search, replace), value);
}

/**
 * Prepend the given values to the string.
 *
 * @param {String} value
 * @param {String} search
 * @param {String[]} replaces
 * @returns {String}
 */
function replaceFirst(value, search, replace) {
  return value.replace(search, replace);
}

/**
 * Prepend the given values to the string.
 *
 * @param {String} value
 * @param {String} search
 * @param {String[]} replaces
 * @returns {String}
 */
function replaceLast(value, search, replace) {
  return value.replace(search, replace);
}

/**
 * Get the singular form of an English word.
 *
 * @param {String} value
 * @returns {String}
 */
function singular(value) {
  return pluralize.singular(value);
}

/**
 * Convert a value to studly case.
 *
 * @param {String} value
 * @returns {String} FooBar
 */
function studly(value) {
  return ucwords(value.replace(/[-_]/g, " ")).replace(/\s/g, "");
}

/**
 * Convert a value to lowercase of first character.
 *
 * @param {String} value
 * @returns {String} FooBar => fooBar
 */
function lcfirst(value) {
  return value.length === 0 ? value : value[0].toLowerCase() + value.slice(1);
}

/**
 * Convert a value to uppercase of first character in a given value.
 *
 * @param {String} value
 * @returns {String} foo bar => Foo Bar
 */
function ucwords(value) {
  return value.replace(/\b[a-zA-Z]/g, (c) => c.toUpperCase());
}

function arrayWrap(value) {
  if (!value) return [];

  return Array.isArray(value) ? value : [value];
}

module.exports = {
  after,
  afterLast,
  append,
  basename,
  ascii,
  before,
  beforeLast,
  between,
  camel,
  contains,
  containsAll,
  dirname,
  endsWith,
  finish,
  is,
  isAscii,
  kebab,
  limit,
  lower,
  ltrim,
  match,
  matchAll,
  padBoth,
  padLeft,
  padRight,
  plural,
  prepend,
  replace,
  replaceArray,
  replaceFirst,
  replaceLast,
  singular,
  studly,
  ucwords,
  lcfirst,
};
