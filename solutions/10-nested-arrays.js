// BEGIN
const getSuperSeriesWinner = (score) => {
    let canada = 0, ussr = 0;
    for (let item of score) {
        let can = item[0], us = item[1]
        if (can > us) {
            canada += 1;
        } else if (can < us) {
            ussr += 1;
        }
    }
    if (canada > ussr) {
        return 'canada';
    } else if (canada < ussr) {
        return 'ussr';
    } else {
        return null;
    }
}
export default getSuperSeriesWinner;
// END