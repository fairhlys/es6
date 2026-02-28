function pick(obj, ...keys){
    let result = Object.create(null)
    for(let i = 0; i<keys.length;i++){
        result[keys[i]] = obj[keys[i]]
    }
    console.log(result);
    return result
}
let book = {
    title:'JavaScript高级程序设计',
    author:'Nicholas C. Zakas',
    year:2012
}
let bookData = pick(book,'author','year')

//扩展运算符比apply方法更简洁
const arr1 = [1,2, 3]
console.log(Math.max.apply(null,arr1))
console.log(Math.max.call(null,...arr1))
console.log(Math.max(...arr1))
//箭头函数
//箭头函数没有自己的this，arguments，super，new.target
//箭头函数不能用作构造函数，不能使用new命令，否则会抛出错误
//箭头函数没有原型对象，因此也不能使用prototype属性
let fu = () => 'hello world'
console.log(fu());

let PageHandle = { 
    id: '123',
    init: function() {
        document.addEventListener('click', (e) => {
            this.doSomeThings(e.type)
        });
    },
    doSomeThings: function(type) {
        console.log('Handling ' + type + ' for ' + this.id);
    }

}
PageHandle.init()
//箭头函数的this指向定义时所在的对象，而不是调用时所在的对象，因此在事件处理函数中使用箭头函数可以避免this指向问题。