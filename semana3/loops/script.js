//EXERCÍCIO 1

/*

let sum = 0
for (let i = 0; i < 15; i++) {
    sum += i
}
console.log(sum)

// O que o código abaixo está fazendo? 
// Qual o resultado impresso no console? 
// RESPOSTA: a variável soma recebe seu próprio valor mais o valor de i, parando a execução quando i for igual a 15.
//  105

*/

//Exercício 2

/*

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for (const item of lista) {
    if (item % numero === 0) {
        novaLista.push(item)
    }
}
console.log(novaLista)

    // a.  O que o comando `.push` faz?
    // RESPOSTA: O comando push cria um novo espaço no array e adicona um valor nele.

    // b.  Qual o valor impresso no console?
    // RESPOSTA: (4) [5, 10, 15, 25, 30]
    
    // c.  Qual **seria** imprimido no console se a variável `numero` 
    // tivesse o valor de `3`? E se tivesse o valor de `4`?
    // RESPOSTA: Se tivesse valor de 3, imprimiria o tamanho do array e os múltiplos de 3 presente na array lista. -> (6) [12, 15, 18, 21, 27, 30]
    //           Se tivesse valor de 4, imprimiria o múltiplo de 4 presente na array lista. -> [12]

*/

//EXERCÍCIO 3

// 3a.  Escreva um programa que devolva o maior e o menor números contidos no array original

/*

const original = [12, 43, 5, 7, 31, 6732, 2999999, 6, 12, 4, 6, 224, 43, 23, 7, 323, 7, 32, 6,]

let maior = 0

for (const verifica of original) {
    if (verifica > maior) {
        maior = verifica
    }
}

let menor = maior

for (const verifica of original) {
    if (verifica < menor) {
        menor = verifica
    }
}

console.log("Maior número: " + maior)
console.log("Menor número: " + menor)

*/

// 3b.  Escreva um programa que devolva um novo array contendo todos 
//     os valores do array original divididos por 10.

/*

const original = [12, 43, 5, 7, 31, 6732, 2999999, 6, 120, 4, 6, 224, 43, 23, 7, 323, 7, 32, 60,]
let div10 = []

for (verifica of original) {
    div10.push(verifica/10)
}

console.log(div10)

*/

// 3c.  Escreva um programa que devolva um novo array contendo, somente, 
//     os números pares do array original.

/*

const original = [12, 43, 5, 7, 31, 6732, 2999999, 6, 120, 4, 6, 224, 43, 23, 7, 323, 7, 32, 60,]
let pares = []

for (verifica of original) {
    
    if (verifica % 2 == 0) {
        pares.push(verifica)
    }
}

console.log(pares)

*/


// 3d.  Escreva um programa que gere um novo array contendo strings, da 
//     seguinte forma: "O elemento do índex i é: numero"

/*

const original = [12, 43, 5, 7, 31, 6732, 2999999, 6, 120, 4, 6, 224, 43, 23, 7, 323, 7, 32, 60]


for (let index = 0; index < original.length; index++) {
    
    console.log("O elemento do índex " + index + " é: " + original[index])
}

*/

// DESAFIO 1

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

// RESPOSTA: DEI MOLE! Fui direto olhar a saída no terminal. Agora eu já sei a resposta ...

// DESAFIO 2

let numero = []

numSecreto = prompt("Jogador 1 digita um número: ")
numero.push(numSecreto)

// vou repetir o código porque não ensinaram o do while 

let chute = prompt("Consegue adivinhar qual é o número?")
console.log(numero[0])

while (chute != numero[0]) {
    console.log("EEEERROOOOUUUUU")
    let chute = prompt("Vamos novamente. Qual é o número?")
    chute = Number(chute)

    if (chute > numero[0]) {
        console.log("O número secreto é menor. Try again")
    } else {
        console.log("O número secreto é maior. Try again")
    }
}

console.log("ACERTOOOUUU!!!!")