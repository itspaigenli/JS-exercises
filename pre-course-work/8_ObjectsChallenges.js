// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []

function keys(obj1) {
    let arrKey = [];
    console.log("before loop")
    for (const key in obj1) {
        console.log("inside loop: "+ key)
        arrKey.push(key);
    }
    return arrKey;
}



// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []

function values(obj1) {
    let arrVal = [];
    console.log("before loop")
    for (const key in obj1) {
        console.log("inside loop: "+ obj1[key])
        arrVal.push(obj1[key]);
    }
    return arrVal;
}

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element
//  is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []

function entries(obj1) {
    let arrEntries = [];
    console.log("before loop")
    for (const key in obj1) {
        console.log("inside loop: "+ obj1[key])
        arrEntries.push([key,obj1[key]]);
    }
    return arrEntries;
}

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is 
// not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

function pluck(arr1, keyName){
    let arrValue = [];
    for (let i=0; i<arr1.length;i++) {
        arrValue.push(arr1[i][keyName]);
    }
    return arrValue;
}

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

function stringFromObjectForeach(obj1) {
    let stringPairs = "";
    console.log("before loop")
    for (const key in obj1) {
        console.log("inside loop: "+ obj1[key])
        stringPairs = stringPairs + key + " = " + obj1[key] + ", ";
    }
    if (stringPairs.length>0)
        return stringPairs.substring(0,stringPairs.length-2);
    else
        return stringPairs;
}

function stringFromObject(obj1) {
    let stringPairs = "";
    const keys = Object.keys(obj1);

    console.log("before loop")
    for (let i=0;i< keys.length;i++) {
        console.log("inside loop: "+ keys[i])
        stringPairs = stringPairs + keys[i] + " = " + obj1[keys[i]];
        if (i < keys.length-1)
        {
            stringPairs = stringPairs + ", "
        }
    }
    return stringPairs;
}
// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

function minMaxKeyInObject(obj1) {
    const keys = Object.keys(obj1);

    let lowestKey = parseInt(keys[0]);
    let highestKey = parseInt(keys[0]);
    

    console.log("before loop")
    for (let i=0;i< keys.length;i++) {
        let intKey = parseInt(keys[i]);
        console.log("inside loop: " + keys[i]);
        if (intKey < lowestKey)
            lowestKey = intKey;
        if (intKey > highestKey)
            highestKey = intKey;
    }
    return [lowestKey, highestKey];
}