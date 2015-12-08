var color = require('color')

module.exports = function rebeccapurple (string, output) {
  if (!output) {
    output = 'rgb'
  }
  return string.replace(/(rebeccapurple)\b/gi, color('rebeccapurple')[output + 'String']())
}
