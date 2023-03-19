// BEGIN
export const calculateSum = (array) => {
    let amount = 0;
    for (let i of array) {
        if (i % 3 == 0) amount += i;
    }
    return amount;
}
// END