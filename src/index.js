export default function deserializeError (obj) {
  if (!isSerializedError(obj)) return obj
  const err = new Error()
  err.name = obj.name
  err.message = obj.message
  err.stack = obj.stack
  return err
}

export function isSerializedError (obj) {
  return obj &&
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.message === 'string' &&
    typeof obj.stack === 'string'
}
