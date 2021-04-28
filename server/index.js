const express = require('express')
// const { create } = require('./controllers/messages_controller')
const mc = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesBasicUr1 = "/api/messages"
app.post(messagesBasicUr1, mc.create)
app.get(messagesBasicUr1, mc.read)
app.put(`${messagesBasicUr1}/:id`, mc.update)
app.delete(`${messagesBasicUr1}/:id`, mc.delete)

const PORT = 3001

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))