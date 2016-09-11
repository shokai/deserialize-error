export default function deserializeError (obj) {
  if (!isSerializedError(obj)) return obj
  return Object.assign(new Error(), {stack: undefined}, obj)
}

export function isSerializedError (obj) {
  return obj &&
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.message === 'string'
}
