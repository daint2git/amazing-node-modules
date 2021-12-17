const tempy = require("tempy");

console.log(tempy.file());
console.log(tempy.file({ extension: "png" }));

console.log(tempy.directory());
console.log(tempy.directory({ prefix: "xxx" }));
