const passport = require("passport");

module.exports = app => {
  //google authentication
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //google callback
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  //user logout
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //get current user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
