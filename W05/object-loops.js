const products = [
    { // 1
        name: "Blue Shirt",
        price: 10,
        discountedPrice: 8,
        description: 'Best Shirt in market'
    },
    { // 2
        name: "Hat",
        price: 15
    },
    { // 3
        name: "Coat",
        price: 100
    },
    { // 4
        name: "Ring",
        price: 72
    },
    { // 5
        name: "Bag",
        price: 19
    },
    { // 6
        name: "Scarf",
        price: 9
    },
    { // 7
        name: "Shoes",
        price: 57
    },
    { // 8
        name: "Underware",
        price: 7
    },
    { // 9
        name: "shocks",
        price: 3
    },
    { // 10
        name: "T-shirt",
        price: 50
    }
]

// for in loop -> for (let in object)
for (let key in products[0]) {
    // console.log(key)
}

// for of loop -> for (let of Object.keys(object)) ES6
for (let key in Object.keys(products[0])) {
    // console.log("For of: ", key)
}

// Object.entries(object).forEach(function...) ES6
// Object.entries(products[0]).forEach(key => console.log("Key:", key[0], " has value:", key[1]))

for (let key in products) {
    // console.log(products[key])
}

// iterables = arrays, objects

// add an item to an array at the beginning
products.unshift(1);
console.log(products)

products.shift();
console.log(products)

const myName = "Alkis";
// console.log(myName.toLowerCase())
// console.log(myName.toUpperCase())

let blog = [
    {
        title: "title1",
        text: "text1 this is text number 1",
        comments: ["comments1 this is comment number 1"],
        author: "author1",
        discription: "description1"
    },
    {
        title: "title2 3",
        text: "text2 this is text number 2",
        comments: ["comments2 this is comment number 2"],
        author: "author2",
        discription: "description2"
    },
    {
        title: "title3 this",
        text: "text3 this is text number 3",
        comments: ["comments3 this is comment number 1"],
        author: "author2",
        discription: "description3"
    }
]

function search(searchText, array) {

    const results = [];

    for (let i = 0; i < array.length; i++) {

        Object.entries(array[i]).every(item => {

            console.log("Inside foreach loop for the object keys: item=", item)
            if (item[1].includes(searchText)) 
            { 
                results.push(array[i]);
            }
        })
    } 
    // return array.filter(item => item.title.includes(searchText) || item.text.includes(searchText) || item.discription.includes(searchText) )
    return results

}

console.log(search("3", blog))

const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];
let counter = [];
for(i=0; i<duplicatedsArr.length; i++){
    for(j= i + 1; j<duplicatedsArr.length; j++){
        if(duplicatedsArr[j]== duplicatedsArr[i]){

            duplicatedsArr.splice(j, 1);
        }
    }

}
console.log(duplicatedsArr)