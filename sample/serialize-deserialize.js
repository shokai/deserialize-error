import serializeError from 'serialize-error'
// import deserializeError from 'deserialize-error'
import deserializeError from '../'
import assert from 'assert'

const err = new Error('ouch')
const obj = serializeError(err)
const err2 = deserializeError(obj)

assert.equal(err.name, err2.name)
assert.equal(err.message, err2.message)
assert.equal(err.stack, err2.stack)
assert.equal(err.toString(), err2.toString())
