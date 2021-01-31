const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split(".");
const major = semver[0];

console.log(process.version);
console.log(process.versions);
console.log(currentNodeVersion);
console.log(semver);
console.log(major);
