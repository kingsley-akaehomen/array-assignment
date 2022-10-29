

// Question 1

const people = [
    { name: "Elie", isInstructor: true },
    { name: "Tim", isInstructor: true },
    { name: "Matt", isInstructor: true }
];

// Using the map method
function extractKey(arrObject, name) {
    let result = arrObject.map((value) => {
        return value.name
    })
    return result;
}

// console.log(extractKey(people, 'name'))

// Question 2

function filterLetters(arrLetters, letter) {
    let occurence = 0;
    arrLetters.filter((arrLetter) => {
        if (arrLetter.toUpperCase() == letter.toUpperCase()) {
            occurence++;
        }
    })
    return occurence;
}

// console.log(filterLetters(["a", "a", "b", "c", "A"], "a"));
// console.log(filterLetters(["a", "a", "b", "c", "A"], "z"));
// console.log(filterLetters(["a", "a", "b", "c", "A"], "B"));

// Question 3

function printFirstAndLast(arr) {
    let newString = "";
    arr.forEach((value) => {
        let firstChar = value[0];
        let LastChar = value[value.length - 1];
        newString = firstChar + LastChar;
        console.log(newString);
    })

}

 const array = ['awesome', 'example', 'of', 'forEach'];
// printFirstAndLast(array);

// Question 4

function valTimesIndex(arr) {
    let result = arr.map((number, index) => {
        return number * index;
    })
    return result;
}

// console.log(valTimesIndex([1, 2, 3]));
// console.log(valTimesIndex([5, 10, 15]));

// Question 5

function addKeyAndValue(arrObjects, key, value) {
    arrObjects.forEach((arrObject) => {
        arrObject[key] = value;
    })
    return arrObjects;
}

 const give = addKeyAndValue([{ name: 'Joshua' }, { name: 'Mark' }, { name: 'Arthur' }], "isInstructor", true)

// console.log(give)