const products = [
    { // 1
        name: "Blue Shirt",
        price: 10
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
const carts = [
    { // 1
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 2
        user: "alkis",
        product: "shocks",
        quantity: 2
    },
    { // 3
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 4
        user: "john",
        product: "Underware",
        quantity: 3
    },
    { // 5
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 6
        user: "george",
        product: "Hat",
        quantity: 3
    },
    { // 7
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 8
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 9
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 10
        user: "alkis",
        product: "Hat",
        quantity: 3
    }
]

function listProductsForUser(user, array) {
    console.log(array.filter(item => item.user === user))
}

// listProductsForUser('george', carts)

function getTotalItemsForUser(user, array) {
    // 1. find the objects for that user
    // const items = array.filter(item => item.user === user)
    // console.log(items)
    // 2. sum the quantities

    // const total = items.reduce((total, item) => total + item.quantity, 0)

    const total = array
    .filter(item => item.user === user)
    .reduce((total, item) => total + item.quantity, 0);
    
    console.log("total = ", total)
}

// getTotalItemsForUser("alkis", carts);

function getTotalCartForUser(user, cartArray, productArray) {
    // 1. find the products for the user
    const userItems = cartArray.filter(item => item.user === user);

    console.log("All items: ", userItems)
    // 2. find the quantities for each product 

    const itemsWithPrices = userItems.map(item => {
        
        const product = productArray.filter(product => product.name === item.product)
        console.log("Product = ", product)

        console.log("Product=", product[0].price)
        // return item.quantity * product[0].price
    })

    console.log("Prices=", itemsWithPrices)
    // 3. get the price

    // 4. get the total
}

getTotalCartForUser("alkis", carts, products)

function getTotalCartForUser(user, cartsArray, productsArray) {

    const userItems = [];

    for(let i = 0; i < cartsArray.length; i++ ) {
        if (cartsArray[i].user === user) {
            userItems.push(cartsArray[i])
        }
    }

    const itemsWithPrices = [];

    const prices = [];

    for(let i = 0; i < userItems.length; i++) {

        for (i1 = 0; i1 < productsArray.length; i1++) {
            if (userItems[i].product === productsArray[i1].name) {
                itemsWithPrices.push(productsArray[i1]);
                break;
            }
        }
    }

    for (let i = 0; i < itemsWithPrices.length; i++) {
        prices.push(userItems[i].quantity * itemsWithPrices[i].price)
    }
   
    total = prices.reduce((total, item) => total + item)

    console.log(userItems)
    console.log(itemsWithPrices)
    console.log(prices)
    console.log(total)
}

