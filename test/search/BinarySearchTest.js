const assert = require('assert');
let binarySearch = require('../../lib/search/BinarySearch');

describe('search', function () {
    describe('#BinarySearch', function () {
        var data = [{
                max: 120,
                min: 90,
                grade: "A"
            },
            {
                max: 89,
                min: 60,
                grade: "B"
            },
            {
                max: 59,
                min: 30,
                grade: "C"
            },
            {
                max: 29,
                min: 0,
                grade: "D"
            }
        ];
        let needle = 50;
        let rangeCheck = `${needle} > newHayStack[newHayStack.length - 1].max && ${needle} > newHayStack[0].max`;
        let filter = `haystack[i].max >= ${needle} && haystack[i].min <= ${needle}`;
        let result = binarySearch(data, needle, rangeCheck, filter);
        it('should return true', function () {
            assert.equal(result.grade, "C");
        });
    });
});