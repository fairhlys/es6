//原始数据类型symbol
//Symbol是ES6新增的一种原始数据类型，表示独一无二的值。它是不可变的，可以用来作为对象属性的键，避免属性名冲突。
const name2 = Symbol('name')
const name1 = Symbol('name')
console.log(name2 === name1) // false
console.log(Object.is(name2,name1));

let s1 = Symbol('s1')
let obj = {
    [s1]: 'hello'
}
console.log(obj[s1]) // hello

//获取对象的Symbol属性
//1. Object.getOwnPropertySymbols()方法返回一个数组，包含了所有的Symbol属性键。
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(s1) ]
//2. Reflect.ownKeys()方法返回一个数组，包含了所有的属性键，包括字符串键和Symbol键。
console.log(Reflect.ownKeys(obj)) // [ Symbol(s1) ]