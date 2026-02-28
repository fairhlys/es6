// promise是异步编程的一种解决方案，比传统的回调函数更合理和强大
//promise对象有三种状态：pending（等待态）、fulfilled（成功态）和rejected（失败态）
//promise对象的状态只能从pending变为fulfilled或rejected，不能逆转
//promise对象的then方法接受两个参数：onFulfilled和onRejected，分别对应成功和失败的回调函数
//then方法返回一个新的promise对象，可以链式调用
const promise = new Promise((resolve, reject) => {
  //异步操作
  if (/*成功*/1) {
    resolve(value); //将promise对象的状态改为fulfilled，并传递成功的值
    } else {
    reject(error); //将promise对象的状态改为rejected，并传递失败的原因
  }
});
promise.then(
  value => {
    //成功的回调函数，处理成功的值
  },
  error => {
    //失败的回调函数，处理失败的原因
  }
);

//async与await是基于promise的语法糖，使得异步代码看起来像同步代码，更加简洁和易读
//async函数返回一个promise对象，可以使用await关键字等待promise对象的结果
async function asyncFunction() {
    try {
        const result = await promise; //等待promise对象的结果，如果promise对象的状态是fulfilled，则将成功的值赋给result变量；如果promise对象的状态是rejected，则抛出错误并进入catch块
        //处理成功的结果
    } catch (error) {
        //处理失败的错误
    }
}