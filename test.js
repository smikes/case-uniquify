var test = require('tap').test

test('leaves lower case alone', function (t) {
  var cu = require('./')

  t.equal(cu('jsonstream'), 'jsonstream')
  t.end()
})

test('appends disambiguator if upper case found', function (t) {
  var cu = require('./')

  t.equal(cu('JSONStream'), 'JSONStream_50850eed')
  t.end()
})
