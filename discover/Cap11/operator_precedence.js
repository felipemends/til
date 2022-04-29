/*
  Operator precedence

  * grouping                      ( )
  * negação e incremento          ! ++ --
  * multiplication and division   * /
  * adition and subtraction       + -
  * relacional                    < <= > >=
  * igualdade                     == != === !==
  * AND                           &&
  * OR                            ||
  * condicional                   ?:
  * assignment                    = += -= *=
*/

console.log( 2 + 5 * 10)  // 52
console.log( (2 + 5) * 10)  // 70

console.log( 3 > 2 > 1) // false

console.log( true === 1)  // false
console.log( true == 1) // true

console.log( 3 > 2 && 2 > 1)  // true