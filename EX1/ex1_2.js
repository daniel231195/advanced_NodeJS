
/**
 * a function that receives that array, and returns an array of the biggest
 * numbers from all the inner arrays.
 * @param arr
 * @returns {number}
 */
const biggest_number = (arr)=>{
    let mid_res = arr.map(x=>Math.max(...x))
    let final_res = Math.max(...mid_res)
    return final_res
};

console.log(biggest_number([[1, 6, 3, 9], [6, 12, 5, 21], [4, 11, 23, 1]]))