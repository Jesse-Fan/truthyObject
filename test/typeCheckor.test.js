const typeCheckor = require('../src/typeCheckor.js')
const utils = require ('../utils/index.js')

const {
  fmapOfFilter,
} = utils

const objTypeData = {}
const ArrTypeData = []
const setTypeData = new Set([1,2])
const mapTypeData = new Set([
  [1,1],
  [2,2],
])
const numTypeData = 1
const strTypeData = ''
const fnTypeData = () => {}
const genTypeData = function *g() {}
const asyncTypeData = async () => {}
const sybTypeData= Symbol('11')


const testObj = [
  ArrTypeData,
  objTypeData,
  setTypeData,
  mapTypeData,
  numTypeData,
  strTypeData,
  fnTypeData,
  genTypeData,
  asyncTypeData,
  sybTypeData,
]

const typeRes = testObj
  .map(data => ({
    data,
    checkRes: typeCheckor(data)
  }))
  .filter(resIt => !resIt.checkRes)
  .map(resIt => resIt.data)

if(typeRes.length) return console.log('failed res: ', typeRes)

console.log('test success')

