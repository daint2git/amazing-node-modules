const Configstore = require("configstore");
const pkg = require("../package.json");

// Create a Configstore instance
const config = new Configstore(pkg.name);

config.set("x", 123);
config.set("y", {
  key1: 1,
  key2: {
    key3: "text",
  },
});
config.set("bar.baz", true);

console.log(config.get("x"));
console.log(config.get("y"));
console.log(config.get("bar.baz"));
config.delete("x");
config.delete("y");
config.delete("bar");
