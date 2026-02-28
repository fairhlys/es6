//生成器generator是一个函数，可以暂停和恢复执行，生成器函数使用function*定义，yield关键字暂停函数执行并返回一个值，next()方法恢复函数执行并返回一个对象，包含value和done属性。
function* generator() {
    yield 1
    yield 2
    yield 3
}
const gen = generator() //调用generator()函数返回一个迭代器对象gen。每次调用gen.next()方法都会恢复生成器函数的执行，并返回一个包含当前yield表达式的值和是否已经遍历完成的对象。当生成器函数执行完毕后，value属性将为undefined，done属性将为true。
console.log(gen.next()) // { value: 1, done: false } 返回对象，每次调用next()方法都会恢复生成器函数的执行，并返回一个包含当前yield表达式的值和是否已经遍历完成的对象。当生成器函数执行完毕后，value属性将为undefined，done属性将为true。
console.log(gen.next()) // { value: 2, done: false }
console.log(gen.next()) // { value: 3, done: false }
console.log(gen.next()) // { value: undefined, done: true }
//在这个例子中，generator是一个生成器函数，使用function*定义。调用generator()函数返回一个迭代器对象gen。每次调用gen.next()方法都会恢复生成器函数的执行，并返回一个包含当前yield表达式的值和是否已经遍历完成的对象。当生成器函数执行完毕后，value属性将为undefined，done属性将为true。

//生成器函数还可以接受参数，通过yield表达式传递值给生成器函数，并且可以使用return语句返回一个值，表示生成器函数的结束。
function* generator2() {
    const a = yield 1
    const b = yield 2
    return a + b
}
//相当于第一次next，执行到yield 1，将1作为生成器对象的value，并暂停函数执行；第二次next，传递参数3给生成器函数，作为yield 1表达式的返回值，并将3赋值给变量a，然后将2作为生成器对象的value，然后暂停函数执行；第三次next，传递参数4给生成器函数，作为yield 2表达式的返回值，并将4赋值给变量b；最后，return a + b语句被执行，返回7，并结束生成器函数的执行。
const gen2 = generator2()
console.log(gen2.next()) // { value: 1, done: false }
console.log(gen2.next(3)) // { value: 2, done: false } 这里传递了一个参数3给生成器函数，作为yield 1表达式的返回值，并且将3赋值给变量a。在下一次调用gen2.next(4)时，传递了一个参数4给生成器函数，作为yield 2表达式的返回值，并且将4赋值给变量b。最后，return a + b语句被执行，返回7，并结束生成器函数的执行。
console.log(gen2.next(4)) // { value: 7, done: true }
//在这个例子中，generator2是一个生成器函数，使用function*定义。调用generator2()函数返回一个生成器对象gen2。每次调用gen2.next()方法都会恢复生成器函数的执行，并返回一个包含当前yield表达式的值和是否已经遍历完成的对象。在第一次调用gen2.next()时，yield 1表达式被执行，返回1，并暂停函数执行。在第二次调用gen2.next(3)时，yield 2表达式被执行，返回2，并将3传递给变量a。在第三次调用gen2.next(4)时，return a + b语句被执行，返回7，并结束生成器函数的执行。

//可以为不具备iterator接口的对象添加迭代器，使其成为可迭代对象。通过在对象上定义一个Symbol.iterator属性，并将其设置为一个函数，该函数返回一个迭代器对象。迭代器对象必须具有一个next()方法，该方法返回一个包含value和done属性的对象。
const myObj = { name: 'zhangsan', age: 18 };

// 直接把生成器逻辑写进去（最常见做法）
myObj[Symbol.iterator] = function* () {
    for (const key of Object.keys(this)) {
        yield [key, this[key]];
    }
    // 或者用 yield* 更简洁：
    // yield* Object.entries(this);
};

// 现在直接遍历对象本身
for (const [key, value] of myObj) {
    console.log(key, value);
}

//总的来说，对于迭代器，我们可以通过定义一个生成器函数来创建一个迭代器对象，并将其赋值给对象的Symbol.iterator属性，使得该对象成为一个可迭代对象。每次调用迭代器的next()方法时，生成器函数会执行到下一个yield表达式，并返回一个包含当前元素的值和是否已经遍历完成的对象。当迭代器遍历完成后，value属性将为undefined，done属性将为true。不过这个不是for of的做法，这就是用生成器来实现迭代器的做法，for of的做法是直接调用对象的[Symbol.iterator]()方法获取迭代器对象，然后反复调用next()方法，直到done为true。
// for…of 的本质就是调用对象的[Symbol.iterator]() 获取迭代器，然后反复调用.next()，直到 done 为 true

function* generator3() {
    let res = yield request('https://api.example.com/data') //这里发出请求，并暂停函数执行，等待请求完成后继续执行生成器函数。当请求完成后，gen3.next(res.data)会被调用，将请求结果传递给生成器函数，并继续执行。最终，res变量将会得到请求的结果，可以在生成器函数中进行相应的操作。
    console.log(res);
    console.log('请求完成，可以操作');
}
let gen3 = generator3()
gen3.next() // 启动生成器，执行到第一个yield，发出请求
function request(url){
    axios.get(url).then(res => {
        gen3.next(res.data) // 请求完成后，继续执行生成器，并传入请求结果
    })
}