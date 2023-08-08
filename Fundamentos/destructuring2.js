const [a] = [10]
console.log(a)

const [n0, , n2, n3, , n4, , n6, n7 = 0] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(n0, n2, n3, n4, n6, n7)

const [,[, nota]] = [[1, 2 ,3], [3, 2, 1]]
console.log(nota)