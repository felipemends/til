// praticando

let student = {
  name: "Felipe",
  age: 31,
  weight: 71.7,
  isSubscribed: true,
}

console.log(`${student.name} de idade ${student.age} anos pesa ${student.weight} kg.`)

let students= [
  student
]

console.log(students[0])

const john = {
  name: "John",
  age: 25,
  weight: 80.8,
  isSubscribed: true
}

students[1] = john

console.log(students[1])

// lembrar do hoisting! Se uma variável só for declarada posteriormente, caso seja com var. ela sobe (hoisting), com let ela não sobe.