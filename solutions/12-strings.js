// BEGIN
const makeCensored = (str, array) => {
    let result = [];
    for (let item of str.split(' ')) {
        if (array.indexOf(item) != -1) {
            result.push('$#%!');
        } 
        else {
            result.push(item);
        }
    }
    return result.join(' ');
}
export default makeCensored;
// END