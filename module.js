//es6模块功能主要有以下几个方面：
//1. 导出和导入：ES6模块允许我们使用export关键字导出变量、函数、类等，并使用import关键字导入这些导出的内容。这样可以实现代码的模块化和复用。
export const name = 'Alice';
export function sayHello() {
  console.log('Hello, ' + name);
}
//在上面的代码中，我们使用export关键字导出了一个变量name和一个函数sayHello()，这样它们就可以在其他模块中被导入和使用了。
//2. 默认导出：ES6模块还支持默认导出，即使用export default关键字导出一个值，这个值可以是变量、函数、类等。默认导出允许我们在导入时使用任意名称来引用这个值。
// export default function greet() {
//     console.log('Hello, ' + name);
// }
//在上面的代码中，我们使用export default关键字导出了一个函数greet()，这样它就成为了模块的默认导出。在其他模块中，我们可以使用任意名称来引用这个函数，例如：
import greetFunction from './module.js';
greetFunction(); // 输出: Hello, Alice
//3. 模块加载：ES6模块是静态加载的，这意味着模块在编译时就会被加载和解析，而不是在运行时动态加载。这使得模块之间的依赖关系更加明确，并且可以进行更好的优化和错误检查。
//4. 模块作用域：ES6模块具有自己的作用域，这意味着在一个模块中定义的变量、函数、类等只能在该模块内部访问，除非它们被导出并在其他模块中导入。这有助于避免命名冲突和全局变量污染。
//5. 模块循环依赖：ES6模块支持循环依赖，即两个或多个模块相互导入对方的内容。ES6模块会在编译时解析模块之间的依赖关系，并且在运行时正确处理循环依赖，确保模块能够正常工作。

// 如果是导出的是变量或者函数，那么在导入时需要使用花括号{}来指定要导入的内容，例如：
import { name, sayHello } from './module.js';
sayHello(); // 输出: Hello, Alice
// 如果是默认导出的内容，那么在导入时可以使用任意名称来引用这个内容，例如：
const object = {}
export default object;
import myObject from './module.js';
console.log(myObject); // 输出: { ... }


//ES6模块还支持动态导入，即使用import()函数来动态加载模块。动态导入返回一个Promise对象，可以在需要的时候加载模块，而不是在编译时就加载。这对于按需加载和代码分割非常有用。
import('./module.js')
  .then(module => {
    // 使用导入的模块
    console.log(module.name);
    module.sayHello();
  })
  .catch(error => {
    // 处理加载模块时的错误
    console.error('Error loading module:', error);
  });