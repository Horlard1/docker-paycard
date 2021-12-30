const { validateRequest, isJSON } = require('../func')

const mainValidate = (req, res, next) => {
  if (isJSON(req.headers)) {
    validateRequest(req.body, (err, data) => {
      if (!err && data) {
        next()
      } else {
        res.status(400).json({ status: 'Error', message: 'Missing required fields', fields: data })
      }
    })
  } else {
    res.status(400).json({ status: 'Error', message: 'Request Object must be JSON' })
  }
}

module.exports = {
  mainValidate
}
