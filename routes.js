function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

function setup(app, handlers, express) {
    app.get("/private/config", handlers.v100Config.get);


    // http://willsnodeboilerplate.com/#/
    app.use("", express.static(__dirname + '/public/apps/testappA'));
    

    app.use("/lib", express.static(__dirname + '/public/lib'));

  }

exports.setup = setup;