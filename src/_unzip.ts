function unzip<T>(x: Iterable<T[]>): Array<Iterable<T>> {
  var ix = x[Symbol.iterator](), a = [];
  var {value, done} = ix.next();
  if(done) return a;
  var vs = [], i = 0, I = 0;
  var js = [], done = false;
  for(var k=0, K=value.length; k<K; k++)
    a.push((k => {
    })(k));
  return new Array(10).fill(null).map(() => {
    var next = () => {
      if(js[k]<I) return {value: vs[js[k]++][k], done: false};
      if(done) return {value: undefined, done};
      var {value, done} = ix.next();
      if(done) return {value: undefined, done};
      vs.push(value);
      I++;
      return {value: vs[js[k]++][k], done};
    };
    return {[Symbol.iterator]() {return {next};}}
  });
}
