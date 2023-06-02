

// ---------------------ASSAIGMENT 3 VARIABLE FOR NUMBERS--------------
// Q1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var age=( "I am 15 years old" );
// alert(age);


// Q2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”. 


// var visits = 14;
// alert("You have visited this site " + visits + " times");


// Q3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:


// var birthYear = 1990;
// document.write("My birth year is " + birthYear  + "<br>"  + "Data type of my decleared variable is number");




// Q4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


// var visitorName = "Jhon Doe";
// productTitle = "T-shirt";
// quantity = "5"

// document.write(visitorName +" orderd " + quantity  + productTitle  +  "(s) on XYZ clothing store" )



// ------------ASSAIGMENT 4  LEGAL AND ILLEGAL VARIABLE NAMES--------------

// 1. Declare 3 variables in one statement

// let name = "nazish";  let age = 20 ; let class = "web development"

// 2. Declare 5 legal & 5 illegal variable names.

// LEGAL VARIABLE

// let myName = "nazish"
// let $color = "pink"
// let _age = "20"
// let class1 = "web development"
// let total_Students = "150" 

// ILLEGAL VARIABLE

// let my Name = "nazish"
// let %color = "pink"
// let !age = "20"
// let class# = "web development"
// let total@Students = "150" 



// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain , numbers , $and_.For example:$my_1stVariable</P>");
// document.write("<p>Variables must begin with a letter , $ or _. For example:$name , _name or name</p>");
// document.write("<p> Variable names are case sensitive</p>");
// document.write("<p>Variable names should not be JS keyword</p>");

// ---------------END---------------


// ---------------ASSAIGNMENT 5 MATH EXPRESSIONS----------------
// Q1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.



// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("sum of " + num1 + "and " + num2 +"is " + sum );

//Q2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// var num1 = 3;
// var num2 = 5;
// var sum = num1 - num2;
// document.write("sum of " +  num1 + "and " + num2  + "is" + sum);

// var num1 = 3;
// var num2 = 5;
// var sum = num1 * num2;
// document.write("sum of " +  num1 + "and " + num2  + "is" + sum);

// var num1 = 3 ;
// var num2 = 5;
// var sum = num1 / num2;
// document.write("sum of " + num1 + "and "  +  num2  + "is"  +  sum);

// var num1 = 3 ;
// var num2 = 5;
// var sum = num1 % num2;
// document.write("sum of " + num1 + "and "  +  num2  + "is"  +  sum);

// Q3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.


// let myVariable;
// document.write("Value after variable declaration is: " +  myVariable);

// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”

// var num = 5;
// document.write("initial value: " + num);

// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

// let num = 5;
// ++num;
// document.write("Value after increment is: " + num);

// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.


// let num1 = 7;
// let num2 = 6;
// let num3 = num1 + num2 ;
// document.write("value after addition is:"  + num3);


// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.


// let num = 13 ;
// --num;
// document.write("value after decreement is:"  + num);


// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

// let num1 = 3;
// let num2 = 3 ;
// let num3 = num1 % num2;
// document.write("The remainder is:" + num3); 


// Q4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:

// let ticketPrice = 600;
// let  numberOfTicket = 5;
// let totalCost = ticketPrice *  numberOfTicket;
// document.write("The total cost to buy" +  numberOfTicket +  "ticket to a movie is:" + totalCost);

// Q5. Write a script to display multiplication table of any 
// number in your browser. E.g
// document.write(" 4 "+ " x " + 1 + " = " + 4*1 + " <br> ")
// document.write(" 4 "+ " x " + 2 + " = " + 4*2 + " <br> ")
// document.write(" 4 "+ " x " + 3 + " = " + 4*3 + " <br> ")
// document.write(" 5 "+ " x " + 4 + " = " + 4*4 + " <br> ")
// document.write(" 4 "+ " x " + 5 + " = " + 4*5 + " <br> ")
// document.write(" 4 "+ " x " + 6 + " = " + 4*6 + " <br> ")
// document.write(" 4 "+ " x " + 7 + " = " + 4*7 + " <br> ")
// document.write(" 4 "+ " x " + 8 + " = " + 4*8 + " <br> ")
// document.write(" 4 "+ " x " + 9 + " = " + 4*9 + " <br> ")
// document.write(" 4 "+ " x " + 10 +" = " + 4*10 + " <br>")


// Q6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formula 


// let celcius =  +prompt("enter temperature in celcius");
// let fahrenheit = + prompt("enter temperature in ferenhiet")

// document.write("temperature", celcius, "in fahrenheit is" ,((celcius *(9/5))+32),"<sup>O</sup> F <br>" );
// document.write("temperature", fahrenheit, "in celcius is" ,((fahrenheit-32)*(5/9)),"<sup>O</sup> C");

// Q7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;

// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// document.write("<h1>Shopping Cart</h1>");
// document.write("<p>Price of Item 1 is  " + item1Price + "</p>");
// document.write("<p>Quantity of Item 1 is " + item1Quantity + "</p>");
// document.write("<p>Price of Item 2 is " + item2Price + "</p>");
// document.write("<p>Quantity of Item 2 is " + item2Quantity + "</p>");
// document.write("<p>Shipping Charges  " + shippingCharges + "</p>");
// document.write("<h3>Total Cost is " + totalCost + "</h3>");


// Q8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser



// var totalMarks = 980;
// var marksObtained = 804;
// var percentage =  ( marksObtained*100)/totalMarks;
// document.write(" <h1>Mark sheet</h1> " );
// document.write("<p>Total marks" +  totalMarks + "</p") 
// document.write(" <p>marks Obtained" + marksObtained  + "</p>")
// document.write("<p> percentage"   + percentage +  "%</p>")

// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let dollar = +prompt("enter how many dollars you want to convert");
// let riyal = +prompt("enter how many riyals you want to convert");
// let conversion = (dollar*104.80) + (riyal*28);
// document.write("<b> currency in pkr</b> <br>");
// document.write("total currency in pkr is : ", conversion)

// Q10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// var num = 5
// var num1 = (5+5) * 10 / 2
// document.write(num1)




// Q11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”

// let currentyear = +prompt("enter current year");
// let birthyear = +prompt("enter birth year");
// let age = currentyear - birthyear ;

// document.write("<h1>Age  Calculator</h2>")
// document.write("current year is: ", currentyear, " <br>")
// document.write("birth year is: ", birthyear, " <br>")
// document.write("age is: ", age)

// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 



// let radius = +prompt("enter radius");
// let circumference = 2* Math.PI * radius;
// let area = Math.PI *(radius**2);
// document.write("<h1>The Geometrizer</h1>")
// document.write("radius is: ", radius, " <br>");
// document.write("circumference is: ", circumference, " <br>");
// document.write("area is: ", area, " <br>")

// Q13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.



// let fav$snack = prompt("enter your fav snack");
// let curr$age = +prompt("enter your current age");
// let max$age = +prompt("enter your estimated max age");
// let snack$per$day =  +prompt("enter amount of snack u eat per day");
// let value = 0;
// let loop$value = (max$age - curr$age)*365;
// for (let i=1;i<=loop$value;i++){
//      value = value+snack$per$day;
// }
// document.write("your fav snack : ",fav$snack, " <br>");
// document.write("your current age : ",curr$age, " <br>");
// document.write("your estimated max age : ",max$age, " <br>");
// document.write("amount of snack  per day : ",snack$per$day, " <br>");
// document.write("you will need : ",value, " snack to last you until the ripe old age of ", max$age , "<br>")


// -------------END---------------

// // --------ASSAIGNMENT 6 MATH EXPRESSIONS------

// Q1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


// var a = 10
 
// document.write("<h1>Result</h2>")
// document.write("<p>The value of a is: 10</p>")
// document.write("<p>.......................................</p>")
// document.write("<p>The value of ++a is: 11 <br> Now the value of a is 11</p>")
// document.write("<p>The value of a++ is :11 <br> Now the value of a is 12</p>")
// document.write("<p>The value of --a is: 11 <br> Now the value of a is 11</p>")
// document.write("<p>The value of a-- is: 11 <br> Now the value of a is 10</p>")

// Q2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2
// var b = 1
//  --a ; 2
// --a - --b;2-1
// --a - --b + ++b;2-1+ ++1
// --a - --b + ++b + b--;2-1 + 1 + 1

// document.write("a is:2 <br>");
// document.write("b is:1 <br>");
// document.write("Result is:3 <br>");



// Q3. Write a program that takes input a name from user & 
// greet the user.

// var a = prompt("Hello! what,s your name", "its nice to meet you");
// alert(a);


// 
// Q5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

// var userNum = +prompt("Enter a number")

// document.write(" 5 "+ " x " + 1 + " = " + 5*1 + " <br> ")
// document.write(" 5 "+ " x " + 2 + " = " + 5*2 + " <br> ")
// document.write(" 5 "+ " x " + 3 + " = " + 5*3 + " <br> ")
// document.write(" 5 "+ " x " + 4 + " = " + 5*4 + " <br> ")
// document.write(" 5 "+ " x " + 5 + " = " + 5*5 + " <br> ")
// document.write(" 5 "+ " x " + 6 + " = " + 5*6 + " <br> ")
// document.write(" 5 "+ " x " + 7 + " = " + 5*7 + " <br> ")
// document.write(" 5 "+ " x " + 8 + " = " + 5*8 + " <br> ")
// document.write(" 5 "+ " x " + 9 + " = " + 5*9 + " <br> ")
// document.write(" 5 "+ " x " + 10 +" = " + 5*10 + " <br>")

