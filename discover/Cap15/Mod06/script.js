// Criando e adicionando elementos
const div = document.createElement('div')

div.innerText = "Olá Devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)