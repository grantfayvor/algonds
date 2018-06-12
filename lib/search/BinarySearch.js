/**
 * implementation of Binary Search algorithm
 * creator: Harrison Favour
 */

module.exports = function BinarySearch(haystack, needle, rangeCheck, filter) {
    if ((typeof rangeCheck !== 'string' || !rangeCheck instanceof String) &&
        (typeof filter !== 'string' || !filter instanceof String)) {
        throw new Error("rangeCheck and filter should be valid strings of boolean code constructs");
        return;
    }
    let haystackLength = haystack.length;
    let newHayStack,
        result = {};
    if (haystackLength > 2) {
        newHayStack = haystack.slice(Math.ceil(haystackLength / 2));
        if (eval(rangeCheck)) {
            newHayStack = haystack.slice(0, Math.ceil(haystackLength / 2));
        }
        result = BinarySearch(newHayStack, needle, rangeCheck, filter);
    } else {
        for (let i = 0; i < haystack.length; i++) {
            if (eval(filter)) {
                result = haystack[i];
                break;
            }
        }
    }
    return result;
};