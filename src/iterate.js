const id = require('./_id');

function* iterate(v, fn=null, n=-1) {
  var fn = fn||id;
  for(; n!==0; n--, v=fn(v))
    yield v;
}
module.exports = iterate;
