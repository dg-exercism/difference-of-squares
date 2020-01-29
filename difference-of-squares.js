//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.numbers = Array.from(Array(number), (space, i) => i + 1)
  }

  get sumOfSquares() {
    return this.numbers.reduce((squareSum, number) => squareSum += Math.pow(number, 2), 0)
  }

  get squareOfSum() {
    let sum = this.numbers.reduce((sum, number) => sum += number, 0);
    return Math.pow(sum, 2)
  }

  get difference() {
    return this.squareOfSum -this.sumOfSquares
  }
}
