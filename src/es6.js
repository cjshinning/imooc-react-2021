// 1、块级作用域
// {
//   let name = 'Jenny';
// }
// console.log(name);

// const name = 'imooc';
// name = 'react';
// console.log(name);

// 2、字符串扩展
// 字符串模板
// name = 'imooc';
// course = 'react 开发App';
// console.log('hello ' + name + ', course is ' + course);
// console.log(`hello ${name}, course is ${course}`);

// 3、函数扩展
// 参数默认值、箭头函数、展开运算符
// function hello(name) {
//   console.log(`hello ${name}`);
// }
// const hello1 = name => {
//   console.log(`hello ${name}`);
// }
// hello('imooc');
// hello1('imooc');

// setTimeout(() => {
//   console.log('xxx');
// }, 1000);

// const double = x => x * 2;
// console.log(double(5));

// const hello = (name = 'imooc') => {
//   console.log(`hello ${name}`);
// }

// hello();
// hello('Jenny');

// function hello(name1, name2) {
//   console.log(name1, name2);
// }
// arr = ['imooc', 'Jenny123'];
// // hello.apply(null, arr);
// hello(...arr);

// 3、对象扩展
// Object.keys(),Object.values(),Object.entries();
// const obj = {
//   name: 'imooc',
//   course: 'React开发App'
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const name = 'imooc';
// const obj = {
//   name,
//   [name]: 'hello ',
//   hello: function () { },
//   hello1() { }
// };
// obj[name] = 'hello imooc';
// console.log(obj);

// const obj = {
//   name: 'imooc',
//   course: 'React开发App'
// }
// const obj2 = {
//   type: 'IT',
//   name: 'Jenny'
// }
// console.log({ ...obj, ...obj2, date: '2021' });

// 4、解构赋值
// const arr = ['hello', 'imooc'];

// let arg1 = arr[0];
// let arg2 = arr[1];

// let [arg1, arg2] = arr;
// console.log(arg1, '|', arg2);

// const obj = {
//   name: 'imooc',
//   course: 'React开发App'
// }

// const { name, course } = obj;
// console.log(name, '|', course);

// 5、类的定义
// class MyApp {
//   constructor() {
//     this.name = 'imooc';
//   }
//   sayHello() {
//     console.log(`hello ${this.name}`);
//   }
// }

// const app = new MyApp();
// app.sayHello();

// 6、新的数据结构
// Set,Map,Symbol

// 7、模块化
// import { name, sayHello } from './moudle1';
// console.log(name);
// sayHello();

// import test from './moudle1';
// test();

// import * as mod1 from './moudle1';
// console.log(mod1);

