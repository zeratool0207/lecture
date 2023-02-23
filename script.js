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
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// // Arrow 다른 표현
// // 함수 안에서 한번 더 거쳐야 할 때
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log( yearsUntilRetirement(1991) ); // 19

// // Arrow 다른 표현
// // 함수 안에서 한번 더 거쳐야 할 때
// // 여러개의 parameter ( 매개변수 )를 가질 때
// const yearsUntilRetirementMany = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log( yearsUntilRetirementMany(1991, 'Jonas') ); // Jonas retires in 19 years
// console.log( yearsUntilRetirementMany(1988, 'Yong') ); // Yong retires in 16 years

// 5강. 함수 내에서 다른 함수 호출
// function cutFruitPieces(fruit) {
//     return fruit * 2; // 여기만 바꾸면 됌!!
// }

// function fruitProccessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
    
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`; 
//     return juice;
// }

// console.log(fruitProccessor(2,3));

// 6강. 함수 강의 복습
const calcAge = function(birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirementMany = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if ( retirement > 0 ) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has been retired!!`);
        return -1;
    }
}

console.log(yearsUntilRetirementMany(1991,'Jonas'));
console.log(yearsUntilRetirementMany(1950,'Yong'));

//결과
//Jonas retires in 19 years
//Yong has been retired!!


// Function Declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// // Function Expression
const calcAge = function(birthYear) {
    return 2037 - birthYear;
};

// // Arrow function
const calcAge = birthYear => 2037 - birthYear;





















