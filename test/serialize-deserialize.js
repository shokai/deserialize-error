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

  describe('custom Error object', function () {
    class FooError extends Error {
      constructor(message){
        super(message);
        this.name = 'FooError';
      }
    }
    let err = new FooError('barrrrrr')
    let err2 = deserializeError(serializeError(err))
    it('should be equal', function () {
      assert.equal(err.name, err2.name)
      assert.equal(err.message, err2.message)
      assert.equal(err.stack, err2.stack)
      assert.equal(err.toString(), err2.toString())
    })
  })

  describe('string', function () {
    let err
    try {
      throw 'fooooo'
    } catch (_err) {
      err = _err
    }
    let err2 = deserializeError(serializeError(err))
    it('should be equal', function () {
      assert.equal(err.name, err2.name)
      assert.equal(err.message, err2.message)
      assert.equal(err.stack, err2.stack)
      assert.equal(err.toString(), err2.toString())
    })
  })
})
