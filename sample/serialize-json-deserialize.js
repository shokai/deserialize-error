import serializeError from 'serialize-error'
// import deserializeError from 'deserialize-error'
import deserializeError from '../'

const err = new Error('ouch')
console.log(err)

const err2 = deserializeError(
  JSON.parse(
    JSON.stringify(
      serializeError(err)
    )
  )
)

console.log(err2)
