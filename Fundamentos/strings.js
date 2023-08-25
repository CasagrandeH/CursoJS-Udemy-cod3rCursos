let escola = 'Cora Coralina Co'

console.log(escola.charAt(5))
console.log(escola.charCodeAt(5))//Converte para o valor na tabela HTML pelo que entendi. Pode ser usado com dataset's

console.log(escola.indexOf('cora'))

console.log(escola.substring(5))
console.log(escola.substring(0, 4))

console.log('C0ra'.concat(escola.substring(4)).concat('!!!'))//Concatenação!
console.log(escola.replace(/\C/g, "\u00A2"));/*Note que isso e uma EXPRESSÃO REGULAR
, se vc substituir o C por alguma outra coisa contida na String ela se 
tornara o alvo da modificação.

*Agora note o g, ele significa que sera feita uma modificação 'global' na string,
fazendo com que todas as letras 'C' se tornem o simbolo correspondente, se quiser 
mudar apenas o primerio 'C' é so apagar o 'g', ou caso queira o segundo 'C' apenas
apague o codigo e use 'escola.charAt(5)'!

*/

console.log('Gustavo, Guilherme, Natalia, Nattiely'.split(/,/))// "regex" ou "regexp"

let up = t => t.toUpperCase()
console.log(`Ei... ${up('qual foi')}!`)
//Muito dahora, template strings.

let test = 'lalala'
console.log(test.indexOf(' '))