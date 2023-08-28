this.ola = "Olá, Mundo!"
exports.bemVindo = "Bem vindo ao Node.js."
module.exports.ateLogo = "Até Logo!"

module.exports.memoize = function(fn) {
    const cache = {}

    return function(...args) {

        if (cache[args]) {
            return cache[args]
        }
        
        const result = fn(...args)
        cache[args] = result
        return result
    }
}