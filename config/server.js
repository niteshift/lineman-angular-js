// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = {
    drawRoutes: function(app) {
      app.post("/login", function(req, res) {
        return res.json({
          message: "logging in!"
        });
      });
      app.post("/logout", function(req, res) {
        return res.json({
          message: "logging out!"
        });
      });
      return app.get("/books", function(req, res) {
        return res.json([
          {
            title: "Great Expectations",
            author: "Dickens"
          }, {
            title: "Foundation Series",
            author: "Asimov"
          }, {
            title: "Treasure Island",
            author: "Stephenson"
          }
        ]);
      });
    }
  };

}).call(this);
