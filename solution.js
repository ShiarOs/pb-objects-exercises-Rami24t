'use strict';
// Rami Al-Saadi        JS Object              30/Aug/2022

//1
//write your code here 
function isPlainObject(object) {
    return !(object === null || !(object instanceof Object) || object instanceof Array);
}
function isPlainObject(object) {
    return !(object === null || object instanceof Array) && (object instanceof Object);
}
const data = { a: 1 };
console.log('1: ', isPlainObject(data)); // -> true
console.log('1: ', isPlainObject([1, 2, 3])); // -> false
console.log('1: ', isPlainObject(null)); // ->false
console.log('1: ', isPlainObject('Stiring')); // -> false

// //2 
// //write your code here
// function makePairs(object) {
//     return Object.entries(object)
// }
const makePairs = object => Object.entries(object);


const data2 = { a: 1, b: 2 };
console.log('2:', makePairs(data2)); // [['a', 1], ['b', 2]]
console.log('2:', makePairs({ c: 99, o: 76, z: 6574, type: 'pop' }));

//3
//write your code here

function without(object, property) {
    const pairs = makePairs(object);
    return Object.fromEntries(pairs.filter(pair => pair[0] != property));
}

const data3 = { a: 1, b: 2 };
console.log('3:', without(data3, 'b')); // { a: 1 }
// //4

function isEmpty(object) {
    let values = Object.values(object);
    if (values.length === 0)
        return true;
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== undefined)
            return false
    }
    return true;
}

const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
console.log('4:', isEmpty(data4)); // false
console.log('4:', isEmpty(data40)); // true 
console.log('4:', isEmpty({})); // true

// //5
const isEqual = (object1, object2) => JSON.stringify((Object.entries(object1).sort())) === JSON.stringify(Object.entries(object2).sort());

const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { b: 2, a: 1 };
const data53 = { a: 1, b: 2 };
//write your code here
console.log('5:', isEqual(data5, data51)); // true  
console.log('5:', isEqual(data5, data52)); // false
console.log('5:', isEqual(data53, data52)); // true


//6
const data6 = { a: { b: [1, 2, 3] } }

const invoke = (obj, str, fun, args) => eval('obj' + '.' + str + '.' + fun + '(' + args + ');');

console.log('6: ', invoke(data6, 'a.b', 'splice', [1, 2])) // [2, 3]

//7
const data7 = { a: { b: undefined } };

function isEmptyDeep(object) {
    if (isEmpty(object))
        return true
    for (let value of Object.values(object)) {
        if (isEmpty(value))
            return true
        for (const value2 of Object.values(value)) {
            if (isEmpty(value2))
                return true
            for (let value3 of Object.values(value2)) {
                if (isEmpty(value3))
                    return true
                for (const value4 of Object.values(value3)) {
                    if (isEmpty(value4))
                        return true
                    for (let value5 of Object.values(value4)) {
                        if (isEmpty(value5))
                            return true
                        for (const value6 of Object.values(value5)) {
                            if (isEmpty(value6))
                                return true
                            for (let value7 of Object.values(value6)) {
                                if (isEmpty(value7))
                                    return true
                                for (const value8 of Object.values(value7)) {
                                    if (isEmpty(value8))
                                        return true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false
}

const data8a = { a: { b: { c: { d: { e: { f: { g: { h: { i: undefined } } } } } } } } };
const data9a = { a: { b: { c: { d: { e: { f: { g: { h: { i: 99 } } } } } } } } };

console.log('7:', isEmptyDeep(data7)); // -> true
console.log('7:', isEmptyDeep(data8a)); // -> true
console.log('7:', isEmptyDeep(data9a)); // -> true

//8
const data8 = { a: 1, b: { c: { d: 1 } } };
const data81 = { a: 1, b: { c: { d: 1 } } };
const data82 = { a: 1, b: { c: { d: 2 } } };

function isEqualDeep(a, b) {
    return isEqual(a, b);
}

console.log('8: ', isEqualDeep(data8, data81));// true
console.log('8: ', isEqualDeep(data8, data82)); // false


//9
const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };
//write your code here

function intersection(a, b2) {
    a = Object.entries(a)
    b2 = Object.entries(b2)
    for (const ae of a) {
        if (b2.findIndex(b2e => isEqual(b2e, ae)) > -1)
            return Object.fromEntries([ae]);
    }
}

console.log('9', intersection(data9, data91)); // { b: 2 }


//10
const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };
const data12 = { a: 1, b: { c: { d: 3 } } };
const data13 = { c: 1, b: { c: { d: 3 } } };

const intersectionDeep = intersection;

console.log('10:', intersectionDeep(data10, data11)); // { b: { c: 3 } }
console.log('10:', intersectionDeep(data12, data13)); // 10: { b: { c: { d: 3 } } }
