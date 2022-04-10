const amber = require("./colors/amber");
const black = require("./colors/black");
const blue = require("./colors/blue");
const blueGray = require("./colors/blue-gray");
const brown = require("./colors/brown");
const cyan = require("./colors/cyan");
const deepOrange = require("./colors/deep-orange");
const deepPurple = require("./colors/deep-purple");
const gray = require("./colors/gray");
const green = require("./colors/green");
const indigo = require("./colors/indigo");
const lightBlue = require("./colors/light-blue");
const lightGreen = require("./colors/light-green");
const lime = require("./colors/lime");
const orange = require("./colors/orange");
const pink = require("./colors/pink");
const purple = require("./colors/purple");
const red = require("./colors/red");
const teal = require("./colors/teal");
const white = require("./colors/white");
const yellow = require("./colors/yellow");

let Color = {
    ...amber,
    ...black,
    ...blueGray,
    ...blue,
    ...brown,
    ...cyan,
    ...deepOrange,
    ...deepPurple,
    ...gray,
    ...green,
    ...indigo,
    ...lightBlue,
    ...lightGreen,
    ...lime,
    ...orange,
    ...pink,
    ...purple,
    ...red,
    ...teal,
    ...white,
    ...yellow,
}

Object.freeze(Color);

module.exports = Color;
