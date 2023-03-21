//forEach
//
//
//doubleValues
//
function doubleValues(arr) {
    let doubled = [];

    arr.forEach(function (number) {
        doubled.push(number * 2);
    });
    return doubled;
}
console.log(doubleValues([5, 1, 2, 3, 10]));
//
//
//onlyEvenValues
//
function onlyEvenValues(arr) {
    let evenNumbers = [];

    arr.forEach(function (number) {
        if (number % 2 == 0) evenNumbers.push(number);
    });
    return evenNumbers;
}
console.log(onlyEvenValues([5, 1, 2, 3, 10]));
//
//
//showFirstAndLast
//
function showFirstAndLast(arr) {
    let firstLast = [];

    arr.forEach(function (word) {
        firstLast.push(word[0] + word[word.length - 1]);
    });
    return firstLast;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'test']));
//
//
//addKeyAndValue
//
function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value; // calling a key that doesNOT exist adds it
        //for each value of the array, tile = instructor
    });
    return arr;
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));
//
//
//vowelCount
//
const isVowel = function (char) {
    return 'aeiou'.indexOf(char) !== -1;
};
function vowelCount(str) {
    let vowelC = {};
    let arr = str.toLowerCase().split('');

    arr.forEach(function (c) {
        if (isVowel(c)) {
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == c) count++;
            }
            return (vowelC[c] = count);
        }
    });
    return vowelC;
}
console.log(vowelCount('I Am awesome and so are you'));
//
//map
//
//
//doubleValuesWithMap
//
function doubleValuesWithMap(arr) {
    const doubledMap = arr.map(function (num) {
        return num * 2;
    });
    return doubledMap;
}
console.log(doubleValuesWithMap([1, 2, 3]));
//
//
//valTimesIndex
//
function valTimesIndex(arr) {
    return arr.map(function (num, idx) {
        return num * idx;
    });
}
console.log(valTimesIndex([1, 2, 3]));
//
//
//extractKey
//
function extractKey(arr, key) {
    return arr.map(function (a) {
        return a[key];
    });
}
console.log(extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'name'));
//
//
//extractFullName
//
function extractFullName(arr) {
    return arr.map(function (b) {
        return b['first'] + ' ' + b['last'];
    });
}
console.log(
    extractFullName([
        { first: 'Elie', last: 'Schoppik' },
        { first: 'Tim', last: 'Garcia' },
        { first: 'Matt', last: 'Lane' },
        { first: 'Colt', last: 'Steele' },
    ])
);
//
//filer
//
//filterByValue
//
function filterByValue(arr, key) {
    return arr.filter(function (c) {
        return c[key];
    });
}
console.log(
    filterByValue(
        [
            { first: 'Elie', last: 'Schoppik' },
            { first: 'Tim', last: 'Garcia', isCatOwner: true },
            { first: 'Matt', last: 'Lane' },
            { first: 'Colt', last: 'Steele', isCatOwner: true },
        ],
        'isCatOwner'
    )
);
//
//
// find
//
function find(arr, valu) {
    return arr.filter(function (d) {
        return d === valu;
    })[0]; //if function action can't be executed due to no value in arr = valu
}
console.log(find([1, 2, 3, 4, 5], 10));
//
//
// findInObj
//
function findInObj(arr, k, searchV) {
    return arr.filter(function (val) {
        if (val[k] === searchV) {
            return val;
        }
    })[0];
}

console.log(
    findInObj(
        [
            { first: 'Elie', last: 'Schoppik' },
            { first: 'Tim', last: 'Garcia', isCatOwner: true },
            { first: 'att', last: 'Lane' },
            { first: 'Colt', last: 'Steele', isCatOwner: true },
        ],
        'isCatOwner',
        true
    )
);
//
//
// removeVowels
//
const isVowel = function (char) {
    return 'aeiou'.indexOf(char) !== -1;
};

function removeVowels(str) {
    let arr = str.toLowerCase().split('');
    let newStr = '';
    arr.filter(function (c) {
        if (!isVowel(c)) newStr += c;
    });
    return newStr;
}
console.log(removeVowels('Elie'));
console.log(removeVowels('TIM'));
//
//
//doubleOddNumbers
//
function doubleOddNumbers(array) {
    //filtered - first array with only odd numbers
    const allOddNum = array.filter(function (num) {
        return num % 2 !== 0; //return here send back to allOddNum(.filter)
    });
    //map - copy array and *2 each value
    return allOddNum.map(function (n) {
        //return here send back to doubleOddNumbers
        return n * 2; //return here send back to .map
    });
}
//Alternative:
// return array
// .filter(function oddNum(num) {
//     return num % 2 !== 0;
// })
// .map(function (num) {
//     return num * 2;
// });
console.log(doubleOddNumbers([7, 11, 3, 4, 5]));
