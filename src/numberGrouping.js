/*
Kelompokkan numbers dalam 3 nested array.
1. Index 0 mengelompokkan numbers genap
2. Index 1 mengelompokkan numbers ganjil
3. Index 2 mengelompokkan numbers yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  // Code here
  let even = [];
  let odd = [];
  let three = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      three.push(numbers[i]);
    } else if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }

  console.log([even, odd, three]);
}

numberGrouping([1, 2, 4, 6, 8]); // Output: [[2, 4, 8], [1], [6]]
