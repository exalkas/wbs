const array = [1, 2, 3, 4, 5]

// array.forEach(sumIt)  // forEach = Higher Order Function. sumIt = callback function

function sumIt() {
    console.log(2);
}

// MAP

const newArray = array.map(item => "<div>Number of products is " + item + "</div");
// console.log(newArray)
// Filter
const filterResults = array.filter(item => item > 1);
// console.log(filterResults)

// REDUCE
const reduceResult = array.reduce( (total, item) => total + item)
// console.log(reduceResult)

const arrayString = ['j', 'o', 'h', 'n']

const reduceResult2 = array.reduce( (total, item) => total * item)
console.log(reduceResult2)
