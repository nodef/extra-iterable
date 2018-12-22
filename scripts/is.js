function is(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
};
module.exports = is;
