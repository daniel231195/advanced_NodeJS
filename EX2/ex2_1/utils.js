const GetLength = (str)=>{
    return str.length;
}

const StrUtils=(str)=>{
    return GetLength(str);
};

const GetArrLength = (arr_str)=>{
    let total_length = arr_str.map(x=>StrUtils(x))
    return total_length
};

const ArrUtils = (arr_str) => {
  return GetArrLength(arr_str)
};

module.exports={
    StrUtils,
    ArrUtils
};