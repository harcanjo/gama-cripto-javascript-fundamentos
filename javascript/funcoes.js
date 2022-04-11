/* /**
 * Em JavaScript tudo é uma FUNÇÃO!!
 */

/**
 * Função anonima, não recebe um nome apenas o uso da palavra reservada function
 * Ela tem o inicio dinâmico.
 */
//function(){}


/**
 * Funções convencionais
 * Funções com sentença fixa, onde não recebem parametros
 */
// function calculo(){
//     let a = 1;
//     let b = 5;
//     return console.log(a + b);
// }

// calculo();

/**
 * Funções com parametros
 * Funções com sentença dinamica onde os parametros ou valor são informados
 */
// function calculate(valueA, valueB, valueC) {
//     let result = (valueA + valueB) - valueC;
//     return console.log(result);
// }

// calculate(2,3,4);

/**
 * Funções Flecha - Arrow functions
 * Sugar sintaxe
 */
// () => {
//     console.log("Arrow function, anonimo");
// } // função anonima - arrow function, espera um evento para ser disparado

// let test = () => {
//     console.log("Arrow functions");
// }
// // let test = () => console.log("Arrow functions");
// test();

/**
 * Assincronidade
 */
// const getApiData = async () => {
//     let request = fetch("https://www.mercadobitcoin.net/api/BTC/ticker/", {
//         method: "GET"
//     })

//     let result = await request;

//     return result.json();
// }

// getApiData().then(res => {
//     console.log(res);
// })

