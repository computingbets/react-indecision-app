const name = 'John Staley'

const getName = (name) => {
  let firstName = name.split(" ")[0];
  return firstName;
};
// revised getName function

// const getName = (name) => {
// return name.split(" ")[0];
// };

console.log(getName('John Staley'));

const quikName = (name) => name.split(" ")[0];

const multiplier = {
  numbers: [4,20,69],
  multiplyBy: 10,
  multiply(arr) => return arr.map(this.numbers, this.multiplyBy);
};

console.log(multiplier.multiply());
