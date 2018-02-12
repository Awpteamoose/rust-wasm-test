const fs = require("fs");

const file = fs.readFileSync("target\\wasm32-unknown-unknown\\release\\wasm.optimised.wasm");
fs.writeFileSync("target\\wasm32-unknown-unknown\\release\\wasm.json", JSON.stringify(Array.from(file)));
