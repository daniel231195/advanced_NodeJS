const utils = require('./utils');

/**
 * create a module called "StrUtils" which expose a “GetLength”
 * function that receives A string and returns it's length.
 * Create another module called “ArrUtils” which expose a “GetArrLength”
 * function that receives an array of strings and returns
 * the total lengths of all the strings only by using StrUtils module
 */

console.log(utils.StrUtils("daniel"))

console.log(utils.ArrUtils(["daniel","sela","bar","ok","yes"]))

