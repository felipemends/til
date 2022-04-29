/*
  FALSY
  Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

  false
  0
  -0
  ""
  null
  undefined
  NaN
*/

console.log( NaN ? 'verdadeiro' : 'falso')

/*
  TRUTHY
  Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  'false'
  Infinity
  -Infinity
*/

console.log( {} ? 'verdadeiro' : 'falso')