// a

let nome = prompt('Qual seu nome?')

function a() {
    console.log(`Olá, ${nome}`);
}

a()

// b

// function seis(){
//     console.log(6,12,28,24,30,36,42,48,54,60)
// }

// seis()

function tabuada () {
    const num = prompt("Digite um número para tabuada")
    for (i=0; i<=10; i++) {
        console.log(i*num)
    }
}

tabuada()

// c

let nome = function(nome) {
    console.log(`Olá, ${nome}`);
}
nome('Raphael')

let nome = (nome) => {
    return `Olá, ${nome}`
}

console.log(nome('Joanna D\'arc'));