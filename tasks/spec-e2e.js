// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = function(grunt) {
    var path, spawn;
    path = require("path");
    spawn = require("child_process").spawn;
    return grunt.registerTask("spec-e2e", "run specs in ci mode", function(target) {
      var done;
      require('coffee-script');
      process.argv = ["doesnt", "matter", "" + (process.cwd()) + "/config/spec-e2e.js"];
      done = this.async();
      return require("" + (process.cwd()) + "/node_modules/protractor/lib/cli");
    });
  };

}).call(this);