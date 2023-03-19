// BEGIN
export const getMax = (arr) => {
    if (arr.length == 0) return null;
    let max = arr[0];
    for (let item of arr) {
        if (item >= max) max = item;
    }
    return max;
}
// END