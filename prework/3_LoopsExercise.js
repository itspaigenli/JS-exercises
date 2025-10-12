// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let n = 1;
while (n <= 5) {
  console.log(n);
  n++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;
do {
  console.log(i);
  n++;
} while (i <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let x;
for (x=1; x <= 5; x++) {
  console.log(x);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let s = 10;
while (s >= 1) {
  console.log(s);
  s--;
}

let q = 10;
do {
  console.log(q);
  q--;
} while (q >= 1);

let b;
for (b=10; b >= 1; b--) {
  console.log(b);
}


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let a = 7;
while (a <= 27) {
  console.log(a);
  a++;
}

let c = 7;
  do {
    console.log(c);
    c++;
  } while (a <=27);

  let t;
  for (t = 7; t <= 27; t++) {
    console.log(t);
  }


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let h = 0;
while (h <= 100) {
  console.log(h);
  h = h+10;
}

let j = 0;
do {
  console.log(j);
  j = j+10;
} while (j <= 100);

let k;
for (k = 0; k <= 100; k = k+10) {
  console.log(k);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) { 
  console.log("HELP ME!");
  counterFour++; // ANSWER: -- drops 1 into negative numbers, which infinitely would be <2
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let n = 3;
while (n >= 0) {
  console.log(n);
  n--;
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let n = 3;
let z = 0;
while (z <= 100) {
  if (z == n)
    console.log(z + "my favorite number!");
  else
    console.log(z + "not my favorite number");
  z++;
}


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// The For Loop is used when you know the boundaries (such as the size of an array); The While Loop
//is good when a condition needs to be met so the loop can end - the condition doesnt need to be an integer
//to leave the loop. The Do-While Loop is similar to the While Loop but you want the loop to run at least 
// once all the way through.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside " + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Commit your file to GitHub.
