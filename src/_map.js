function* map(x, fn=null, ths=null) {
  var i = -1;
  for(var v of x)
    yield fn.call(ths, v, ++i, x);
}
module.exports = map;
