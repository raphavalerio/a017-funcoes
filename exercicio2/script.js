// a

let soma = (num1,num2) => {
    return num1 + num2
}
console.log(soma(20,6));

// b

let booleano = (num1,num2) => {
    return num1 >= num2
}

console.log(booleano(2,4));

// c

let par = (num) => {
    if (num % 2 === 0) {
        return 'Número par'        
    } else {
        return 'Número ímpar'
    }
}

console.log(par(1));

// d

let mensagem = prompt('Digite um mensagem.')

const tamanhoEMaiuscula = (string) => {
    return `Tamanho da mensagem: ${string.length} caratcteres.\nMensagem em caixa alta: ${string.toUpperCase()}`
}

console.log(tamanhoEMaiuscula(mensagem))


// function exD(frase){
//     console.log(
//         `Tamnho da mensagem: ${mensagem.length} caracteres\nMaiúsculas: ${mensagem.toUpperCase()}`
//     )
// }
// exD(mensagem)



// const tamanhoString = (string) =>{

//     console.log(`Tamanho da mensagem: ${string.length} caracteres.\nFrase maiúscula: ${string.toUpperCase()}`)  
//     console.log(`O tamanho da string  \"${string.toUpperCase()}\" é ${string.length} caracteres. `)

// }

// const string1 = prompt(`Digite uma frase: `)

// tamanhoString(string1)