// KNOWN PARTS / UNKNOWN PARTS

// 9 pizzas each one has 8 pieces and there 10 people.
// How many pieces should each person should take if we divide equally all pizzas. 

// + - * / =

// 1. multip/ division 
// 2. addition / substraction

function checkThis(){
    console.log("This is = ", this);
}
// checkThis();

const arrowFunction = () => {
    console.log("Arrow Function: this is=", this)
}

arrowFunction();

function calculatePortions(pizzas, piecesPerPizza, people) {
    // const pizzas = 9;
    // const piecesPerPizza = 8;
    // const people = 10;
    let piecesPerPortion = 0;
    
    piecesPerPortion = (pizzas * piecesPerPizza) / people;

    // if (piecesPerPortion < 3) {
    //     let message = "Not enough pieces for everyone";
    // } else if (piecesPerPortion === 8) {
    //     let message = "Warning! You are going to eat more that normal"
    // } else {
    //     let message = "All good"
    // }

    if (piecesPerPortion < 3) {
        let message = "Not enough pieces for everyone";
    } 
    
    if (piecesPerPortion === 8) {
        let message = "Warning! You are going to eat more that normal"
    } else {
        let message = "All good"
    }

}

calculatePortions();