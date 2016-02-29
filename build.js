var fs = require("fs");
var browserify = require("browserify");
browserify("./src/main.js")
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(fs.createWriteStream("./build/main.js"));
