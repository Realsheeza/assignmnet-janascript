// //       Assignmnent no 1
// let firstNumber = parseInt(prompt("Enter the first number:"));
// let secondNumber = parseInt(prompt("Enter the second number:"));
// alert(`The sum of two number ${firstNumber} and ${secondNumber} is = ${firstNumber + secondNumber}`);
// alert(`The subtraction of two number ${firstNumber} and ${secondNumber} is = ${firstNumber - secondNumber}`);
// alert(`The multiplication of two number ${firstNumber} and ${secondNumber} is = ${firstNumber * secondNumber}`);
// alert(`The division of two number ${firstNumber} and ${secondNumber} is = ${firstNumber / secondNumber}`);
  
// //     Assignmnet no 2
// let student1 = parseInt(prompt("Enter the age of first student1:"));
// let student2 = parseInt(prompt("Enter the age of first student2:"));
// let student3 = parseInt(prompt("Enter the age of first student3:"));
// let student4 = parseInt(prompt("Enter the age of first student4:"));
// let student5 = parseInt(prompt("Enter the age of first student5:"));
// let student6 = parseInt(prompt("Enter the age of first student6:"));
// let student7 = parseInt(prompt("Enter the age of first student7:"));
// let student8 = parseInt(prompt("Enter the age of first student8:"));
// let student9 = parseInt(prompt("Enter the age of first student9:"));
// let student10 = parseInt(prompt("Enter the age of first student10:"));
// alert(`Average age is=${student1+student2+student3+student4+student5+student6+student7+student8+student9+student10/10}`);

// //       Assignmnet no 3
// let intgerNumber =parseInt(prompt("Enter the 4-digit integer:"));
// let digit4=(intgerNumber%10);
// let digit3=Math.floor((intgerNumber%100)/10);
// let digit2=Math.floor((intgerNumber%1000)/100);
// let digit1=Math.floor(intgerNumber/1000);
// alert("The digits are:\n" + digit4 + ", " + digit3 + ", " + digit2 + ", " + digit1);

// //       Assignmnet no 4

// let radius=prompt("Enter the radius of the circle:");
// diameterOfCirlce=2*radius;
// circumferenceOfCirle=2*Math.PI*radius;
// areaOfCircle=Math.PI*Math.pow(radius,2);
// alert(`The diameter of the circle is=${diameterOfCirlce}
//     \n The circumference of the circle is=${circumferenceOfCirle}
//     \n The area of the circle is=${areaOfCircle}`);

// //       Assignmnet no 5

// alert("Welocome! Let's find something special for you today!");
// let itemName=prompt("Enetr the name of product:");
// let price=parseInt(prompt("Enter the price of the product:"))
// let quantity=parseInt(prompt("Enter the quantity of the product:"))
// alert(`You havr purchased ${itemName} having price of ${price} in ${quantity} quantity and your subtotal is ${price*quantity}`);

// //       Assignmnet no 6

// let weight=parseFloat(prompt("Enetr you weight in kg:"));
// let height=parseFloat(prompt("Enetr you height in m:"));
// alert(`BMI=${weight/Math.pow(height,2)}`);

// //       Assignmnet no 7

// let currentage=parseInt(prompt("Enetr your age:"));
// currentage=currentage*52;
// let estimatedAge=90*52;
// alert(`You have ${estimatedAge-currentage} weeks left.`);

// //       Assignmnet no 8

// let size = prompt("Choose the pizza size:\nSmall pizza (S) = $15\nMedium pizza (M) = $20\nLarge pizza (L) = $25").toUpperCase();
// let bill = 0;

// switch (size) {
//   case 'S':
//     bill += 15;
//     var addPepperoni = prompt("Add pepperoni for small pizza? (Y/N)").toUpperCase();
//     if (addPepperoni === "Y") {
//       bill += 2;
//     }
//     break;

//   case 'M':
//     bill += 20;
//     var addPepperoni = prompt("Add pepperoni for medium pizza? (Y/N)").toUpperCase();
//     if (addPepperoni === "Y") {
//       bill += 3;
//     }
//     break;
//   case 'L':
//     bill += 25;
//     var addPepperoni = prompt("Add pepperoni for large pizza? (Y/N)").toUpperCase();
//     if (addPepperoni === "Y") {
//       bill += 3;
//     }
//     break;

//   default:
//     alert("Please select a valid option (S, M, or L).");
//     break;
// }
// let addCheese = prompt("Add extra cheese? (Y/N)").toUpperCase();
// if (addCheese === "Y") {
//   bill += 1;
// }
// alert("Thank you for choosing javascript pizza deliveries! \nYour final bill is $" + bill);

