const someObject = {
    student1: "Alkis",
    student2: "Jim",
    student3: "John"
}

function theThisExplanation () {
    // console.log("This is from the regular function: ", this);
    console.log("Regular function: ", this.someObject)
}

// theThisExplanation();

const arrowFunction = () => { //  => FAT ARROW, -> arrow
    console.log("This is from the arrow function", this.someObject);
}

// arrowFunction();

// Modulo / Remainder

// numberA / numberB
// 4/2 = 0
// 10/7 = 3

// const remainder = 10 % 7;

// console.log("Remainder=", remainder)

const d = new Date();
let day = d;
let hours = d.getHours();

switch (d.getDay()){
   case 0:
       day= "Sunday";
       break;
    case 1:
       day= "monday";
       break;
    case 2:
        day= "Tuesday";
        break;
   case 3:
        day= "Wednesday";
        break;
    case 4:
        day= "Thursday";
        break;
    case 5:
        day= "Friday";
        break;
    case 6:
        day= "Saturday";
        break;
} 

if (hours > 12){
    hours= hours -12 + " PM";
}

console.log("Today is ", day);

console.log("and it is  ", hours,":", d.getMinutes(),":", d.getSeconds());