const number = [1, 3, 5, 9];
const math = function (arr) {
  let tuplam = 0;
  for (let value of arr) {
    tuplam += value;
  }
  return tuplam;
};
console.log(math(number));
