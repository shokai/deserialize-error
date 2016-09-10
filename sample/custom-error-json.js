import serializeError from 'serialize-error'
// import deserializeError from 'deserialize-error'
import deserializeError from '../'
import assert from 'assert'

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
