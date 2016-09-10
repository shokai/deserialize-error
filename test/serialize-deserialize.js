/* eslint-env mocha */

import {assert} from 'chai'
import serializeError from 'serialize-error'
import deserializeError from '../src/'

describe('serialize-deserialize', function () {
  describe('Error', function () {
    let err = new Error('foobar')
    let err2 = deserializeError(serializeError(err))
    it('should be equal', function () {
      assert.equal(err.name, err2.name)
      assert.equal(err.message, err2.message)
      assert.equal(err.stack, err2.stack)
      assert.equal(err.toString(), err2.toString())
    })
  })
})
