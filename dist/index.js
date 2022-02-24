
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./course-library.cjs.production.min.js')
} else {
  module.exports = require('./course-library.cjs.development.js')
}
