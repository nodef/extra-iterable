function doneEvery(is) {
  for(var i of is)
    if(!i.next().done) return false;
  return true;
}

function doneSome(is) {
  for(var i of is)
    if(i.next().done) return true;
  return false;
}

function zip(xs, fn=null, ths=null) {
  var is = xs.map(x => x[Symbol.iterator]());
  while(true) {
    var rs = is.map(i => i.next());
    if(rs.every(r => r.done)) break;
    var vs = rs.map(r => r.value);
    fn.call(ths, vs);
  }
}
