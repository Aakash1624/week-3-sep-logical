  //<-------------------Question No.1------------------->

  // const fruits = ['apple', 'banana', 'mango'];

  // const printFruits = (fruits) => {
  //   for (let i = 0; i < fruits.length; i++) {
  //     console.log(fruits[i]);
  //   }
  // };

  // printFruits(fruits);

  //<-------------------Question No.2------------------->
  // const name = 'Aakash';
  // const age = 20;
  // const isStudent = true;

  // console.log(name);
  // console.log(age);
  // console.log(isStudent);

  //<-------------------Question No.3------------------->
  // const sum = (a, b) => {
  //   return console.log(`Sum = ${a + b}`);
  // };

  // sum(3, 4);

  //<-------------------Question No.4------------------->

  //Without Using Reverse Method

  // const strReverse = (str) => {
  //   console.log(`The Original String : ${str}`);
  //   const splitArr = str.split('');
  //   const reverseArr = [];
  //   for (let i = splitArr.length - 1; i >= 0; i--) {
  //     reverseArr.push(splitArr[i]);
  //   }
  //   console.log(`The Reverse String : ${reverseArr.join('')}`);
  // };

  // strReverse('Aakash');

  //With Using Reverse Method

  // const strReverse = (str) => {
  //   console.log(`The Original String : ${str}`);
  //   const splitArr = str.split('');
  //   const reverseArr = splitArr.reverse();
  //   const joinArr = reverseArr.join('');
  //   console.log(`The Reverse String : ${joinArr}`);
  // }

  // strReverse('Aakash');

  //<-------------------Question No.5------------------->

  // const maxNum = (arr = []) => {
  //   arr.sort(function (a, b) {
  //     return b - a;
  //   });
  //   console.log(`Max Num = ${arr[0]}`);
  // };

  // maxNum([1, 34, 67, 900, 8900, 56, 23]);

  //<-------------------Question No.6------------------->

  // const person = {
  // name:'John',
  // age: 30,
  // city: 'New York',
  // };

  // const joinFun = ()=>{
  //   console.log(`${person.name} is ${person.age} years old and lives in ${person.city}`);
  // };

  // joinFun();

  //<-------------------Question No.7------------------->

  // const isEven = (num) => {
  //   if (num % 2 === 0) {
  //     console.log(`The Given num ${num} is Even Number`);
  //   } else {
  //     console.log(`The Given num ${num} is Odd Number`);
  //   }
  // };

  // isEven(9);

  //<-------------------Question No.8------------------->

  // let total = 0;
  // const sumOfArr = (arr = []) => {
  //   for (let i = 0; i < arr.length; i += 1) {
  //     total = total + arr[i];
  //   }
  //   console.log(`The Total = ${total}`);
  // };

  // sumOfArr([-1, 0, 1, 3]);

  //<-------------------Question No.9------------------->

  // const vowel = (str) => {
  //   let splitArr = str.toLowerCase().split('');
  //   let vowelArr = [];

  //   for (let i = 0; i < splitArr.length; i += 1) {
  //     if (splitArr[i] === 'a') {
  //       vowelArr.push(splitArr[i]);
  //     } else if (splitArr[i] === 'e') {
  //       vowelArr.push(splitArr[i]);
  //     } else if (splitArr[i] === 'i') {
  //       vowelArr.push(splitArr[i]);
  //     } else if (splitArr[i] === 'o') {
  //       vowelArr.push(splitArr[i]);
  //     } else if (splitArr[i] === 'u') {
  //       vowelArr.push(splitArr[i]);
  //     } else {
  //       continue;
  //     }
  //   }
  //   console.log(`The Vowel letter : ${vowelArr}`);
  // };

  // vowel(`apple`);

  //<-------------------Question No.10------------------->

  // const obj1 = {
  //   name: 'John',
  //   age: 30,
  // };

  // const obj2 = {
  //   city : 'New York',
  //   job : 'Engineering',
  // }

  // const mergeObj = ()=> {
  //   const obj3 = {
  //     ...obj1,
  //     ...obj2,
  //   };
  //   console.log(obj3);
  // };

  // mergeObj();

