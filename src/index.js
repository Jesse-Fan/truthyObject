const obj = {
  a: {
    aa: {
      aa: 1
    }
  },
  b: ''
}

const R = reuqire('ramda')
const typeCheckor = require('./typeCheckor')
const propsList = R.keys

R.compose(
  propsList,
)
const truthyObject = data => {
  propsList(data)
}

module.exports = truthyObject
