const express = require('express')
const { mainValidate } = require('./middleware/authValidate')
const server = express()
const { v4: uuidv4 } = require('uuid')

const PORT = process.env.PORT || 4000

server.use(express.json({ extended: true }))

server.post('/payment', mainValidate, (req, res) => {
  const required = ['card_name', 'card_number', 'card_expiration', 'card_cvv']
  const options = []
  for (let val of required) {
    if (!(val in req.body)) {
      options.push(val)
    }
  }
  if (options.length > 0) {
    res.status(400).json({ message: 'Missing required fields', fields: options })
  } else {
    // eslint-disable-next-line camelcase
    const { card_name, card_number, card_expiration, card_cvv } = req.body
    const data = {
      paymentId: uuidv4(),
      payer: card_name,
      details: {
        number: card_number,
        expires: card_expiration,
        cvv: card_cvv
      }
    }
    res.status(200).json({ data })
  }
})

server.listen(PORT, () => {
  console.log(`App on ${PORT}`)
})
