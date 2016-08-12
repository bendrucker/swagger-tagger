# swagger-tagger [![Build Status](https://travis-ci.org/bendrucker/swagger-tagger.svg?branch=master)](https://travis-ci.org/bendrucker/swagger-tagger)

> Validate and format swagger tags


## Install

```
$ npm install --save swagger-tagger
```


## Usage

```js
var Tags = require('swagger-tagger')

var tags = Tags({
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
//=> [{name: 'beep', description: 'boop'}, ...]
```

## API

#### `Tags(data)` -> `array[tag]`

##### data

*Required*  
Type: `object`

###### paths

*Required*  
Type: `object`

A [Swagger paths object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathsObject).

###### tags

*Required*  
Type: `object`

An object where keys are tag names and values are the tag description.

###### sort

Type: `function`  
Default: `undefined`

A sort function for sorting the output array of tags by tag name. The default uses JavaScript's default alphabetical sorting.

## License

MIT © [Ben Drucker](http://bendrucker.me)
