const pilotos = ['Senna', 'Prost', 'Schumacher', 'Verstappen']
// a indexação (index) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Verstappen

// acessar o tamanho do array
console.log(pilotos.length)

// iterável
for (let piloto of pilotos) {
  console.log(piloto)
}

// adicionar elemento
pilotos.push('Norris')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// deletar um elemento
pilotos.splice(1, 1)

console.log(pilotos)