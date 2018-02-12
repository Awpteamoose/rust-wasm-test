cargo +nightly build --target wasm32-unknown-unknown --release
wasm-gc target\wasm32-unknown-unknown\release\wasm.wasm target\wasm32-unknown-unknown\release\wasm.optimised.wasm
node tojson.js
