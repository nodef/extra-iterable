// 1. Datatype methods
exports.is = require('./is');
exports.isCollection = require('./is-collection');

// 2. About methods
exports.equal = require('./equal');
exports.size = require('./size');
exports.first = require('./first');
exports.middle = require('./middle');
exports.last = require('./last');
exports.keys = require('./keys');
exports.entries = require('./entries');
exports.any = require('./any');
exports.all = require('./all');

// 3. Generate methods
exports.from = require('./from');

// 4. Search methods
exports.startsWith = require('./starts-with');
exports.endsWith = require('./ends-with');
exports.indexOf = require('./index-of');
exports.indicesOf = require('./indices-of');
exports.lastIndexOf = require('./last-index-of');
exports.includes = require('./includes');
exports.contains = require('./contains');

// 4. Transform methods
exports.join = require('./join');
exports.pick = require('./pick');
exports.pickAs = require('./pick-as');
exports.slice = require('./slice');
exports.compact = require('./compact');
exports.without = require('./without');
exports.concat = require('./concat');
exports.flatten = require('./flatten');
exports.zip = require('./zip');
exports.unzip = exports.zip;
exports.replace = require('./replace');
exports.mapReplace = require('./map-replace');
exports.objectReplace = require('./object-replace');
exports.reverse = require('./reverse');
exports.split = require('./split');
exports.repeat = require('./repeat');

// 5. Functional methods
exports.forEach = require('./for-each');
exports.some = require('./some');
exports.every = require('./every');
exports.find = require('./find');
exports.findIndex = require('./find-index');
exports.findAll = require('./find-all');
exports.findAllIndices = require('./find-all-indices');
exports.reduce = require('./reduce');
exports.filter = require('./filter');
exports.map = require('./map');

// 5. Evaluate methods
exports.max = require('./max');
exports.min = require('./min');
exports.sum = require('./sum');
exports.average = require('./average');
exports.hammingDistance = require('./hamming-distance');
exports.euclideanDistance = require('./euclidean-distance');
