let balance = {
  incomes: [3000, 979, 477],
  expenses: [3520, 2300.50, 1000, 789.25]
}

function sum(array) {
  let total = 0;

  for(let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(balance.incomes)
  const calculateExpenses = sum(balance.expenses)

  const total = calculateIncomes - calculateExpenses

  let balanceText = 'negativo'

  if(total >= 0) {
    balanceText = 'positivo'
  } 

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()