function from(a) {
  if(a==null || typeof a[Symbol.iterator]==='function') return a;
  return typeof a==='object'? Object.entries(a):[a];
};
module.exports = from;
