// setInterval irá rodar uma função N vezes
// depois de X milissegundos

const timeout = 1000
const checking = () => console.log('check in!')

setInterval(checking, timeout)