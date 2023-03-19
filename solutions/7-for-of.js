// BEGIN
const calculateAverage = (array) => {
    if (array.length == 0) return null;
    let amount = 0, num = 0;
    for (let i of array) {
        amount += i;
        num += 1;
    }
    return amount / num;
}
export default calculateAverage;
// END