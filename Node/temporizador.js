const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log("Executando tarefa 1!", new Date().getSeconds() )
})

setTimeout(() => {
    tarefa1.cancel()
    console.log("Cancelando tarefa 1!")
}, 20000);

//

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.second = [new schedule.Range(0, 59, 20)]

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log("Executando a tarefa 2!", new Date().getSeconds())
})

setTimeout(() => {
    tarefa2.cancel()
    console.log("Cancelando tarefa 1!")
}, 60000);

