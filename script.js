'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive');

// 2강. function
// function logger() {
//     console.log('My name is Yong');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();


// function fruitProccessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`; 
//     return juice;
// }

// fruitProccessor(5, 0); // 5 0 console 뜸

// const appleJuice = fruitProccessor(5, 0);
// console.log(appleJuice); //Juice with 5 apples and 0 oranges console

// console.log(fruitProccessor(5, 0)); // //Juice with 5 apples and 0 oranges console

// const appleOrangeJuice = fruitProccessor(2,4);
// console.log(appleOrangeJuice);

// 3강. function declaratation vs Expression

// Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// } 

// // 함수 실행 후 변수에 담기
// const age1 = calcAge1(1991);
// //console.log(age1);  // 46


// //익명함수
// // Fnction Expression
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2); // 46 46

// 4강 Arrow Function
// birthYear => 2037 - birthYear; // 얘를 그대로 붙여줌 ( 함수식 )
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);