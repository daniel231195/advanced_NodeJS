/**
 * a function that receives the following array [1,2,3,4,5,6]
 * and returns the average after 1 seconds.
 * @param arr
 * @returns {Promise<unknown>}
 */
const average = (arr) => {
    return new Promise((resolve, reject) => {
        let result_average = arr.reduce((acc, cur) => acc + cur) / arr.length
        setTimeout(() => {
            resolve(result_average)
        }, 1000)
    });
};

average([1, 2, 3, 4, 5, 6]).then(data => console.log(data))