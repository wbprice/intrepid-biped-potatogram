'use strict'
/* global describe, it */

const assert = require('assert')

describe('SnsService', () => {
  it('should exist', () => {
    assert(global.app.api.services['SnsService'])
  })
})
