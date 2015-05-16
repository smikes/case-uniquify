# case-uniquify

Given a name, make a unique name even on case-folding filesystems.

If the name is all lower-case, return it unchanged.

If the name contains upper-case characters, append "_xxxxxxxx" where the x's are
the first 8 characters of the SHA-1 hash of the name.

## USAGE

```javascript
var cu = require('case-uniquify')
console.log(cu('jsonstream'))
// output: jsonstream

console.log(cu('JSONStream'))
// output: JSONStream_50850eed
```

## LICENSE

MIT