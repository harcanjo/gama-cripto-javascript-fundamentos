/**
 * variavel de valor imutável
 * escopo de bloco, podendo ser ouvida em todo o arquivo onde foi declarada
 * os valores de uma constante não podem ser alterados
 */
const Name = "Hugo Arcanjo";
console.log(Name);

/**
 * variavel de escopo local
 * tem um escopo de bloco, aceita alteração de valores e tipos
 */
let age = 32;
console.log(typeof age);

age = "32";
console.log(typeof age);


/**
 * variavel pode ter escopo global no projeto
 * raramente é utilizada hoje em dia pois pode ter uma mutação
 */
var occupation = "Dev";
console.log(occupation);

occupation = true;
console.log(occupation);
