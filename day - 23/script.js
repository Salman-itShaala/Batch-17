function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
}

function generateRandomNum(min, max) {
  //
  let randomNum = Math.floor(Math.random() * (max - min)) + min + 1;

  return randomNum;
}
