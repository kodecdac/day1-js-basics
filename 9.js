// Template Literals :: Variable Placeholders
let username = "John";
let score = 100;
let college = "MIT";

// Variable Placeholder
let str1 = `Hello ${username}`;
let str2 = "Hello " + username;

let str3 =
  "Hello " +
  username +
  " your score is " +
  score +
  "and cuttoff score is " +
  100;
" and you are eligilbe for admission in the college" + college;

let str4 = `Hello 
            ${username} 
            your score is 
            ${score} 
            and cuttoff score is 100
            and you are eligilbe for admission in the college 
            ${college}`;
