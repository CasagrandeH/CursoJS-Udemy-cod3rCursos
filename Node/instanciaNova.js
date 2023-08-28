// Uma factory retorna um novo Objeto
module.exports = () => {
    return {
    value: 1,
    inc() {
        this.value++
    }
}
}

