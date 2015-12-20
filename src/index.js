const colors = {
  'hex': '#663399',
  'hsl': 'hsl(270, 50%, 40%)',
  'hwb': 'hwb(270, 20%, 40%)',
  'percent': 'rgb(40%, 20%, 60%)',
  'rgb': 'rgb(102, 51, 153)'
}

export default function rebeccapurple (string, output = 'rgb') {
  if (output in colors) {
    return string.replace(/(rebeccapurple)\b/gi, colors[output])
  } else {
    throw new Error(`color "${output}" not implemented`)
  }
}
