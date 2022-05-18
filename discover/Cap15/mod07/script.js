// Eventos
// argumento event
const input = document.querySelector('input')

input.onkeydown = function(event) {
  console.log(event.currentTarget.value)
}