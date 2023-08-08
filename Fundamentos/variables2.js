/* var numero =1 
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) 
 var tem escopo global e de função, então nesse caso se torna uma var global
*/ 

var numero =1 
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

let num = 1 
{
    let num = 2
    console.log('dentro =', num)
}
console.log('fora =', num)

// let tem escopo globbal, de função, e de bloco.