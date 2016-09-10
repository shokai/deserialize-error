import serializeError from 'serialize-error'
// import deserializeError from 'deserialize-error'
import deserializeError from '../'

const err = new Error('bad')
console.log(err)

const obj = serializeError(err)
const err2 = deserializeError(err)

console.log(err2)
