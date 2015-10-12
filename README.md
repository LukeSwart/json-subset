## json-subset
return whether one json object is a subset of another json object

uses a recursive depth-first-search algorithm to compare for equality across depth levels.

Equality is checked using the `toString()` representation of each leaf node. Objects are recursively checked.

NOTE: This can be very expensive for deep json objects.

## installation
    npm install json-subset

## jsonSubset(a,b)
returns a boolean indicating whether json `a` is a subset of `b`

## usage
```javascript
var subset = require('json-subset')

console.log(subset(
  { a: 'a' },
  { a: 'a', b: 'b' }
))

console.log(subset(
  { a: 'a', b: 'b' },
  { a: 'a' }
))
```
output
```javascript
true
false
```
