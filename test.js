import test from 'tape'
import rebeccapurple from './src'

const basic = 'color: rebeccapurple'

test('basic conversion', (assert) => {
  assert.equal(rebeccapurple(basic), 'color: rgb(102, 51, 153)')
  assert.end()
})

test('handle unknown color values', (assert) => {
  try {
    rebeccapurple(basic, 'rgba')
  } catch (err) {
    assert.ok(err, 'throw not implemented error')
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

