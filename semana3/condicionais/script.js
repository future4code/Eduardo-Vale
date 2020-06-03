/*

// Exercício 1

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}


//     Explique o que o código faz. Qual o teste que ele realiza?
//     Resposta:O código pede que o usuário digite um número e retorna com uma mensagem.
//     Ele realiza um teste para verificar se o número é par ou ímpar, através do resto da divisão.
//     
//     Para que tipos de números ele imprime no console "Passou no teste"?
//     Resposta: Números inteiros pares, 0 e string vazia " ".
//
//     Para que tipos, a mensagem é "Não passou no teste"?
//     Resposta: Qualquer outro valor digitidado, não sendo números inteiros pares, 0 e string vazia " ".

*/


// Exercício 2

/*

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    // break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//     a.  Para que serve o código acima?
//     Resposta: Informar o preço da fruta digitada.

//     b.  Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//     Resposta: O preço da fruta maçã é R$ 2.25
    
//     c.  Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã,
//         3 bananas e 1 uva. Qual seria o preço que você pagaria?
//     Resposta: R$ 9,55. Não temos banana.

//         d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
//         no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado
//         pelo comentário "BREAK PARA O ITEM d.")?
//     Resposta: o preço da fruta pêra é R$ 5  

*/

// Exercício 3

/*

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if (numero1 > 0 && numero2 > 0) {
    let mensagem
    if (numero1 > numero2) {
        mensagem = "Número 1 é maior que o 2!"
    } else {
        mensagem = "Número 1 é menor ou igual ao 2!"
    }
}

console.log(mensagem)

// Considere um usuário que digita os números 3 e 4 respectivamente.
// Qual será a mensagem do terminal? Haverá algum erro?
// Justifique usando os conceitos de bloco ou escopo.

// Resposta:   A mensagem exibida é "script.js:84 Uncaught ReferenceError: mensagem is not defined"
//             O erro no código ocorre devo a existência da variável "let mensagem" declarada fora do escopo do segundo if, 
//             e outras 2 variáveis mensagem dentro do escopo do segundo if.
//             Ao executar a linha 84, a variável mensagem exibida é a mais próxima do escopo global, e não a dentro do segundo if.
             
*/

