//Array.from()方法用于将类数组对象或可迭代对象转换为数组。
//语法：Array.from(arrayLike[, mapFn[, thisArg]])
//参数说明：
//  arrayLike：要转换成数组的类数组对象或可迭代对象。
//  mapFn：可选。一个映射函数，调用该函数处理每个元素，并返回结果组成新的数组。
//  thisArg：可选。执行mapFn时使用的this值.

//Array.prototype.slice.call(arguments)方法可以将类数组对象转换为数组。它通过调用slice方法来实现，slice方法会返回一个新的数组，其中包含从原始数组中选定的元素。
//但是，使用Array.from()方法更简洁和直观，因为它直接将类数组对象转换为数组，而不需要借助slice方法。

function add() {
    console.log(arguments)
    let arr = Array.from(arguments)
    let arr1 = Array.prototype.slice.call(arguments)
    let arr2 = [...arguments]
    let arr3 = Array.from(arguments, ele => ele * 2) // 可以使用mapFn参数对每个元素进行处理，这里将每个元素乘以2
    console.log(arr)
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
}
add(1,2,3)

// Array.of()方法用于创建一个新的数组实例，参数可以是任意数量的元素，这些元素将成为新数组的成员。与Array.from()方法不同，Array.of()方法不会将单个数字参数视为数组长度，而是将其作为数组的一个元素。
//语法：Array.of(element0[, element1[, ...[, elementN]]])
//参数说明：
//  element0, element1, ..., elementN：要添加到新数组中的元素。
let arr4 = Array.of(1, 2, 3)
console.log(arr4) // [1, 2, 3]
let arr5 = Array.of(5)
console.log(arr5) // [5]

//copyWithin()方法用于在数组内部复制元素到指定位置，并返回修改后的数组。它接受三个参数：target、start和end。target表示要复制到的位置，start表示要复制的起始位置，end表示要复制的结束位置（不包括end）。如果end省略，则默认为数组长度。
//语法：array.copyWithin(target, start[, end])
//参数说明：
//  target：必需。要复制到的位置，必须是一个有效的数组索引，且不能为负数。
//  start：必需。要复制的起始位置，必须是一个有效的数组索引，且不能为负数。
//  end：可选。要复制的结束位置（不包括end），必须是一个有效的数组索引，且不能为负数。如果省略，则默认为数组长度。
let arr6 = [1, 2, 3, 4, 5]
console.log(arr6.copyWithin(0, 3)) // [4, 5, 3, 4, 5]
console.log(arr6.copyWithin(1, 0, 2)) // [4, 4, 5, 4, 5]
//在第一个copyWithin()调用中，参数target为0，start为3，end省略，因此默认为数组长度。它将从索引3开始的元素（即4和5）复制到索引0的位置，结果是[4, 5, 3, 4, 5]。
//在第二个copyWithin()调用中，参数target为1，start为0，end为2。它将从索引0开始的元素（即4和5）复制到索引1的位置，结果是[4, 4, 5, 4, 5]。


//find()方法用于返回数组中满足提供的测试函数的第一个元素的值。它接受一个回调函数作为参数，该函数会被调用来测试数组中的每个元素，直到找到满足条件的元素为止。如果找到满足条件的元素，则返回该元素的值；如果没有找到满足条件的元素，则返回undefined。
//语法：array.find(callback(element[, index[, array]])[, thisArg])
//参数说明：
//  callback：必需。一个函数，用来测试数组中的每个元素。调用时会传入三个参数：element（当前元素的值）、index（当前元素的索引）和array（调用find方法的数组）。
//  thisArg：可选。执行callback时使用的this值。
let arr7 = [1, 2, 3, 4, 5]
let found = arr7.find(element => element > 3)
console.log(found) // 4

//findIndex()方法用于返回数组中满足提供的测试函数的第一个元素的索引。它接受一个回调函数作为参数，该函数会被调用来测试数组中的每个元素，直到找到满足条件的元素为止。如果找到满足条件的元素，则返回该元素的索引；如果没有找到满足条件的元素，则返回-1。
//语法：array.findIndex(callback(element[, index[, array]])[, thisArg])
//参数说明：
//  callback：必需。一个函数，用来测试数组中的每个元素。调用时会传入三个参数：element（当前元素的值）、index（当前元素的索引）和array（调用findIndex方法的数组）。
//  thisArg：可选。执行callback时使用的this值。
let arr8 = [1, 2, 3, 4, 5]
let foundIndex = arr8.findIndex(element => element > 3)
console.log(foundIndex) // 3

