function impares(num) {
  const res = [];
  for (let i = num; i > 0; i--) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  return res.sort((a, b) => a - b);
}

console.log(impares(9));
