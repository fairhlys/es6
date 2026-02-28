//Set 表示无重复值的有序列表
let set = new Set()
//1. add()方法添加元素
set.add(1)
set.add(2)
set.add(3)
set.add(3)
set.add(true)
set.add('set')
set.forEach((value,index) => {
    console.log(value,index);
})
//Set对象依旧可以使用forEach方法进行遍历，回调函数的参数分别是当前元素的值、当前元素的键（与值相同）和Set对象本身。
console.log(set) // Set(3) { 1, 2, 3 }
//2. delete()方法删除元素,按照值删除元素，返回一个布尔值，表示是否删除成功
set.delete(2)
set.delete(true)
console.log(set) // Set(2) { 1, 3 }
//3. has()方法判断元素是否存在
console.log(set.has(1)) // true
console.log(set.has(2)) // false
//4. clear()方法清空Set对象
set.clear()
console.log(set) // Set(0) {}
//5.set.size属性返回Set对象中元素的个数
console.log(set.size) // 0
//6.将set转换为数组，利用展开运算符...，可以将Set对象转换为数组。展开运算符会将Set对象中的元素逐个展开成独立的值，然后放入一个新的数组中。
let arr = [...set]
console.log(arr) // []
//7.set中的对于对象的引用无法被释放
let obj = {name:'zhangsan'}
set.add(obj)
console.log(set) // Set(1) { { name: 'zhangsan' } }
obj = null
console.log(set) // Set(1) { { name: 'zhangsan' } }
//虽然将obj变量赋值为null，但Set对象中仍然保留了对原始对象的引用，因此该对象不会被垃圾回收机制回收，仍然存在于内存中。


//Map表示键值对的集合，类似于对象，但键可以是任意类型的值。一般可以用于哈希表的实现。
let map = new Map()
//1. set()方法添加元素，接受两个参数，分别是键和值
map.set('name','zhangsan')
map.set('age',18)
map.set('gender','male')
console.log(map) // Map(3) { 'name' => 'zhangsan', 'age' => 18, 'gender' => 'male' }
//2. get()方法获取元素，接受一个参数，表示要获取的键，返回对应的值，如果键不存在则返回undefined
console.log(map.get('name')) // zhangsan
console.log(map.get('age')) // 18
console.log(map.get('gender')) //   male
console.log(map.get('address')) // undefined  
//3. has()方法判断元素是否存在，接受一个参数，表示要判断的键，返回一个布尔值，表示是否存在
console.log(map.has('name')) // true
console.log(map.has('age')) // true
console.log(map.has('gender')) // true
console.log(map.has('address')) // false
//4. delete()方法删除元素，接受一个参数，表示要删除的键，返回一个布尔值，表示是否删除成功
map.delete('age')
console.log(map) // Map(2) { 'name' => 'zhangsan', 'gender' => ' male' }
//5. clear()方法清空Map对象
map.clear()
console.log(map) // Map(0) {}
//6. size属性返回Map对象中元素的个数
console.log(map.size) // 0
//7.将Map转换为数组，利用展开运算符...，可以将Map对象转换为数组。展开运算符会将Map对象中的键值对逐个展开成独立的数组元素，然后放入一个新的数组中。
const map1 = new Map([['name', 'zhangsan'], ['age', 18], ['gender', 'male']])
let arr2 = [...map1]
console.log(arr2) // [['name', 'zhangsan'], ['age', 18], ['gender', 'male']]