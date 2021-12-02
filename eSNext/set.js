// nao aceita repetição e não é indexada
const times = new Set()
times.add('Vasco').add('time B').add('time C')
times.add('flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete("flamengo")
console.log(times)