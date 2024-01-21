function calculateSinOfSumAndProduct(firstNumber, secondNumber, multiplier) {
  let sumOfNumbers = firstNumber + secondNumber;
  let productOfSumAndMultiplier = sumOfNumbers * multiplier;
  let sinOfProduct = Math.sin(productOfSumAndMultiplier);
  return sinOfProduct;
}
