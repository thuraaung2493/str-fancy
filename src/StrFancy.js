const strings = require("./strings");

/** Class String Fancy. */
class StrFancy {
  /**
   * Create a point.
   *
   * @param {String} value
   */
  constructor(value) {
    this.value = String(value);
    this.length = this.value.length;
  }

  /**
   * Create new Str object.
   *
   * @param {String} value - The any strings.
   * @returns {StrFancy} The StrFancy object.
   */
  static of(value) {
    return new StrFancy(value);
  }

  /**
   * Return the remainder of a string after the first occurrence of a given value.
   *
   * @param {String} search
   * @returns {this}
   */
  after(search) {
    return new StrFancy(strings.after(this.value, search));
  }

  /**
   * Return the remainder of a string after the last occurrence of a given value.
   *
   * @param {String} search
   * @returns {String}
   */
  afterLast(search) {
    return new StrFancy(strings.afterLast(this.value, search));
  }

  /**
   * Append the given values to the string.
   *
   * @param {String[]} values
   * @returns {String}
   */
  append(...values) {
    return new StrFancy(strings.append(this.value, ...values));
  }

  /**
   * Transliterate a Unicode string to ASCII.
   *
   * @returns {String}
   */
  ascii() {
    return new StrFancy(strings.ascii(this.value));
  }

  /**
   * Get the trailing name component of the path.
   *
   * @param {String?} suffix
   * @returns {String}
   */
  basename(suffix = "") {
    return new StrFancy(strings.basename(this.value, suffix));
  }

  /**
   * Get the portion of a string before the first occurrence of a given value.
   *
   * @param {String} search
   * @returns {String}
   */
  before(search) {
    return new StrFancy(strings.before(this.value, search));
  }

  /**
   * Get the portion of a string before the last occurrence of a given value.
   *
   * @param {String} search
   * @returns {String}
   */
  beforeLast(search) {
    return new StrFancy(strings.beforeLast(this.value, search));
  }

  /**
   * Get the portion of a string between two given values.
   *
   * @param {String} from
   * @param {String} to
   * @returns {String}
   */
  between(from, to) {
    return new StrFancy(strings.between(this.value, from, to));
  }

  /**
   * Convert a value to camel case.
   *
   * @returns {String} fooBar
   */
  camel() {
    return new StrFancy(strings.camel(this.value));
  }

  /**
   * Determine if a given string contains a given substring.
   *
   * @param {String|String[]} needles
   * @returns {Boolean}
   */
  contains(needles) {
    return new StrFancy(strings.contains(this.value, needles));
  }

  /**
   * Determine if a given string contains all array values.
   *
   * @param {String[]} needles
   * @returns {Boolean}
   */
  containsAll(needles) {
    return new StrFancy(strings.containsAll(this.value, needles));
  }

  /**
   * Get the parent directory's path.
   *
   * @param {Number} [level = 1]
   * @returns {String}
   */
  dirname(level = 1) {
    return new StrFancy(strings.dirname(this.value, level));
  }

  /**
   * Determine if a given string ends with a given substring.
   *
   * @param {String|String[]} needles
   * @param {Number} [length]
   * @returns {Boolean}
   */
  endsWith(needles, length) {
    return new StrFancy(strings.endsWith(this.value, needles, length));
  }

  /**
   * Determine if the string is an exact match with the given value.
   *
   * @param {String} value
   * @returns {Boolean}
   */
  exactly(value) {
    return new StrFancy(this.value === value);
  }

  /**
   * Split the string into an array.
   *
   * @param {String|RegExp} separator
   * @param {Number} limit
   * @returns {String[]}
   */
  explode(separator, limit) {
    return new StrFancy(this.value.split(separator, limit));
  }

  /**
   * Cap a string with a single instance of a given value.
   *
   * @param {String} cap
   * @returns {String}
   */
  finish(cap) {
    return new StrFancy(strings.finish(this.value, cap));
  }

