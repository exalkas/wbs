
const a = 2
const b =1

function test() {

    console.log('A')
    setTimeout(() => console.log('B'), 0) // asynchronous
    console.log('C')
}

test()

console.log('D')
console.log('E')
console.log('F')
console.log('G')