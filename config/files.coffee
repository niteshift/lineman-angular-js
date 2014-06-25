# Exports a function which returns an object that overrides the default &
# *   plugin file patterns (used widely through the app configuration)
# *
# * To see the default definitions for Lineman's file paths and globs, see:
# *
# *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
#
module.exports = (lineman) ->

  #Override file patterns here
  js:
    vendor: [
      "vendor/bower/underscore/underscore.js"
      "vendor/bower/jquery/dist/jquery.js"
      "vendor/bower/bootstrap-sass/dist/js/bootstrap.js"
      "vendor/bower/angular/angular.js"
      "vendor/bower/angular-resource/angular-resource.js"
      "vendor/bower/angular-route/angular-route.js"
    ]
    app: [
      "app/js/app.js"
      "app/js/**/*.js"
    ]

  sass:
    main: ["app/css/main.scss","app/css/main.sass"]
    app: ["app/css/**/*.scss", "app/css/**/*.sass"]
    generatedApp: "generated/css/app.sass.css"

  css:
    vendor: [
      "vendor/bower/bootstrap-sass/dist/css/bootstrap.css",
      "vendor/bower/bootstrap-sass/dist/css/bootstrap-theme.css"]
    app: "app/css/**/*.css"
    concatenated: "generated/css/app.css"
    minified: "dist/css/app.css"
    minifiedWebRelative: "css/app.css"
