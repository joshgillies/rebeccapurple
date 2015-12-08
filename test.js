var test = require('tape')
var rebeccapurple = require('./')

test('basic conversion', function (assert) {
  var test = 'color: rebeccapurple'
  assert.equal(rebeccapurple(test), 'color: rgb(102, 51, 153)')
  assert.end()
})

test('specified output conversion', function (assert) {
  var test = 'color: rebeccapurple'
  assert.equal(rebeccapurple(test, 'hex'), 'color: #663399')
  assert.equal(rebeccapurple(test, 'hsl'), 'color: hsl(270, 50%, 40%)')
  assert.end()
})

