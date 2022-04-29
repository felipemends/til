// Operadores Condicional (Ternário)

// Dependenda da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

let pao = true
let queijo = false

const niceBreakfast = pao && queijo ? 'Café top' : 'Café meh'

console.log(niceBreakfast)

// Maior que 18
let age = 18
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)