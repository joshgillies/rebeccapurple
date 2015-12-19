var test = require('tape')
var rebeccapurple = require('./')

test('basic conversion', function (assert) {
  var test = 'color: rebeccapurple'
  assert.equal(rebeccapurple(test), 'color: rgb(102, 51, 153)')
  assert.end()
})

test('handle unknown color values', function (assert) {
  var test = 'color: rebeccapurple'
  try {
    rebeccapurple(test, 'rgba')
  } catch (err) {
    assert.ok(err, 'throw not implemented error')
  }
  assert.end()
})

test('specified output conversion', function (assert) {
  var test = 'color: rebeccapurple'
  assert.equal(rebeccapurple(test, 'hex'), 'color: #663399', 'outputs hex color')
  assert.equal(rebeccapurple(test, 'hsl'), 'color: hsl(270, 50%, 40%)', 'outputs hsl color')
  assert.equal(rebeccapurple(test, 'hwb'), 'color: hwb(270, 20%, 40%)', 'outputs hwb color')
  assert.equal(rebeccapurple(test, 'percent'), 'color: rgb(40%, 20%, 60%)', 'outputs rgb color with percentage values')
  assert.equal(rebeccapurple(test, 'rgb'), 'color: rgb(102, 51, 153)', 'outputs rbg color')
  assert.end()
})

