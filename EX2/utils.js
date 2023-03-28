/**
 * reate a module called "StrUtils" which expose a “GetLength”
 * function that receives A string and returns it's length.
 * Create another module called “ArrUtils” which expose a “GetArrLength”
 * function that receives an array of strings and returns
 * the total lengths of all the strings only by using StrUtils module
 */

const GetLength = (str)=>{
    return str.length;
}

const StrUtils=(str)=>{
    return GetLength(str);
};

const GetArrLength = (arr_str)=>{
    return arr_str.map(x => StrUtils(x))
};

const ArrUtils = (arr_str) => {
  return GetArrLength(arr_str)
};

module.exports={
    StrUtils,
    ArrUtils
};