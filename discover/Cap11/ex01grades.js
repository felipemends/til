let grade = -10

function getGrade(grade) {
let gradeA = grade >= 90 && grade < 100
let gradeB = grade >= 80 && grade < 90
let gradeC = grade >= 70 && grade < 80
let gradeD = grade >= 60 && grade < 70
let gradeF = grade < 60 && grade >= 0

let gradeFinal;

if(gradeA) {
  gradeFinal = 'A'
} else if(gradeB) {
  gradeFinal = 'B'
} else if(gradeC) {
  gradeFinal = 'C'
} else if(gradeD) {
  gradeFinal = 'D'
} else if(gradeF) {
  gradeFinal = 'F'
} else {
  gradeFinal = 'Nota inválida'
}

return(gradeFinal)
}

console.log(getGrade(101))
console.log(getGrade(73))
console.log(getGrade(65))
console.log(getGrade(78))
console.log(getGrade(93))
console.log(getGrade(60))
console.log(getGrade(52))
console.log(getGrade(25))
console.log(getGrade(80))
console.log(getGrade(-53))