  /**
   * Determine if a given string matches a given pattern.
   *
   * @param {String|[]} pattern
   * @returns {Boolean}
   */
  is(pattern) {
    return new StrFancy(strings.is(pattern, this.value));
  }

  /**
   * Determine if a given string matches a given pattern.
   *
   * @param {String|[]} pattern
   * @returns {Boolean}
   */
  isAscii() {
    return new StrFancy(strings.isAscii(this.value));
  }

  /**
   * Determine if the given string is empty.
   *
   * @returns {Boolean}
   */
  isEmpty() {
    return new StrFancy(this.value === "");
  }

  /**
   * Determine if the given string is not empty.
   *
   * @returns {Boolean}
   */
  isNotEmpty() {
    return new StrFancy(!this.isEmpty());
  }

  /**
   * Convert a value to kebab case.
   *
   * @param {String} [delimiter = "_"]
   * @returns {String} foo_bar
   */
  kebab(delimiter = "_") {
    return new StrFancy(strings.kebab(this.value, delimiter));
  }

  /**
   * Return the length of the given string.
   *
   * @returns {Number}
   */
  length() {
    return new StrFancy(this.length);
  }

  /**
   * Limit the number of characters in a string.
   *
   * @param {String} value
   * @param {Number} [limit = 100]
   * @param {String} [end = "..."]
   * @returns {String}
   */
  limit(limit = 100, end = "...") {
    return new StrFancy(strings.limit(this.value, limit, end));
  }

  /**
   * Convert the given string to lower-case.
   *
   * @returns {String}
   */
  lower() {
    return new StrFancy(strings.lower(this.value));
  }

  /**
   * Left trim the string of the given characters.
   *
   * @param {String} value
   * @param {String} [characters = " "]
   * @returns {String}
   */
  ltrim(characters = " ") {
    return new StrFancy(strings.ltrim(this.value, characters));
  }

  /**
   * Get the string matching the given pattern.
   *
   * @param {RegExp|String} pattern
   * @returns {String}
   */
  match(pattern) {
    return new StrFancy(strings.match(this.value, pattern));
  }

  /**
   * Get the string matching the given pattern.
   *
   * @param {RegExp|String} pattern
   * @returns {String}
   */
  matchAll(pattern) {
    return new StrFancy(strings.matchAll(this.value, pattern));
  }

  /**
   * Pad both sides of a string with another.
   *
   * @param {Number} length
   * @param {String} [pad = " "]
   * @returns {String}
   */
  padBoth(length, pad = " ") {
    return new StrFancy(strings.padBoth(this.value, length, pad));
  }

  /**
   * Pad the left side of a string with another.
   *
   * @param {Number} length
   * @param {String} [pad = " "]
   * @returns {String}
   */
  padLeft(length, pad = " ") {
    return new StrFancy(strings.padLeft(this.value, length, pad));
  }

  /**
   * Pad the right side of a string with another.
   *
   * @param {Number} length
   * @param {String} [pad = " "]
   * @returns {String}
   */
  padRight(length, pad = " ") {
    return new StrFancy(strings.padRight(this.value, length, pad));
  }

  /**
   * Get the plural form of an English word.
   *
   * @param {Number} [count = 2]
   * @param {Boolean} [inclusive = false] - Whether to prefix with the number (e.g. 3 ducks)
   * @returns {String}
   */
  plural(count = 2, inclusive = false) {
    return new StrFancy(strings.plural(this.value, count, inclusive));
  }

  /**
   * Prepend the given values to the string.
   *
   * @param {String} values
   * @returns {String}
   */
  prepend(...values) {
    return new StrFancy(strings.prepend(this.value, ...values));
  }

  /**
   * Get the singular form of an English word.
   *
   * @returns {String}
   */
  singular() {
    return new StrFancy(strings.singular(this.value));
  }

  /**
   * Convert a value to studly case.
   *
   * @returns {String} FooBar
   */
  studly() {
    return new StrFancy(strings.studly(this.value));
  }
}

module.exports = StrFancy;
