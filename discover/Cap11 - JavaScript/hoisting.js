// var é global e também local
// hoisting: eleva a variável para o início do código

var x
console.log('> existe x antes do bloco?', x)

{
  x = 0
}

console.log('> existe x depois do bloco?', x)