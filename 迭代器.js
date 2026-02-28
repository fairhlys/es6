//iterator迭代器是一种对象，它定义了一个序列，并且可以在这个序列上进行迭代。迭代器对象具有一个next()方法，每次调用该方法都会返回一个包含value和done属性的对象。value属性表示当前元素的值，done属性表示是否已经遍历完成。
//迭代器可以用于遍历各种数据结构，如数组、字符串、Map、Set等。迭代器提供了一种统一的方式来访问这些数据结构中的元素，而不需要关心它们的内部实现细节。

const item = ['one', 'two', 'three']
console.log(item[Symbol.iterator]) // [Function: values]
const iterator = item[Symbol.iterator]() //调用item[Symbol.iterator]()方法返回一个迭代器对象iterator。每次调用iterator.next()方法都会返回一个包含当前元素的值和是否已经遍历完成的对象。当迭代器遍历完成后，value属性将为undefined，done属性将为true。
console.log(iterator.next()) // { value: 'one', done: false }
console.log(iterator.next()) // { value: 'two', done: false }
const { value, done } = iterator.next()
console.log(value,done);
console.log(iterator.next()) // { value: undefined, done: true }
//在这个例子中，item是一个包含三个元素的数组。通过访问item[Symbol.iterator]属性，我们可以获取到一个迭代器函数。调用这个函数返回一个迭代器对象，我们可以使用next()方法来遍历这个迭代器对象，每次调用都会得到一个包含当前元素的值和是否已经遍历完成的对象。当迭代器遍历完成后，value属性将为undefined，done属性将为true。

//利用itemp[Symbol.iterator]()方法，可以创建一个迭代器对象来遍历数组中的元素。每次调用next()方法都会返回一个包含当前元素的值和是否已经遍历完成的对象。当迭代器遍历完成后，value属性将为undefined，done属性将为true。
