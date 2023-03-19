// BEGIN (write your solution here)
export const getWeekends = (form) => {
    switch (form) {
        case 'long':
            return ['saturday', 'sunday'];
        case 'short':
            return ['sat', 'sun'];
        default:
            return ['saturday', 'sunday']
    }
}
// END
