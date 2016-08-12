'use strict'

const assert = require('assert')
const map = require('map-values')

module.exports = Tags

function Tags (data) {
  assert(data, 'data is required')
  assert(data.paths, 'paths are required')
  assert(data.tags, 'tags are required')

  assertTags(data)

  return Object.keys(data.tags)
    .sort(data.sort)
    .map(function (key) {
      return {
        name: key,
        description: data.tags[key]
      }
    })
}

function assertTags (data) {
  map(data.paths, function (path, pathName) {
    map(path, function (operation, operationName) {
      operation.tags.forEach(function (tag) {
        assert(data.tags[tag], `unreferenced tag \`${tag}\` in \`${operationName} ${pathName}\``)
      })
    })
  })
}
