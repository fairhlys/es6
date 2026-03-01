//es6的类
//constructor方法是一个特殊的方法，用于创建和初始化对象实例。当我们使用new关键字创建一个类的实例时，constructor方法会被自动调用。我们可以在constructor方法中定义一些属性和方法，以便在创建实例时进行初始化。
//类的原型方法是定义在类的原型对象上的方法，这些方法可以被类的所有实例共享。当我们在类中定义一个方法时，这个方法会被添加到类的原型对象上，而不是每个实例上。这意味着所有实例都可以访问这个方法，而不需要为每个实例创建一个独立的方法副本。这种共享机制可以节省内存，并且使得代码更加高效。
class Person {
  constructor(name) {
    this.name = name
  }
    sayHello() { // 定义一个原型方法
    console.log(`Hello, my name is ${this.name}`);
    return 1
  }
}

const person = new Person('Alice');
person.sayHello(); // 输出: Hello, my name is Alice
const person2 = new Person('bob')
person2.sayHello(); // 输出: Hello, my name is bob
//在上面的代码中，sayHello方法是定义在Person类的原型对象上的方法，因此所有Person类的实例都可以访问这个方法。当我们创建person和person2两个实例时，它们都可以调用sayHello方法，并输出相应的结果。这种共享机制使得代码更加高效，因为我们不需要为每个实例创建一个独立的方法副本。

//类的继承是指一个类可以继承另一个类的属性和方法，从而实现代码的复用和扩展。在ES6中，我们可以使用extends关键字来实现类的继承。子类可以通过super关键字调用父类的构造函数和方法，以便在子类中进行初始化和扩展。
class Student extends Person {
  constructor(name, grade) {
    super(name) // 调用父类的构造函数，初始化name属性
    // Person.call(this,name) // 另一种调用父类构造函数的方式，效果与super(name)相同,但不推荐使用，因为它不支持继承父类的原型方法和静态方法。
    this.grade = grade // 初始化grade属性
  }

    sayGrade() { // 定义一个新的方法
    console.log(`I am in grade ${this.grade}`);
  }
    sayHello() { // 重写父类的sayHello方法
    return super.sayHello() // 调用父类的sayHello方法，并返回结果
  }
}

const student = new Student('Charlie', 10);
console.log(student.sayHello()); // 输出: Hi, I'm Charlie and I'm in grade 10
student.sayGrade(); // 输出: I am in grade 10
//在上面的代码中，Student类通过extends关键字继承了Person类的属性和方法。在Student类的构造函数中，我们使用super关键字调用了父类的构造函数来初始化name属性，并且在Student类中定义了一个新的方法sayGrade()来输出学生的年级。当我们创建student实例时，它可以调用父类的sayHello()方法和子类的sayGrade()方法，并输出相应的结果。这种继承机制使得代码更加简洁和易于维护。