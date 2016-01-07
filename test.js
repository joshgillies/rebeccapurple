import test from 'tape'
import rebeccapurple from './src'

const conditions = [
  'color: rebeccapurple',
  'background-color: rebeccapurple',
  'background-color: red'
]
const basic = conditions[0]
const multi = `${conditions[0]}; ${conditions[1]}`
const mixed = `${conditions[0]}; ${conditions[2]}`

test('conversion cases', (assert) => {
  assert.equal(rebeccapurple(basic), 'color: rgb(102, 51, 153)', 'basic')
  assert.equal(rebeccapurple(multi), 'color: rgb(102, 51, 153); background-color: rgb(102, 51, 153)', 'multiple instances')
  assert.equal(rebeccapurple(mixed), 'color: rgb(102, 51, 153); background-color: red', 'mixed')
  assert.end()
})

test('handle unknown color values', (assert) => {
  try {
    rebeccapurple(basic, 'rgba')
  } catch (err) {
    assert.ok(err, 'throw not implemented error')
    assert.equals(err.message, 'color "rgba" not implemented', 'error message')
  }
  assert.end()
})

test('specified output conversion', (assert) => {
  assert.equal(rebeccapurple(basic, 'hex'), 'color: #663399', 'outputs hex color')
  assert.equal(rebeccapurple(basic, 'hsl'), 'color: hsl(270, 50%, 40%)', 'outputs hsl color')
  assert.equal(rebeccapurple(basic, 'hwb'), 'color: hwb(270, 20%, 40%)', 'outputs hwb color')
  assert.equal(rebeccapurple(basic, 'percent'), 'color: rgb(40%, 20%, 60%)', 'outputs rgb color with percentage values')
  assert.equal(rebeccapurple(basic, 'rgb'), 'color: rgb(102, 51, 153)', 'outputs rbg color')
  assert.end()
})

