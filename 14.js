// iNitilzing the prams with default value
function sum(n1 = 0, n2 = 0) {
  return n1 + n2;
}

let output = sum();
console.log(output);

output = sum(10);
console.log(output);

output = sum(10, 20);
console.log(output);
