// EXERCÍCIO 1

// 1a) []

// 1b) [0, 1, 0, 1, 2 , 3]

// 1c) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3 ,4, 5]


// ------------------------------------------------------------------------------------------------

// EXERCÍCIO 2

// 2a) As saídas são os índices de cada nome validados no if. 0, 2, undefined

// 2b) Sim. Seria feito a comparação do índice do array com o número presente em cada posição do array. 
// Seria impresso no console o número do index quando este for igual ao número na chamada da função.


// ------------------------------------------------------------------------------------------------

// EXERCÍCIO 3

// Resposta: O array retorna um array de duas posições, onde o 
// primeiro elemento é a soma de todos elementos deste novo array, 
// e o segundo elemento é a multiplicação de todos os elementos 
// deste mesmo array.
//  function somaEMultiplica(array)


// ------------------------------------------------------------------------------------------------

// EXERCÍCIO 4

// 4a)  

// let idade = (a) => {
//     return a * 7
// }

// idadeHumana = prompt("Qual a idade humana do catioro?")

// resultado = idade(idadeHumana)
// console.log("Seu catioro tem " + resultado + " anos caninos.")

// 4b)

// let informacao = (nome, idade, endereco, estudante) => {

//     if (estudante) {
//         estudante = "sou"
//     } else {
//         estudante = "não sou"
//     }

//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante} estudante`
// }

// let meuNome = prompt("Qual é o seu nome?")
// let minhaIdade = prompt("Qual é a sua idade")
// let meuEndereco = prompt("Qual é o seu endereço?")
// let souEstudante = confirm("Se você é estudante, clique em OK")

// console.log(informacao(meuNome, minhaIdade, meuEndereco, souEstudante))


// ------------------------------------------------------------------------------------------------

// EXERCÍCIO 5

// let seculo = (ano) => {
//     const seculos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
//     // século XI = 1001 até 1100
//     seculoAtual = 101
//     if (ano < 1) {
//         return "O programa só funciona a partir do nascimento de Jesus Cristo ✞"
//     } else if (ano < 2100) {
//         for (const indice of seculos) {
//             if (ano < seculoAtual) {
//                 return `O ano ${ano} pertence ao século ${indice}.`
//                 break
//             }
//             seculoAtual += 100
//         }
//     } else {
//         return "Poxa. Estamos longe deste século, mas esperamos chegar lá.\nTente novamente!"
//     }
// }

// let numero = prompt("Digite um ano para ser informado de qual século ele pertence.")

// resposta = seculo(numero)

// console.log(resposta)


// ------------------------------------------------------------------------------------------------

// EXERCÍCIO 6

//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
/* utilizado nas letras A, C e D */

//6a

// let tamArray = elemento => {
//     return elemento.length
// }

// console.log(tamArray(array))


//6b

// let parOuImpar = (numero) => {
//     if (numero % 2 === 0) {
//         return true
//     } else if (numero % 2 != 0) {
//         return false
//     } else {
//         return "Valor inválido. Tente nov4amente"
//     }
// }

// resultado = prompt("Digite um número e receba True se ele for par ou False se ele or Impar3")

// console.log(parOuImpar(resultado))

//6c

// let numPares = umArray => {
//     contaPares = 0
//     for (const iterator of umArray) {
//         if (iterator % 2 === 0) {
//             contaPares += 1
//         }
//     }
//     return contaPares
// }

// console.log(numPares(array))

//6d

// médodo da 6b
// let parOuImpar = (numero) => {
//     if (numero % 2 === 0) {
//         return true
//     } else if (numero % 2 != 0) {
//         return false
//     } else {
//         return "Valor inválido. Tente nov4amente"
//     }
// }


// let numPares = umArray => {
//     contaPares = 0
//     for (const iterator of umArray) {
//         if (parOuImpar(iterator)) {
//             contaPares += 1
//         }
//     }
//     return contaPares
// }

// console.log(numPares(array))