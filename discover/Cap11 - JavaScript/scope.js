// const e let são locais e só funcionam no escopo onde foi criada
const y = 0
{
  const y = 1
  console.log('> existe y?', y)
}

console.log('> existe y depois do bloco?', y)

// escopo e visibilidade para variáveis
// const pode ter o mesmo nome em escopos diferentes