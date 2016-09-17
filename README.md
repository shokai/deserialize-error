# deserialize-error

convert Plain Object to Error Object

- https://github.com/shokai/deserialize-error
- https://npmjs.com/package/deserialize-error

[![CircleCI](https://circleci.com/gh/shokai/deserialize-error.svg?style=svg)](https://circleci.com/gh/shokai/deserialize-error)


## Usage

Serialize Error's name, message and stack-trace with [serialize-error npm](https://www.npmjs.com/package/serialize-error), then deserialize.

```javascript
import serializeError from 'serialize-error'
import deserializeError from 'deserialize-error'

const err = new Error('ouch')
const obj = serializeError(err)
const err2 = deserializeError(obj)

assert.equal(err.name, err2.name)
assert.equal(err.message, err2.message)
assert.equal(err.stack, err2.stack)
assert.equal(err.toString(), err2.toString())
```


It also works with custom error and json format.

```javascript
class ArgumentError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ArgumentError'
  }
}

const err = new ArgumentError('"name" should be a string!!')
const err2 = deserializeError(
  JSON.parse(
    JSON.stringify(
      serializeError(err)
    )
  )
)

assert.equal(err.name, err2.name)
assert.equal(err.message, err2.message)
assert.equal(err.stack, err2.stack)
assert.equal(err.toString(), err2.toString())
```
