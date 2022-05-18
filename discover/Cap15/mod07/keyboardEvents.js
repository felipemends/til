// Eventos

const h1 = document.querySelector('h1')

h1.addEventListener('click', print) // ou 'mouseover','mouseout'

function print() {
  console.log('print')
}