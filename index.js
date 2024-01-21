const getRepos = require("./ejercicios/1-consumo-apis");
const calculateSinOfSumAndProduct = require("./ejercicios/2-nomenclatura");
const findOddNumbers = require("./ejercicios/3-logica");
const asyncFunction = async () => {
  await getRepos();
  await calculateSinOfSumAndProduct(1, 2, 3);
  await findOddNumbers(10);
};

asyncFunction();
