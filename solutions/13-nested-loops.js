const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
    let setArray = new Set(_.intersection(arr1, arr2)), newArray = Array.from(setArray)
    return newArray.length;
}
export default getSameCount;
// END