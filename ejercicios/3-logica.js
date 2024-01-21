function findOddNumbers(num) {
  console.log("***** Lógica *****");
  const res = [];
  for (let i = num; i > 0; i--) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  console.log(
    `Los números impares entre 1 y ${num} son: ${res.sort((a, b) => a - b)}`
  );
  return res.sort((a, b) => a - b);
}

module.exports = findOddNumbers;
