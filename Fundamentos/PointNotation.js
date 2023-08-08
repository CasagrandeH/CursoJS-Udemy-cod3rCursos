console.log(Math.floor(6.1))
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.name = 'PeepeePoopoo'
obj1['typeof?'] = 'Minecraft Pig'
console.log(obj1["typeof?"])

function Obj(name) {
    this.name = name
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Sven')
const obj3 = new Obj('Ikea')
console.log(obj2.name, '|',obj3.name)
obj3.exec()