//entries()方法返回一个新的Array Iterator遍历器对象，该对象包含数组中每个索引的键值对。每个键值对以一个数组的形式表示，其中第一个元素是索引，第二个元素是对应的值。
//语法：array.entries()
//返回值：一个新的Array Iterator对象，包含数组中每个索引的键值对。
let arr9 = ['a', 'b', 'c']
let iterator = arr9.entries()
for (let entry of iterator) {
  console.log(entry)
}
//输出结果：
// [0, 'a']
// [1, 'b']
// [2, 'c']
//在这个例子中，arr9是一个包含三个元素的数组。调用arr9.entries()方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键值对。使用for...of循环遍历这个迭代器，每次迭代都会得到一个包含索引和值的数组。

//keys()方法返回一个新的Array Iterator遍历器对象，该对象包含数组中每个索引的键。每个键以一个数字的形式表示，表示该元素在数组中的位置。
//语法：array.keys()
//返回值：一个新的Array Iterator对象，包含数组中每个索引的键。
let arr10 = ['a', 'b', 'c']
let keysIterator = arr10.keys()
for (let key of keysIterator) {
  console.log(key)
}
//输出结果：
// 0
// 1
// 2
//在这个例子中，arr10是一个包含三个元素的数组。调用arr10.keys()方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键。使用for...of循环遍历这个迭代器，每次迭代都会得到一个表示索引的数字

//values()方法返回一个新的Array Iterator遍历器对象，该对象包含数组中每个索引的值。每个值以数组元素的形式表示。
//语法：array.values()
//返回值：一个新的Array Iterator对象，包含数组中每个索引的值。
let arr11 = ['a', 'b', 'c']
let valuesIterator = arr11.values()
for (let value of valuesIterator) {
  console.log(value)
}   
//输出结果：
// 'a'
// 'b'
// 'c'
//在这个例子中，arr11是一个包含三个元素的数组。调用arr11.values()方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的值。使用for...of循环遍历这个迭代器，每次迭代都会得到一个表示数组元素的值。

// for of 与 for in 的区别
// for...in循环用于遍历对象的可枚举属性，包括继承的属性。它会返回对象的键（属性名）。对于数组来说，for...in循环会遍历数组的索引，但不保证顺序，并且可能会遍历到数组原型链上的属性，这可能导致意外的结果。
// for...of循环用于遍历可迭代对象（如数组、字符串、Map、Set等）。它会返回对象的值（元素）。对于数组来说，for...of循环会按照元素的顺序遍历数组，并且不会遍历到数组原型链上的属性，因此更适合用于遍历数组。
for (let [index,value] of arr11.entries()) {
    console.log(index,value)
}

//可以用next()方法手动遍历迭代器对象，next()方法返回一个对象，包含两个属性：value（当前元素的值）和done（一个布尔值，表示是否已经遍历完成）。
let arr12 = ['a', 'b', 'c']
let iterator2 = arr12.entries()
console.log(iterator2.next()) // { value: [ 0, 'a' ], done: false }
console.log(iterator2.next()) // { value: [ 1, 'b' ], done: false }
console.log(iterator2.next()) // { value: [ 2, 'c' ], done: false }
console.log(iterator2.next()) // { value: undefined, done: true }
//在这个例子中，arr12是一个包含三个元素的数组。调用arr12.entries()方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键值对。使用next()方法手动遍历这个迭代器，每次调用都会得到一个包含当前元素的值和是否已经遍历完成的对象。当迭代器遍历完成后，value属性将为undefined，done属性将为true。

//includes()方法用于判断数组是否包含一个指定的值，根据情况返回true或false。它接受一个参数，表示要搜索的元素。
//语法：array.includes(valueToFind[, fromIndex])
//参数说明：
//  valueToFind：必需。要搜索的元素。
//  fromIndex：可选。开始搜索的位置，默认为0。如果为负数，则表示从数组末尾开始搜索，-1表示最后一个元素，-2表示倒数第二个元素，以此类推。
let arr13 = [1, 2, 3, 4, 5]
console.log(arr13.includes(3)) // true
console.log(arr13.includes(6)) // false
console.log(arr13.includes(3, 3)) // false
console.log(arr13.includes(3, -2)) // true
//在这个例子中，arr13是一个包含五个元素的数组。调用arr13.includes(3)方法返回true，因为数组中包含元素3。调用arr13.includes(6)方法返回false，因为数组中不包含元素6。调用arr13.includes(3, 3)方法返回false，因为从索引3开始搜索时，元素3不在该范围内。调用arr13.includes(3, -2)方法返回true，因为从索引-2（即索引3）开始搜索时，元素3在该范围内。