/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

console.log("e. ", typeof resultado)
/*

// RESPOSTAS

/*
1a) false, basta o bool2 ser false para que o resultado final as 
    operações utilizando apenas &&, resulta em false.
1b) false, pois (bool2 || bool1) resolta em true. !bool3 é false,
     logo (true && !bool3) false
1c) true, pois !resultado = true, bool1 é true, logo, 
    true && true = true
1d) false, pois (resultado && (!bool1 || bool1)) resulta em false, 
    !bool3 = false, logo, false && false = false
1e) booelan, pois o typeof retorna o tipo do valor alocado na varíavel
    resultado

*/

/*
let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i + 1])

array[i + 1] = 19
const valor = array[i + 6]
console.log('V. ', array[i + 1], " e ", valor)

i += 1
array[i] = array[i - 1]
console.log('VI. ', array[i])


i = array.length - 1
array[i] = array[i - 3]
const resultadoC = array[i] % array[1]
console.log('VII. ', resultadoC)
*/


// RESPOSTAS

/*
2a) Array é uma variável capaz de armazenar múltiplos valores dentro
     dela, podendo cada valor ser acessado por um índice.
     Declaração: let array = ["Valor1", "valor2", 3, "4"]
2b) 0
2c) array.length
2dI) undefined, pois a variável array foi declarada, mas não inicializa.
2dII) null, pois a variável recebeu o valor null
2dIII) 11 é o tamanho do array
2dIV) A variável i sendo 0, -> array[i] = array[0], o que resulta em 3
    array[i+1] é array[3+1], o que resulta em 4
2dV) Nesta caso, o array de posição 1 recebe o valor 19, e a constante
     recebe o valor contido no array[6], 9, pois i = 0
     No fim é impresso os valors contidos no array[1] e na variável valor:
     19 e 9
2dVI) i recebe 1, i - 1 = 0, array[i] = array[0], O valor é 3
2dVII) i recebe 10, array[10] recebe 10, resultado C recebe o resto da
divisao de 10 por 3, = 1
*/


// PARTE 2 

/*  1a)  Calcule e mostre o valor de 77°F em  K, mostrando
        a unidade no console também.*/

// let kelvin;
// let graus_fahrenheit = 77;
// kelvin = ((graus_fahrenheit - 32) * 5 / 9 + 273.15);
// console.log(graus_fahrenheit + " F equivale a " + kelvin + " Kelvin.");

/*  1b. Calcule e mostre o valor de 80°C em °F, 
        mostrando a unidade no console também. */

//let graus_fahrenheit;
//let graus_celcius = 80;

//graus_fahrenheit = ((graus_celcius) * 9 / 5 + 32);
//console.log(graus_celcius + " C equivale a " + graus_fahrenheit + " F.")


/* 1c   Calcule e mostre o valor de 30°C em °F e K, 
        mostrando as unidades no console também
*/

// let graus_fahrenheit
// let kelvin
// let graus_celcius = 30

// graus_fahrenheit = ((graus_celcius) * 9 / 5 + 32);
// console.log(graus_celcius + " C equivale a " + graus_fahrenheit + " F.");
// kelvin = graus_celcius + 273.15;
// console.log(graus_celcius + " C equivale a " + kelvin + " Kelvin.");


/* 1d   Altere o último item para que o usuário insira
        o valor em graus Celsius que ele deseja converter. */

// let graus_fahrenheit
// let kelvin
// let graus_celcius = prompt("Informe o valor em Cº");

// graus_fahrenheit = ((graus_celcius) * 9 / 5 + 32);
// console.log(graus_celcius + " C equivale a " + graus_fahrenheit + " F.");
// kelvin = parseInt(graus_celcius) + 273.15;
// console.log(graus_celcius + " C equivale a " + kelvin + " Kelvin.");

/*  2   Faça um programa que faça 5 perguntas para o usuário */

let nome = prompt("Qual é o seu nome?");
let cidade = prompt("Onde você mora?");
let time = prompt("Qual é o seu time?");
let filme = prompt("Qual é o seu filme favorito?");
let labenu = prompt("Está gostando do curso da Labenu?");

console.log("1 - Qual é o seu nome?\nR: " + nome)
console.log("2 - Onde você mora?\nR: " + cidade)
console.log("3 - Qual é o seu time?\nR: " + time)
console.log("4 - Qual é o seu filme favorito?a\nR: " + filme)
console.log("5 - Está gostando do curso da Labenu?\nR: " + labenu)
