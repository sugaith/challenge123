export function performOperation(inArray) {
  const outArray = [];
  inArray.map(value => outArray.push(value * value))

  return outArray
}
