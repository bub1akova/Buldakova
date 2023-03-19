// BEGIN
export const get = (array, i, defaultValue = null) => {
    if (i >= 0 && i < array.length) {
        return array[i];
    } else {
        return defaultValue;
    } 
}
// END