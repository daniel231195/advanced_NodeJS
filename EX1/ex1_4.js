/**
 * a function called funcA that receives the array of arrays in ex2 and a Promise that returns the total sum after 2 seconds.
 * Write a functions called funcB that call funcA and returns (the total sum returned from funcA) * 2.
 * Call funcB from the main code and print the result
 * @param arr
 * @returns {Promise<unknown>}
 */
funcA=  (arr)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sumEach = arr.map(x=>x.reduce((acc,cur)=>acc+cur))
            let totalSum=sumEach.reduce((acc,cur)=>acc+cur);
            resolve(totalSum);
        }, 2000);
    });
}

exports.funcB =async (arr)=>{
    let result = await funcA(arr)
    return result*2;
}
