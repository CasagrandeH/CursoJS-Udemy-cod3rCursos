//console.log('Olá, Mundo!')
/*
    comentario de multiplas linhas
*/
//console.log(1 + 3)  comentario linha


function showOddEven(n = 0) {
    
    if (n === 0) {
    return console.log('0');
    } 

    const ordered = []

    if (n > 0) {
        for (c = 0; c <= n; c++) { 
            ordered.push(c)
        }
    } else {
        for (c = 0; c >= n; c--) {
            ordered.push(c)
        }
    } 

    console.log('PAR!:')
    const even = ordered.map(function(num) {
        if (num % 2 === 0) {
            console.log(num)
            return num;
        }
    })

    console.log('')

    console.log('IMPAR:')
    const odd = ordered.map(function(num) {
        if (num % 2 !== 0) {
            console.log(num)
            return num;
        }
    })

    /* let list = [0,1,2,3,4,5,6,7,8,9,10]
    let odd = []
    let even = []

    list.forEach(function(num){
        if (num % 2 === 0) {
            even.push(num)
        } else {
            odd.push(num)
        }})

        console.log('PAR!:')
        even.forEach(function(num) {
            console.log(`${num}`)
        })
    
        console.log('')
        
        console.log('IMPAR:')
        odd.forEach(function(num) {
            console.log(`${num}`)
        }) */

   
}


function showArea(r  = 0) {
    const pi = 3.14
    const raio = 10
    let areac = pi * (raio ** 2)
    console.log(`O raio é: ${raio}`)
    console.log(`A area total é: ${areac} m²`)

    if (r === 0) {
        return;
    } else {
        let areac = pi * (r ** 2)
        console.log(`O raio é: ${r}`)
        console.log(`A area total é: ${areac} m²`)
    }
}

showOddEven(10)