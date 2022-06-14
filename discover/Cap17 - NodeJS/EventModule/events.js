const { EventEmitter } = require('events')

const ev = new EventEmitter()

/* ev.on('saySomething', (message) => {
  console.log('Eu escutei!', message)
})*/

ev.once('saySomething', (message) => {
  console.log('Eu escutei!', message)
})

ev.emit('saySomething', 'Felipe')
ev.emit('saySomething', 'Mayk')
ev.emit('saySomething', 'Mozão')
