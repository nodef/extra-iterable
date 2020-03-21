/**
 * Gets values except first.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function tail(x) {
  var i = -1;
  for(var v of x)
    if(++i>0) yield v;
}
module.exports = tail;
