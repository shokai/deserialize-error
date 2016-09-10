/* eslint-env mocha */

import {assert} from 'chai'
import serializeError from 'serialize-error'
import {isSerializedError} from '../src/'

describe('isSerializedError', function () {
  describe('serializedError', function () {
    let obj = serializeError(new Error('hi'))
    it('is serialized error', function () {
      assert.ok(isSerializedError(obj))
    })
  })

  describe('other object', function () {
    it('is not serialized error', function () {
      assert.notOk(isSerializedError(null))
      assert.notOk(isSerializedError('error'))
      assert.notOk(isSerializedError(undefined))
      assert.notOk(isSerializedError(1))
      assert.notOk(isSerializedError({name: 'shokai', message: 'hello'}))
    })
  })
})
