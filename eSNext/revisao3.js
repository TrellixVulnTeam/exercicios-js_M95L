// Recurso do ES8: Object.values e .entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notação literal de objetos
const nome = "carla"
const pessoa = {
    nome, 
    ola() {
        return 'oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Gato extends Animal {
    falar() {
        return "miau!"
    }
}

console.log(new Gato().falar())