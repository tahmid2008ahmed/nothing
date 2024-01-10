                //  javascript number methods
 
// 1, 2, 30, 49 is round number / natural number / integer number
// 2.54556, 335 is decimal / floating point number
let numberOne =20;
let numberTwo =7.5145458;
let addition = numberOne + numberTwo;

// doshomik er pore jodi beshi shongkha thake -->
console.log(addition.toFixed(3));

// doshomik e .5 er beshi hole porer shongkha hobe ar .5 er kom hole oitaii thakbe but round number hobee -->
console.log( "roundNumber", Math.round(addition));

// decimal ashlei 1 barbee -->
console.log( "ceilNumber", Math.ceil(addition));
 
// doshoik jai hok na keno doshomik thakbe naa -->
console.log( "floorNumber", Math.floor(addition));

// negetive number ke positive kora -->
let numberThree = -100;
let add = numberThree + numberOne;
console.log("negetive has been positive", Math.abs(add))

// convert floating number to integer number ar string ke number kora -->
console.log(parseInt(addition))

// convert to floating number -->
console.log(parseFloat(numberTwo))

// dice rolling
let ranmdomNumber = Math.floor(Math.random() * 7); 
console.log("dice", ranmdomNumber)

// OTP generate
let otpNumber = Math.floor(Math.random() * 9000 + 1000); 
console.log("OTP", otpNumber)


                    //function

// here default number will be 10
function long(numberFour =10, numberFive =10) {
    console.log("multiply:", numberFour*numberFive)
    console.log("substraction:", numberFour-numberFive)
    console.log("plus:", numberFour+numberFive)
    console.log("to the power:", numberFour**numberFive)
}
long(2, 6)

// if I want another type 
function greetUser(name = "Tahmid") {
    console.log(`Good Morning, ${name}`)
}
greetUser();
greetUser("Rafin");

// there is one thing which is return, it is used to save something. But if I want to console then I have to do console.log.
function multiply(numberSix, numberSeven) {
    return numberSix * numberSeven;
}
console.log("multiply", multiply(2, 8));

// function expression
const division = function () {
    console.log("division")
};
division();

// Arrow Function
const substract = (numberEight, numberNine) => numberEight - numberNine ;
let byArrow = substract(20, 10);
console.log(byArrow);


