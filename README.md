# deserialize-error

convert Plain Object to Error Object

- https://github.com/shokai/deserialize-error
- https://www.npmjs.com/package/deserialize-error

[![CircleCI](https://circleci.com/gh/shokai/deserialize-error.svg?style=svg)](https://circleci.com/gh/shokai/deserialize-error)


## Usage

serialize with [serialize-error](https://www.npmjs.com/package/serialize-error) then deserialize

```javascript
import serializeError from 'serialize-error'
import deserializeError from 'deserialize-error'

const err = new Error('ouch')
console.log(err)

const obj = serializeError(err)
const err2 = deserializeError(obj)
console.log(err2)
```

it also

```javascript
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
```
