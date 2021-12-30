const validateRequest = (request, c) => {
  if (typeof request === 'object' && Object.keys(request).length > 0) {
    let result
    result = Object.entries(request).map(i => {
      if (typeof i[1] === 'string') {
        return i[1].trim().length > 0 ? true : i[0]
      }
      if (typeof i[1] === 'object') {
        return Object.keys(i[1]).length > 0 ? true : i[0]
      }
      if (typeof i[1] === 'number' && i[1]) {
        return true
      } else {
        return i[0]
      }
    }).filter(i => i !== true)
    if (result && result.length > 0) {
      c(true, result)
    } else {
      c(false, request)
    }
  } else {
    c(true, undefined)
  }
}
const isJSON = (request) => {
  if (request['content-type'] === 'application/json') {
    return true
  }
  return false
}

module.exports = {
  validateRequest,
  isJSON
}
