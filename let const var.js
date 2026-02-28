//var 相当于把var对变量的声明提升到当前作用域的最前面
// 只提升声明，不提升赋值，例如var i = 10; 也只是提升声明，对于10的赋值依旧在原处
var a
console.log(a)
a = 10
console.log(a)
var a = 20
console.log(a);

const arr  = []
for(var i = 0;i <10;i++){
    arr[i] = function(){
        return i
    }
}
console.log(arr[5]()) //10
//这就是因为var声明的变量i被提升了，并且在循环结束后i的值为10，所以arr数组中的每个函数都返回10。


//let和const不会提升
/* 
let 和const的作用域是块级作用域，var的作用域是函数级作用域
var声明的变量会被提升到函数的最前面，而let和const不会被提升
var声明的变量可以重复声明，而let和const不允许重复声明
var声明的变量可以被重新赋值，而const声明的变量不允许被重新赋值
*/