// BEGIN
const getTotalAmount = (array, curs) => {
    let result = 0;
    for (let item of array) {
        if (item.split(' ')[0] == curs) result += +item.split(' ')[1];
    }
    return result;
}
export default getTotalAmount;
// END