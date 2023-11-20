function allSumNumber(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    // let index = i;
    const element = number[i];
    sum = sum + element;
    console.log(element, sum);
  }
}

const myNumber = [12, 3, 45, 54, 66, 34, 43];
allSumNumber(myNumber);
