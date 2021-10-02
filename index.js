const express = require('express')
const app = express()
const port = 3000

const rutas = require('./rutas');
app.use('/', rutas)

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})