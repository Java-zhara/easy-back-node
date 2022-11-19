const os = require("os");

const OS = os.platform();
console.log("OS :", OS);

const myMath = require("./my-math");

let plus = myMath.add(1, 2);
let minus = myMath.minus(3, 2);
console.log(`plus: ${plus}, minus: ${minus}`);
