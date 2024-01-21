function calculateSinOfSumAndProduct(firstNumber, secondNumber, multiplier) {
  console.log("***** Nomenclatura *****");
  let sumOfNumbers = firstNumber + secondNumber;
  let productOfSumAndMultiplier = sumOfNumbers * multiplier;
  let sinOfProduct = Math.sin(productOfSumAndMultiplier);
  console.log(`El seno de ${productOfSumAndMultiplier} es ${sinOfProduct}`);
  return sinOfProduct;
}

module.exports = calculateSinOfSumAndProduct;
