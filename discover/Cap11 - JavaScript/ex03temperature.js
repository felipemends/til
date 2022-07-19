function transformTemperature(temperature) {
  const celsiusexists = temperature.toUpperCase().includes('C')
  const fahrenheitExists = temperature.toUpperCase().includes('F')

  if(!celsiusexists && !fahrenheitExists) {
    throw new Error ('Informação incorreta')
  } 

  // fluxo ideal, F => C
  let upgradedTemperature = temperature.toUpperCase().replace("F", "")
  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'


  // fluxo alternativo
  if(celsiusexists) {
    upgradedTemperature = temperature.toUpperCase().replace("C", "")
    formula = (celsius) => celsius *9/5 + 32
    degreeSign = 'F'
  }



  return formula(upgradedTemperature) + degreeSign
}

try {
  console.log(transformTemperature('50f'))
  console.log(transformTemperature('10c'))
  console.log(transformTemperature('50z'))
} catch (error) {
  console.log(error.message)
}