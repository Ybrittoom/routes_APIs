const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Raiz da APIs esta funcionando')
})

//aluguel de carros
app.get('/AluguelCarros', (req, res) => {
    res.send('Esta funcionando, nome da rota:AluguelCarros')
})

app.post('/AluguelCarros', (req, res) => {
    res.send('Carro alugado!!!')
})

app.put('/AluguelCarros', (req, res) => {
    res.send('Carro devolvido!!!')
})

app.delete('/AluguelCarros', (req, res) => {
    res.send('Carro removido da locadora!!!')
})

// alunos 
app.get('/alunos', (reeq, res) => {
    res.send('rota aluno funcionando')
})

// const sala_de_aula = [
//     {aluno: 'Ygor'},
//     {aluno: 'Maria'},
//     {aluno: 'Carlos'},
//     {aluno: 'Marta'}
// ]
app.get('/alunos', (req, res) => {
    res.send('alunos novos')
})

app.post('/alunos', (req, res) => {
    res.send('aluno novo')
})

app.put('/alunos', (req, res) => {
    res.send(`Aluno novo faltou`)
})

app.delete('/alunos', (req, res) => {
    res.send(`Aluno foi expulso`)
})

//biblioteca 

app.get('/biblioteca', (req, res) => {
    res.send('rota biblioteca funcionando')
})

app.post('/biblioteca', (req, res) => {
    res.status(201).send('Livro adicionado')
})

app.put('/biblioteca', (req, res) => {
    res.send('livro devolvido!!!')
})

app.delete('/biblioteca', (req, res) => {
    res.send('livro removido')
})

//exames 

app.get('/exame', (req, res) => {
    res.send('rota exame esta funcionando')
})

app.post('/exame', (req, res) => {
    res.send('exame marcado')
})

app.put('/exame', (req, res) => {
    res.send('exame de radiografia! marcado!!')
})

app.delete('/exame', (req, res) => {
    res.send('exame desmarcado')
})

//rota hotel

app.get('/hotel', (req, res) => {
    res.send('Esta funcionando, nome da rota:hotel')
})

app.post('/hotel', (req, res) => {
    res.status(201).send('diaria agendada')
})

app.put('/hotel', (req, res) => {
    res.send('diaria paga')
})

app.delete('/hotel', (req, res) => {
    res.send('diaria removida')
})

//manutençao de equipamentos
app.get('/manuEquip', (req, res) => {
    res.send('Esta funcionando, nome da rota:manutençao de equipamentos')
})

app.post('/manuEquip', (req, res) => {
    res.status(201).send('manutençao agendada')
})

app.put('/manuEquip', (req, res) => {
    res.send('manutençao feita')
})

app.delete('/manuEquip', (req, res) => {
    res.send('manutençao cancelada')
})

//ocorrencia
app.get('/ocorrencia', (req, res) => {
    res.send('Esta funcionando, nome da rota:ocorrencia')
})

app.post('/ocorrencia', (req, res) => {
    res.status(201).send('ocorrencia feita')
})

app.put('/ocorrencia', (req, res) => {
    res.send('ocorrencia confirmada')
})

app.delete('/ocorrencia', (req, res) => {
    res.send('ocorrencia cancelada')
})

//usuarios
app.get('/usuario', (req, res) => {
    res.send('Esta funcionando, nome da rota:usuario')
})

app.post('/usuario', (req, res) => {
    res.status(201).send('envio do cadastro do usuario feita')
})

app.put('/usuario', (req, res) => {
    res.send('usuario aceito')
})

app.delete('/usuario', (req, res) => {
    res.send('usuario recusado')
})

//veterinaria
app.get('/veterinaria', (req, res) => {
    res.send('Esta funcionando, nome da rota:veterinaria')
})

app.post('/veterinaria', (req, res) => {
    res.status(201).send('consulta para o pet enviada')
})

app.put('/veterinaria', (req, res) => {
    res.send('consulta confirmada')
})

app.delete('/veterinaria', (req, res) => {
    res.send('consulta cancelada')
})

//viagens
app.get('/viagem', (req, res) => {
    res.send('Esta funcionando, nome da rota:viagens')
})

app.post('/viagem', (req, res) => {
    res.status(201).send('viagens confirmada')
})

app.put('/viagem', (req, res) => {
    res.send('viagem feita')
})

app.delete('/viagem', (req, res) => {
    res.send('viagem cancelada')
})

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})