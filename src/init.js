/**
 * Gets values except last.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function* init(x) {
  var u, i = -1;
  for(var v of x) {
    if(++i>0) yield u;
    u = v;
  }
}
module.exports = init;
