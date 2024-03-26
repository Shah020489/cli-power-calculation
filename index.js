#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "base",
        message: "What is the base number?",
        type: "number"
    },
    { name: "power",
        message: "What is the power number?",
        type: "number" }
]);
if (answer.power === 0) {
    console.log("The result is 1");
}
else if (answer.power === 1) {
    console.log("The result is " + answer.base);
}
else {
    console.log("The result is " + answer.base ** answer.power);
}
