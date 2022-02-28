function sum(n1, n2) {
  return n1 + n2;
}

let output = sum();
console.log(output);

output = sum(9);
console.log(output);

output = sum(9, 11);
console.log(output);

// Overloaed function
sum();
sum(1);
sum(1, 1);
sum(1, 1, 1);
