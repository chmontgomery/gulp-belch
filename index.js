'use strict';
var through = require('through2');
var belch = require('belch');

module.exports = function (opts) {
  opts = opts || {};

  return through.obj(function (file, enc, cb) {
    belch();
    this.push(file);
    cb();
  });
};