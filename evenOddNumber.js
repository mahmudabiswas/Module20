function evenOddNumber(number) {
  let evenNumber = [];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element % 2 == 0) {
      console.log(element);
      evenNumber.push(element);
    }
  }
  return evenNumber;
}

const myNumber = [12, 3, 45, 54, 66, 34, 43];
const result = evenOddNumber(myNumber);
console.log(result);
