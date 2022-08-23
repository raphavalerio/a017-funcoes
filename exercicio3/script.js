let soma = (num1, num2) => {
    return `Valor da soma: ${num1 + num2}`
}

let subtracao = (num1, num2) => {
    if (num1 >= num2) {
        return `Valor da subtração: ${num1 - num2}`
    } else {
        return `Valor da subtração: ${num2 - num1}`
    }
}

let divisao = (num1, num2) => {
    if (num2 != 0) {
        return `Valor da divisão: ${num1 / num2}`
    } else {
        return `Valor da divisão: ${num2 / num1}`
    }
}

let multiplicacao = (num1, num2) => {
    return `Valor da multiplicação: ${num1 * num2}`
}

num1 = +prompt('Digite o primeiro número.')
num2 = +prompt('Digite o segundo número.')

console.log(`${soma(num1, num2)}\n${subtracao(num1, num2)}\n${multiplicacao(num1, num2)}\n${divisao(num1, num2)}`)