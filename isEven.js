function isEven(number) {
  const remainder = number % 2;

  if (remainder % 2 === 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}

const isEvenNumber = isEven(233);
console.log(isEvenNumber);
// const isOddNumber = isEven(233);
// console.log(isOddNumber);
