let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(' A soma dos dois números é = ' + sum)
alert('A subtração dos números é = ' + sub)
alert(' A multiplicação dos dois números é = ' + multi)
alert(' A divisão dos dois números é = ' + div)
alert(' O resto da divisão dos dois números é = ' + restDiv)

let result = restDiv % 2

if (result == 0) {
  alert('O resultado da soma é : ' + sum + ' e este número é PAR !')
} else {
  alert('O resultado da soma é : ' + sum + ' e este número é IMPAR !')
}
const difference = firstNumber == secondNumber
switch (difference) {
  case firstNumber == !secondNumber:
    alert(
      `Os números que você escolheu foram ${firstNumber} e ${secondNumber} eles são diferentes !`
    )
    break

  default:
    firstNumber == secondNumber

    alert('Os números são iguais !')
    break
}
