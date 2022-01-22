function todaysFirstFunction () { //Signature
                                    // Body
}

// Named functions and is also a Regular function
function todaysSecondFunction () {
    const age= 3;
}

//Anonymous
const someVariable = () => {

}

const secondVariable = todaysSecondFunction()
// console.log(secondVariable)

// Arrow functions
const arrow1 = (argument1) => {

}

const arrow2 = argument1 => {
    
}

const arrow3 = argument => console.log(argument + 3)

// arrow3(5)

/**
 * SCOPE
 */

// Global scope
const message2 = "Goodbye"
{ // Local Scope
    const message = "Hello"
    // console.log(message)
    // console.log(message2)
}

// console.log(message)

if (true) {
    const message = "Hello"
}

function asdf () {

}

// Closure
// Inner and outer scope
function customForEach () {
    const message = "Hi from outside" // Local for the outter block

    function innerFunction () {
        const innerMessage = "Hi from inside" // Local for the inner block
        console.log(message)
    }
    // console.log(innerMessage)
    innerFunction();
}

// const testOut = customForEach()
// testOut()

// Hoisting
// printMe()

function printMe() {
    console.log("I am printed")
}

/**
 * Higher Order Functions / First Class Functions
 * Functions that accept other functions as argument
 */

function hof (anotherFunction) { // Higher Order Function

    anotherFunction()

}

function printSomething () { 
    console.log("Hello from another function")
}

// hof(printSomething)



// array.forEach(item => console.log(item))
// array.forEach(item => console.log(item + 2))

function customForEach(array, munchen) {
    for (let i = 0; i < array.length; i++) {
        console.log(munchen(array[i]));
    }
}

function multiply(number) {
    return number * 2;
}
function subtract(number) {
    return number - 2;
}

// customForEach(array, multiply)
// customForEach(array, subtract)

// console.log(multiply)
const array1 = [1 , 2, 3, 4, 5]

const deletedItem = array1.splice(2, 1) // it mutates the array
// console.log(deletedItem)

// console.log(array1)

function convert(temperature, convertCalculation) {
    console.log(convertCalculation(temperature))
}

function ctf(temperature) {
    return temperature * 32;
}
function ftc(temperature) {
    return temperature / 32;
}

function ktc(temperature) {
    return temperature + 32;
}

convert(30, ctf)