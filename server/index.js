const express = require('express')
const server = express()

const PORT = process.env.PORT || 4000

server.use(express.json({ extended: true }))

server.get('/', (req, res) => {
  res.json({ message: 'Hiiiiiii' })
})

server.listen(PORT, () => {
  console.log(`App on ${PORT}`)
})
