function triangleType(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
        console.log('Triângulo Equilátero.')
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log('Triângulo Isósceles.')
    } else {
        console.log('Triângulo Escaleno.')
    }
}

triangleType(1, 1, 1)
triangleType(1, 1, 2)
triangleType(1, 3, 2)