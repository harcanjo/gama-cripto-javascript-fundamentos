// Log
// console.log("Hello");

// Fetch
// fetch('https://www.mercadobitcoin.net/api/BTC/day-summary/2013/6/20/')
// console.log(fetch('https://www.mercadobitcoin.net/api/BTC/day-summary/2013/6/20/'));
/*
   fetch('https://www.mercadobitcoin.net/api/BTC/day-summary/2013/6/20/')
    .then(res => console.log(res));
*/
// 'https://reqres.in/api/users'
// 'https://www.mercadobitcoin.net/api/BTC/day-summary/2013/6/20/'

// Synchronous
/*
const nameMI = 'Miriam';
const greeting = `Hello, my name is ${nameMI}!`;
console.log(greeting);
*/
// "Hello, my name is Miriam!"

// Date
/*
var today = new Date();
var year = today.getFullYear();
console.log("🚀 ~ file: index.js ~ line 25 ~ year", year)

// Month name
const todayName = new Date();
console.log(todayName.toLocaleString('default', { month: 'long' }));
console.log(todayName.toLocaleString('default', { month: 'short' }));

const todayPt = new Date();
console.log("🚀 ~ file: index.js ~ line 33 ~ todayPt", todayPt)
console.log(todayPt.toLocaleString('pt-BR', { month: 'long' }));
*/

// Functions
function square(num){
    return num * num;
}

square(2);
console.log("🚀 ~ file: index.js ~ line 42 ~ square(2)", square(2))