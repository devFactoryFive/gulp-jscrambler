'use strict';
var _ = require('lodash');
var es = require('event-stream');
var gutil = require('gulp-util');
var File = gutil.File;
var jScrambler = require('jscrambler');
var path = require('path');

module.exports = function (options) {
  var files = {};
  var filesSrc = [];

  options = _.defaults(options || {}, {
    keys: {}
  });
  var aggregate = function (file) {
    if (file.contents) {
      filesSrc.push(file);
      files[path.relative(process.cwd(), file.path)] = file;
    }
  };
  var scramble = function () {
    var self = this;
    jScrambler.protectAndDownload({
      filesSrc: filesSrc,
      keys: {
        accessKey: options.keys.accessKey,
        secretKey: options.keys.secretKey
      },
      applicationId: options.applicationId,
      host: options.host,
      port: options.port,
      params: options.params
    }, function (buffer, file) {
      var cwd = options.params && options.params.cwd || process.cwd();
      var relativePath = path.relative(cwd, file);
      self.emit('data', new File({
        path: relativePath,
        contents: buffer
      }));
    })
      .done(function () {
        self.emit('end');
      });
  };
  return es.through(aggregate, scramble);
};
