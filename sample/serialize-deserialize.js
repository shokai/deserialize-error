import serializeError from 'serialize-error'
// import deserializeError from 'deserialize-error'
import deserializeError from '../'

const err = new Error('ouch')
console.log(err)

const obj = serializeError(err)
const err2 = deserializeError(obj)

console.log(err2)
