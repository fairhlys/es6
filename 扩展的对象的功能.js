// es6直接写入变量和函数，作为对象的属性和方法
const names = 'zhangsan';
function sayHi() {
  console.log('hi');
}
const obj = {
  names,
  sayHi
}
console.log(obj.names);
obj.sayHi();

//对象的方法
//is() 方法用来比较两个值是否相同，返回一个布尔值。与严格比较运算符（===）不同，Object.is()认为NaN和NaN是相等的，并且认为+0和-0是不相等的。
// 除了 NaN、+0、-0 这三个特例之外，Object.is(a, b) 和 a === b 的结果永远相同。
console.log(Object.is(NaN,NaN))
console.log(Object.is(+0,-0))
//assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
const a = { a: 1 };
const o = Object.assign(a, { b: 2 }, { c: 3 });
console.log(o);
console.log(a);
console.log(target);
console.log(returnedTarget);