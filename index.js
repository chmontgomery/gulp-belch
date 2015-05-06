'use strict';
var through = require('through2');
var belch = require('belch');

module.exports = function () {
  return through.obj(function (file, enc, cb) {
    belch();
    cb(null, file);
  });
};
