module.exports = caseUniquify

var crypto = require('crypto')

function caseUniquify (name) {
  if (name !== name.toLowerCase()) {
    name += '_' + crypto.createHash('sha1').update(name).digest('hex').slice(0, 8)
  }
  return name
}
