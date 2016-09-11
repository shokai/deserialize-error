export default function deserializeError (obj) {
  if (!isSerializedError(obj)) return obj
  const err = new Error()
  Object.assign(err, obj)
  return err
}

export function isSerializedError (obj) {
  return obj &&
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.message === 'string' &&
    typeof obj.stack === 'string'
}
