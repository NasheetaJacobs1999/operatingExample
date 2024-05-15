// Arithmetic operators: +, -, *, % (modulus), /, ** (exponent), ++, --
// let numb1 = 2, numb2 = 4, numb3 = 5;
// //console.log(numb1 + numb2 * numb3);
// // console.log(numb3 % numb1);
// // console.log(numb3 ** numb1); 

// // Assignment operators: =, +=, *=, /=, %=, etc..
// numb2 += numb1
// numb2 = numb2 + numb1
// console.log(numb2);

// //Comparison operators: ==, <, >, <=, >=, !=, ===
// console.log(numb1 == numb2); // numb1 = '2', numb2 = '2'.  True
// console.log(numb1 > numb2); // false
// console.log(numb1 === numb2); // numb1 = '2', numb2 = 2.  False
// console.log(numb3 / numb1 > numb1);

// // Logical operators: &&, ||, !
// console.log(numb2 == numb2 && numb3 < numb2); // False
// console.log(numb2 == numb2 || numb3 < numb2); // True

let dataEntry = document.querySelector ('[data-entry]') 
function display(value) {
    dataEntry.value += value
}