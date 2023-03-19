// BEGIN
export const swap = (array) => {
    if (array.length > 2) {
        let var1 = array[0], var2 = array[array.length - 1], var3 = array.slice(1, array.length - 1);
        return [var2, ...var3, var1];
    } else if (array.length == 2) {
        return array.reverse();
    } else {
        return array;
    }
};
// END