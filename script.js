'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive');

// function
function logger() {
    console.log('My name is Yong');
}

// calling / running / invoking function
logger();
logger();
logger();


function fruitProccessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`; 
    return juice;
}

fruitProccessor(5, 0); // 5 0 console 뜸

const appleJuice = fruitProccessor(5, 0);
console.log(appleJuice); //Juice with 5 apples and 0 oranges console

console.log(fruitProccessor(5, 0)); // //Juice with 5 apples and 0 oranges console

const appleOrangeJuice = fruitProccessor(2,4);
console.log(appleOrangeJuice);