// Q6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

// var subject1 = prompt("Enter a subject1")
// var subject2 = prompt("Enter a subject2")
// var subject3 = prompt("Enter a subject3")
// var totalMarks = 100;
// var obtainedMarks1 = + prompt("Enter obtained marks for " +subject1 )
// var obtainedMarks2 = + prompt("Enter obtained marks for " + subject2 )
// var obtainedMarks3 = + prompt("Enter  obtained marks for " + subject3)
// var totalObtainedMarks= obtainedMarks1+obtainedMarks2+obtainedMarks3;
// var percentage= (totalObtainedMarks / (3 * totalMarks)) * 100;
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td><b>Total</b></td><td><b>" + (3 * totalMarks) + "</b></td><td><b>" + totalObtainedMarks + "</b></td></tr>");
// document.write("<tr><td><b>Percentage</b></td><td></td><td><b>" + percentage.toFixed(2) + "%</b></td></tr>");
// document.write("</table>");



// ---------------ASSAIGMENT 9 TO 11---------------- 

// Q1Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”  


// let cityName =prompt("Enter the city name")

// if("cityName === karachi"){
//     alert("welcome the city of lights")
// }


// Q2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.


// let gender = prompt("Enter your gender")
// if (gender === "male") {
//     alert("Good Morning Sir.");
//   } else if (gender === "female") {
//     alert("Good Morning Ma'am.");
//   } else {
//     alert("Invalid input. Please enter either 'male' or 'female'.");
//   }

// Q4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”


// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car.");
// } else {
//   alert("You have enough fuel in your car.");
// }


//  Q5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//  var a = "4";
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Q7Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 - 10):"))
// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//   alert("Close enough to the correct answer.");
// } else {
//   alert("Sorry, incorrect guess.");
// }

// Q8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3. 


// var number =+prompt("Enter a number:");
// if (number % 3 === 0) {
//   alert("The number is divisible by 3.");
// } else {
//   alert("The number is not divisible by 3.");
// }


// Q9. Write a program that checks whether the given input is an
// even number or an odd number


// var number = +prompt("Enter a number:");
// if (number % 2 === 0) {
//   alert("The number is even.");
// } else {
//   alert("The number is odd.");
// }

// Q10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



// var temperature = parseInt(prompt("Enter the temperature:"));
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else {
//   alert("The temperature is too low to display a message.");
// }

// ---------------END--------------

// ---------------ASSAINMENT 12 AND 13-------------

// Q1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).



// var character=prompt("Enter a character to check weather the givin input is a number ,uppercase letter or lowercase letter") 
//     var asciiCode = character.charCodeAt(0);
  
//     if (asciiCode >= 48 && asciiCode <= 57) {
//       console.log(character + " is a number.");
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//       console.log(character + " is an uppercase letter.");
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//       console.log(character + " is a lowercase letter.");
//     } else {
//       console.log(character + " is not a number or letter.");
//     }
  
   



// Q2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// var firstNumber=+prompt("Enter first number");
// var secondNumber=+prompt("Enter second number");
// if(firstNumber>secondNumber){
//     alert(firstNumber+" is largerthan "+ secondNumber);
// }
// else if(firstNumber<secondNumber){
//     alert(secondNumber+" is larger than "+ firstNumber);
// }
// else{
//     alert(firstNumber+" and "+ secondNumber+" both are equal");
// }




// Q3 Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.



// const number = +prompt("Enter a number:");


// if (number > 1) {
//   console.log("The number is positive.");
// } else if (number < 1) {
//   console.log("The number is negative.");
// }else {
//   console.log("The number is zero.");
// }


// Q4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise

//  var character=prompt("Enter a character")   
// if(character === "a"||character ==="e"||character ==="i"||character ==="o"||character ==="u"){
// console.log("true") 
// }
// else{
//     console.log("false")
// }



// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


// var Password = "246";

// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//   console.log("Please enter your password.");
// } else if (userPassword === Password) {
//   console.log("Correct! The password you entered matches the original password.");
// } else {
//   console.log("Incorrect password.");
// }


// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }



// var hour = 13;
// var hour =prompt ("Enter your hour")
// if (hour < 18){

//   alert("Good day")
// }
// else{
    
//   alert("Good evening")
// }


// Q7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


// var time = +prompt("Enter your time")
// if(time >= 0000 &&  time <=1200){
//   alert("Good morning")
// }
// else if(time >= 1200 &&  time <=1700){
//   alert("Good afternoon")
// }
// else if(time >= 1700 &&  time <=2100){
//   alert("Good evening")
// }
// else if(time >= 2100 &&  time <=2359){
//   alert("Good night")
// }
// else{
//   alert("your time is no correct")
// }