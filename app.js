// npm - global command
// npm --version or npm --v checks the version 

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// sudo npm install -g <packageName>

// package.json - manifest file (stores inmportant info about project) 3 ways to create
// (1) manual approach (create package.json in the root, create properties, etc)
// (2) npm init (step by step, press enter to skip)
// (3) npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items) // flattenDeep() comes from lodash dependency
console.log(newItems)