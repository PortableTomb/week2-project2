// JavaScript Looping Exercise

// Let's print out every element of an array using a for loop.
// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (var i = 0; i <= livingRoom.length; i++){
}
console.log(livingRoom);

// 2. Using a loop, log numbers 22-33 in the console.
console.log("Numbers 22 through 33.");
var num2233 = [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
for (var i = 22; i <= 33; i++){
	console.log(i);
} 

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log("Numbers 75 through 100.");
var num75100 = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

for (i = 75;  i <= 100;  i += 5){
console.log(i);
} 


// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
// Used MDNs example to as a template to build this loop.
var num = 0;
var counter = 0;

       while (num < 5) {
       num ++;   
       if(counter += num) {
       console.log("This is how a professional loops.");
       }
 	}
// var n = 0;
// var x = 0;
// while (n < 3) {
// n++;
// x += n;
// }

// 5. Write a conditional statement to find the largest of the numbers in the array provided.
// Solution approach from Stackoverflow. Adapted it for the final solution... 
var numArray = [-5, -2, -6, 0, -1] //Array
var largestNum = -6; // Lowest number to be counted

for (i = 0; i < numArray.length; i++) {
if (numArray[i] > largestNum) { // Starts @ largestNum & compares 1st num is array, then 2nd, etc.,
	console.log ( largestNum + " > " + numArray[i] ); // Logs the comparison of numbers, takes largest of 2
	largestNum = numArray[i]; // largestNum is the last num standing
    }
}
console.log(largestNum + " is the largest."); // 

// 6. Separately, use both a for loop and while loop to do the same thing.
// for loop version
console.log("This be my for loop.")
var forX = [1,2,3,4,5,6];
for (var i = 1; i <= forX.length; i++) {
console.log(i);
}

// while loop version
console.log("And this be my while loop.")
var whileX = [1,2,3,4,5,6];
var i = 0; 
while(i < whileX.length) { 
    i++; 
    console.log(i);
}

//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number. The numbers should range from 10 to 100, in increments of 25.
console.log("for loop.")
for (var i = 10; i <= 100; i+= 25) {
console.log("At home, I have " + i + " cats.");
}

console.log("while loop.")
var num = -15;
var counter = 0;

while (num <= 80) {	
	num += 25;
	counter += num;
	console.log("At home, I have " + num + " cats.");
}

// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the number is even and greater than 10, and 'Odd' if the number is odd.
// HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

for (var i = 0; i <= numArray.length; i++) {
if (numArray[i] > 10 && numArray[i] % 2 === 0 ) {
	 console.log('Even and greater than 10');
} else if (numArray[i] % 2 === 0) {
	 console.log('Even');
}
else {
	console.log('Odd');
}
};

// 8. Given the following Array
// Create variable numThrees with the value [13, 23, 33, 43, 53, 63, 73]
console.log("These are numThrees");
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]

for (var i = 0; i <= numArray.length; i++) {
	if (i % numArray[i] === 0 && numArray[i] % 1 === 0 && numArray[i] % 2 !== 0 ) {
		console.log(numArray[i]);
	} else if (i % i === 0 && i % 3 === 0) {
		console.log(numArray[i]);
	} else {
		continue;
	}
}; 

// 9. Write a loop that outputs the following to the console:
//Ideal for using a simple str w/ += from Eloquent Javascript.

var str = '';
for (var i = 0; i < 7; i++) {
  console.log(str += '#');
}

// Another solution to this I found...
// for (var tri = "#"; tri.length < 8; tri += "#")
// console.log(tri);

//Trying out variations.
//Logs '*' every other character
var str = '';
for (var i = 0; i < 7; i++) {
  	if (i % 2 === 0 ) {
  	console.log(str += '#');
  } else if (i % 2 !== 0 ) {
  	console.log(str += '*');
  }
};

//Logs '#' triangle going every other row
var r = "";

for (var i = 0; i < 3; i++){	
if (i){
console.log(r += '#'); // Logs '#'
}
if (i === i*(i+1/2)) {
console.log(r += '\n'); // Logs '\n' to first line of every row
	} if (i);
console.log(r += '#');
};

// #  			i \n
// ##  			ii \n
// ###          iii \n
// ####         iiii \n
// #####		iiiii \n
// ######       iiiiii \n
// #######      iiiiiii \n

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to randomly choose. You will use an alert to define the winner.
var human = prompt("Do you choose rock, paper or scissors?"); // human choice
var computer = Math.random(); // computer choice
if (computer < 0.34) { //choice1
	computer = "rock";
} 
else if(computer <= 0.67) { //choice2
	computer = "paper";
} 
else {
	computer = "scissors"; //choice3
} console.log("Computer chooses: " + computer); // Log computer choice

var compare = function(choice1,choice2) { // Compare human and computer choices
    if (choice1 === choice2) {
        return "The result is a tie!"
    }
    else if (choice1 === "rock") {
         if (choice2 === "scissors") {
            return "rock wins"
        }
        else {
            return "paper wins"
        }
    }     
    else if (choice1 === "paper") {
         if (choice2 === "rock") {
        return "paper wins"
        }
        else {
            return "scissors wins"
        }
    }
    else if (choice1 === "scissors") {
         if (choice2 === "paper") {
            return "scissors wins"
        }
        else {
            return "rock wins"
        }
    }
}
console.log(compare(human,computer));

// HEDS ER TALES?
// 20. Use the following variable for your coin flip action:
// 21. Use a do/while loop to keep flipping the coin until you get tails.
var coin = Math.floor(Math.random() * 2); //coin flip math
var tosses = 10; // number of tosses


do {
tosses++;
coin += tosses;
} 	while (coin === 0){
	var coin = Math.floor(Math.random() * 2);
	console.log("Heads, flipping again...");
}	if (coin === 1) {
	console.log("Tails."); 
}



// 22. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
for(var i = 1; i <101; i++){
if (i % 3 === 0 && i % 5 === 0) { // Condition1 - Must be first to log correctly.
	console.log ("FizzBuzz");  // Condition1 Met
} else if (i % 5 === 0)  {    // Condition2
	console.log ("Buzz");    // Conditioin2 Met
} else if (i % 3 === 0)  {  // Condition3
 	console.log ("Fizz");  // Conditioin1 Met
} else {
 	console.log (i); // All other numbers
 }
}


// CHESS BOARD
// 23. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. 

 var r = "";
        for (var i = 1; i < 31; i++){
            if (i % 5 === 0) { //Insert line break every 5 counts
               r += "\n";
            } else if (i === 6 ||i === 16 ||i === 26) { //if # add an extra space to the beginning 
            	r +=  " " + " #" ; // shifting the pattern over one
            } else {
               r += " #"; // All the rest      
            }
        }   
        	if (i )
        
        console.log(r);
  
//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
