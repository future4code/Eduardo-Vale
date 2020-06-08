/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo de BlackJack!")

let usuario = []
let hal9000 = []

let pontuacaoUsuario
let pontuacaoHal9000

let jogar = true
let novoSorteio = true
let novaCarta = true

while (jogar) {
   jogar = confirm("Quer iniciar uma nova rodada?")

   if (jogar) {
      // entra aqui 

      do {

         pontuacaoUsuario = 0
         pontuacaoHal9000 = 0

         for (let i = 0; i < 2; i++) {
            usuario.push(comprarCarta())
            hal9000.push(comprarCarta())
            pontuacaoUsuario += usuario[i].valor
            pontuacaoHal9000 += hal9000[i].valor
         }

         if ((usuario[0].texto.substring(0, 1) === "A" && usuario[1].texto.substring(0, 1) === "A") || (hal9000[0].texto.substring(0, 1) === "A" && hal9000[1].texto.substring(0, 1) === "A")) {
            alert("Opa! Cartas repetidas. Novo sorteio será realizado.")

            for (let i = 0; i < 2; i++) {
               usuario.pop()
               hal9000.pop()
            }
            novoSorteio = true

         } else {
            novoSorteio = false
         }

      } while (novoSorteio);


      novaCarta = confirm(
         "Suas cartas são " + usuario[0].texto + usuario[1].texto + ". A carta revelada pelo computador é " + hal9000[0].texto + "." +
         "\n" +
         "Deseja comprar mais uma carta?"
      )

      if (novaCarta) {
         usuario.push(comprarCarta())
         hal9000.push(comprarCarta())

      } else {

      }












      if (usuario.length === 2) {
         console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação: ${pontuacaoUsuario}`)
         console.log(`Ha l9000 - cartas: ${hal9000[0].texto} ${hal9000[1].texto} - pontuação: ${pontuacaoHal9000}`)

      } else {
         console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação: ${pontuacaoUsuario}`)
         console.log(`Ha l9000 - cartas: ${hal9000[0].texto} ${hal9000[1].texto} - pontuação: ${pontuacaoHal9000}`)
      }


      //RESULTADO
      if (pontuacaoUsuario > pontuacaoHal9000) {
         console.log("O usuário ganhou!")
      } else if (pontuacaoHal9000 > pontuacaoUsuario) {
         console.log("Hal 9000 ganhou!")
      }
      else {
         console.log("Empate!")
      }


      //LIMPANDO O ARRAY
      for (let i = 0; i < usuario.length; i++) {
         usuario.pop()
         hal9000.pop()
      }


      // sai aqui
   }
}

console.log("O jogo acabou.")
