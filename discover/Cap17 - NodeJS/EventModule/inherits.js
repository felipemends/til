const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const dbz = new Character('DBZ')
dbz.on('help', () => console.log(`Kakaroto!! ${dbz.name}`))

console.log('Mais de 8 mil!!')
dbz.emit('help')