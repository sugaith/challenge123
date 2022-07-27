export function performOperation(inArray) {
  const outArray = [];

  inArray.map(value => {
    if (typeof value === 'number'){
      outArray.push(value * value)
    } else {
      const isNumber = Number(value)
      if (!Number.isNaN(isNumber)) {
        outArray.push(value * value)
      }
    }
  })

  outArray.sort((prev, next) => prev - next)

  return outArray
}
