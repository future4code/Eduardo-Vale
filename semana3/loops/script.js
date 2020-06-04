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

