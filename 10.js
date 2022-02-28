let sortingOrder = true;
let sortBy = "username"; // this will come from ui

let url = "http://localhost:8080/order/?sortingOrder=1&sortBy=id";

let url1 =
  "http://localhost:8080/order/?sortingOrder=" +
  sortingOrder +
  "&sortBy=" +
  sortBy;

// Template literal :: Variable Placeholder
let url2 = `http://localhost:8080/order/?sortingOrder=${sortingOrder}&sortBy=${sortBy}`;
