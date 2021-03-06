// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = function(lineman) {
    return {
      server: {
        pushState: true
      },
      enableSass: true,
      livereload: true,
      webfonts: {
      files: {
          "vendor/bower/bootstrap/fonts/": "vendor/bower/bootstrap/fonts/**/*.*",
          "vendor/bower/font-awesome/fonts/": "vendor/bower/font-awesome/fonts/**/*.*"
        }
      },
      concat_sourcemap: {
        js: {
          src: ["<%= files.js.vendor %>", "<%= files.coffee.generated %>", "<%= files.js.app %>", "<%= files.ngtemplates.dest %>"]
        }
      }
    };
  };

}).call(this);
