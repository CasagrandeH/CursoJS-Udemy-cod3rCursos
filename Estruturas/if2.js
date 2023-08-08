function test1(num) {
    if (num > 7)
        console.log(num)
        console.log('final')
}

function test2(num) {
    if (num > 7)
        ; 
    
    {
        console.log(num)
    }
}

test1(1)
test1(10)
console.log('')
test2(1)
test2(10)