// //       Assignmnet no 9

// let tweet=prompt("enter your tweet:");
// if(tweet.length<=140)
//     alert(`That ${tweet.length} char tweet will work!`); 
// else
//     alert(`That ${tweet.length} char tweet is ${tweet.length-140} chars too long`);  


// //      Assignmnet no 10

// let height=parseFloat(prompt("Enetr your height in inches:"));
// let weight=parseFloat(prompt("Enter your weight in pounds:"));
// let BMI=(weight*703)/(height*height);
// let category=" ";
// if (BMI < 16.0) {
//     category = "Severely Underweight";
// } else if (BMI >= 16.0 && BMI <= 18.4) {
//     category = "Underweight";
// } else if (BMI > 18.4 && BMI <= 24.9) {
//     category = "Normal";
// } else if (BMI >= 25.0 && BMI <= 29.9) {
//     category = "Overweight";
// } else if (BMI >= 30.0 && BMI <= 34.9) {
//     category = "Moderately Obese";
// } else if (BMI >= 35.0 && BMI <= 39.9) {
//     category= "Severely Obese";
// }else{
//     category= "Morbidly obese";
// }
// alert(`Your BMI of ${BMI} makes you ${category}`);

// //      Assignmnet no 11

// let age=prompt("Enetr your age");
// if(age<18){
//     alert("Sorry! you are too young to drive this car. Powering Off");
// } else if (age==18){
//     alert("Congratulation on your first year of driving. Enjoy the ride!");
// }else{
//     alert("Powering On. Enjoy the ride!");
//  }

// //      Assignmnet no 12

// function colorMessage(favoriteCol0r,shirtColor)
// {
//     if(favoriteCol0r==shirtColor)
//     {
//         alert("\'The shirt is your favourite color!\'");
//     }else
//     alert("\'This is a nice color.\'")
// }
// let favoriteCol0r=prompt("Enetr your favourite color");
// let shirtColor=prompt("Enter the color of your shirt");
// colorMessage(favoriteCol0r,shirtColor);

// //      Assignmnet no 13

// function isEven(number)
// {
//   if(number%2==0)
//   {
//     return true;
//   }else{
//     return false;
//   }
// }
// let number=parseInt(prompt("Enetr a number"));
// let answer=isEven(number);
// console.log(answer);

// //      Assignmnet no 14

// function lifePhase()
// {
//     if (age >=0 && age <= 3) {
//         return "baby";
//     } else if (age >=4 && age <= 12){
//         return "child";
//     } else if (age >=13 && age <= 19){
//         return "teen";
//     } else if (age >=24 && age <= 64){
//         return "adult";
//     } else if (age >=65 && age <= 140){
//         return "senior citizen";
//     }else{
//         return "This is not a valid age" ;
//     }
// }
// let age=parseInt(prompt("Enetr you age"));
// let returnValue=lifePhase(age);
// console.log(returnValue);


// //      Assignmnet no 15

// let quarter=parseInt(prompt("Enter the number of quarter from 1 to 4"));
// switch(quarter)
// {
//     case 1:
//     alert("Months in Quater1=January, February, March");
//     break;
//     case 2:
//         alert("Months in Quater2=April, May, June");
//     break;
//     case 3:
//         alert("Months in Quater3=July, August, September");
//     break;
//     case 4:
//         alert("Months in Quater4=October, November, December");
//     break;
// }

// //      Assignmnet no 16

// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
// const sentence = ['sense.', 'make', 'all', 'will', 'This'];
// const result = reverseArray(sentence);
// console.log(result); 

// //      Assignmnet no 17

// function finalGrade(number1,number2,number3)
// {
//     let average=(number1+number2+number3)/3;
//     if (average >=0 && average <= 59) {
//         return "F";
//     } else if (average >=60 && average <= 69){
//         return "D";
//     } else if (average >=70 && average <= 79) {
//         return "C";
//     } else if (average >=80 && average <= 89) {
//         return "B";
//     } else if (average >=90 && average <= 100) {
//         return "A";
//     }else{
//         return "You have enetered an invalid grade";
//     }
// }
// let number1=parseInt(prompt("Enetr the first number"));
// let number2=parseInt(prompt("Enetr the second number"));
// let number3=parseInt(prompt("Enetr the third number"));
// let grade=finalGrade(number1,number2,number3);
// console.log(grade);
