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
//ajax就是xhr的封装，基于promise实现的异步请求库，可以更方便地进行网络请求和数据处理
//fetch是基于promise的现代化网络请求API，提供了更简洁和强大的接口来进行网络请求和数据处理

//race()方法接受一个可迭代对象（如数组）作为参数，返回一个新的promise对象，该对象在第一个promise对象完成时就会完成，无论是成功还是失败。
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'promise1');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'promise2');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // 输出 'promise1'，因为它在100毫秒后完成，而promise2在200毫秒后完成
});




function requestImg(imgsrc) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.src = imgsrc
  })
}
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('请求超时'))
    }, 5000)
  })
}
Promise.race([requestImg('https://example.com/image.jpg'), timeout()])
  .then(img => {
    // 处理成功的图片
  })
  .catch(error => {
    // 处理请求超时的错误
    console.log(error.message)
})
//这个作用是在请求图片时设置一个超时时间，如果图片在5秒内加载成功，则返回图片；如果图片在5秒内没有加载成功，则抛出一个错误，提示请求超时。通过Promise.race()方法实现，当第一个promise对象完成时，无论成功还是失败，都会返回该promise对象的结果。
