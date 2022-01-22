const a = {
    name: 'alkis',
    address: 'berlin'
}

const b = a;

console.log('a', a)
console.log('b', b)

a.name = 'john'

console.log('REPRINTING')
console.log('a', a)
console.log('b', b)

let c = 3
let d = c
console.log('c', c)
console.log('d', d)
c = 4
console.log('c', c)
console.log('d', d)
