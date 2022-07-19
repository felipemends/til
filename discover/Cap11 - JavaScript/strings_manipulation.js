// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepípedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// transformar um número quebrado em 2 casa decimais e trocar ponto por vírgula
let number1 = 46577.577546
console.log(number1.toFixed(2).replace(".", ","))

// Transforme letras minúsculas em maiúsculas. Faça o contrário também
let word1 = "Programar é muito bacana!"
console.log(word1.toLocaleLowerCase()) // ou "toUpperCase()"

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLocaleLowerCase())