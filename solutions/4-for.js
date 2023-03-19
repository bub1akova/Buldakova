// BEGIN
const addPrefix = (array, prefix) => {
    let newArray = [];
    for (let a of array) {
        let pref = prefix + ' ' + a;
        newArray.push(pref);
    }
    return newArray;
}
export default addPrefix;
// END