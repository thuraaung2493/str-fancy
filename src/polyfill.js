/**
 * String.prototype.replaceAll polyfill
 *
 * @param {String|Regex} search
 * @param {String} replace
 * @returns {String}
 */
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (search, replace) {
    if (typeof search === "string") {
      return this.replace(new RegExp(search, "g"), replace);
    }
    return this.replace(search, replace);
  };
}
