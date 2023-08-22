const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // INVALIDO!
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // INVALIDO! QUASE LA!
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // <-- Gerou um OBJ atraves de um JSON
console.log(JSON.parse('{ "a": 1.9, "b": "string", "c": true, "d": {}, "e": [] }')) /*
JSON aceita array e objeto dentro dele. */