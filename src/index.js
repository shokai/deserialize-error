export default function deserializeError (obj) {
  const err = new Error()
  err.name = obj.name
  err.message = obj.message
  err.stack = obj.stack
  return err
}
