#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
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
