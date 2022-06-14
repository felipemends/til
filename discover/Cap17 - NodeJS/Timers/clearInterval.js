// clearInterval irá cancelar um setInterval registrado
const timeout = 1000
const checking = () => console.log('check in!')

let interval = setInterval(checking, timeout)

setTimeout( () => clearInterval(interval), 3005)