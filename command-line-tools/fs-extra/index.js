const fse = require("fs-extra");

fse.removeSync("./output");

// Async with promises:
fse
  .copy("./a.txt", "./output/b.txt")
  .then(() => console.log("success!"))
  .catch((error) => console.log(error));

// Sync:
try {
  fse.copySync("./a.txt", "./output/c.txt");
  console.log("success!");
} catch (error) {
  console.log(error);
}

// Async/Await:
async function copyFiles() {
  try {
    await fse.copy("./a.txt", "./output/d.txt");
    console.log("success!");
  } catch (error) {
    console.error(error);
  }
}

copyFiles();

fse.moveSync("./cba", "./abc");
