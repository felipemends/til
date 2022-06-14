const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para eu melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
  
})

process.on('exit', () => {
  console.log(`
    Muito bom, Felipe!

    O que você aprendeu hoje foi:
    ${answers[0]}

    Aborrecimentos:
    ${answers[1]}

    Feliz:
    ${answers[2]}

    Pessoas ajudadas:
    ${answers[3]}

    Continue assim!
  `)
})