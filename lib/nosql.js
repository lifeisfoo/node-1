'use strict';
const {
  MathAbs,
  ObjectDefineProperty,
  StringPrototypeCharCodeAt,
} = primordials;
const { emitExperimentalWarning } = require('internal/util');

emitExperimentalWarning('NoSQL');
// module.exports = internalBinding('sqlite');

const { DatabaseSync } = require("sqlite");
//const database = new DatabaseSync(":memory:");
const database = new DatabaseSync("mydb.sqlite");
const { basename, join } = require('path');

const entry = process.argv[1] ?? process.argv[0];
const base = basename(entry);
const hash = hashCode(entry);
const location = join(process.cwd(), `${base}.${hash}.localstorage`);

function hashCode(s) {
  let h = 0;

  for (let i = 0; i < s.length; ++i) {
    h = (h << 5) - h + StringPrototypeCharCodeAt(s, i) | 0;
  }

  return MathAbs(h);
}

module.exports = {
    helloNoSQL() {
        console.log("Hello from NoSQL module!");
        console.log(location, entry);
    }
}