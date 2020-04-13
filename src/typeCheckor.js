const R = require('ramda')

const complexDataTypeList = [
  'object',
]

const pickDataType = R.prop('type')
const pickDataValue = R.prop('value')
const alwaysTruthy = R.always(true)
const alwaysFalse = R.always(false)

const transformDataToDataTypeStr = data => ({
  value: data,
  type: typeof data,
})

const errorHandler= type => {
  // todo: catch error
}

const onError = R.compose(
  alwaysFalse,
  errorHandler,
  pickDataType,
)

const isValidateType = R.compose(
  R.includes(R.__, complexDataTypeList),
  pickDataType,
)

const predFn = R.ifElse(
  isValidateType,
  alwaysTruthy,
  onError,
)

const isComplexType = R.compose(
  predFn,
  transformDataToDataTypeStr,
)

module.exports = isComplexType
