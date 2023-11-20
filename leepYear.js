function leepYear(year) {
  const remainder = year % 4;
  return remainder;
}
const result = leepYear(2020);
console.log(result);
