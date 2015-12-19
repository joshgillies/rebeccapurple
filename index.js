var COLORS = {
  'hex': '#663399',
  'hsl': 'hsl(270, 50%, 40%)',
  'hwb': 'hwb(270, 20%, 40%)',
  'percent': 'rgb(40%, 20%, 60%)',
  'rgb': 'rgb(102, 51, 153)'
}

module.exports = function rebeccapurple (string, output) {
  var value

  if (!output) {
    output = 'rgb'
  }

  if (output in COLORS) {
    value = COLORS[output]
  } else {
    throw new Error('color "' + output + '" not implemented')
  }
  return string.replace(/(rebeccapurple)\b/gi, value)
}
