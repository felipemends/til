// Função impura

// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
  return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
  name: 'Rafael Camarda',
  age: 'jovem'
}

function changeName(name) {
  person.name = name
}

// Função pura

// Exemplo 1
const calculateCircumferente = function (pi, radius) {
  return pi * (radius * radius)
}

// com arrow function
const calculateCircumferente = (pi, radius) => pi * (radius * radius)

// Exemplo 2
const changePersonName = (person, name) => ({...person, name})