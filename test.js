'use strict'

const test = require('tape')
const Tags = require('./')

test('valid', function (t) {
  const tags = Tags({
    tags: {
      foo: 'bar',
      beep: 'boop'
    },
    paths: {
      '/abc': {
        get: {
          tags: ['beep', 'foo']
        }
      }
    }
  })

  t.deepEqual(tags, [
    {
      name: 'beep',
      description: 'boop'
    },
    {
      name: 'foo',
      description: 'bar'
    }
  ])

  t.end()
})

test('invalid', function (t) {
  t.throws(Tags.bind(null, {
    tags: {
      foo: 'bar',
      beep: 'boop'
    },
    paths: {
      '/abc': {
        get: {
          tags: ['beep', 'foo', 'nope']
        }
      }
    }
  }), /unreferenced tag `nope` in `get \/abc`/)

  t.end()
})
