// BEGIN
const countUniqChars = (str) => {
    let setArray = new Set(str.split('')), newArray = Array.from(setArray);
    return newArray.length;
}
export default countUniqChars;
// END