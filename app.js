//Local dependancy (only in this preticular project)
//npm i <packageName>

//global dependancy (us it in any project)
// npm install -g <packageName>
// or
// sudo npm install -g <packageName>

//package.json - sstores important info about project/package
//manual approach (create package.jason in the root, create properites etc)
// npm init (step by step, prss enter to skip)
// npm init -y (everything default)


const _ = require("lodash")

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log("Hello people")