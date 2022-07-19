/*
  Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}
const felipe = new Person("Felipe")
const joao = new Person("João")
console.log(felipe.walk())
console.log(joao.walk())