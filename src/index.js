const R = require('ramda')

const complexDataTypeList = [
  'object',
]

const pickDataType = R.prop('type')
const pickDataValue = R.prop('value')

const transformDataToDataTypeStr = data => ({
  value: data,
  type: typeof data,
})

const errorHandler= type => {
  console.error(`type Error: ${type} is not handle type of Object`)
}

const onError = R.compose(
  errorHandler,
  pickDataType,
)

const isValidateType = R.compose(
  R.includes(R.__, complexDataTypeList),
  pickDataType,
)

const predFn = R.ifElse(
  isValidateType,
  R.prop('value'),
  onError,
)

const isComplexType = R.compose(
  predFn,
  transformDataToDataTypeStr,
)

module.exports = isComplexType
