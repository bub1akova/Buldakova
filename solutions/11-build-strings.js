// BEGIN
const buildDefinitionList = (arr) => {
    if (arr.length == 0 || arr[0].length == 0) return '';
    let str = '<dl>';
    for (let item of arr) {
        str += '<dt>' + item[0] + '</dt><dd>' +item[1] + '</dd>';
    }
    str += '</dl>'
    return str;
}
export default buildDefinitionList;
// END