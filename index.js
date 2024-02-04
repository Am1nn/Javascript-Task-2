// 1. Write a function that takes 2 numbers and returns -1 if the first is less than the second; 1 – if the first
// more than the second; and 0 – if the numbers are equal.

// function compareNumbers() {
//     var number1 = prompt("Enter the first number");
//     var number2 = prompt("Enter the second number");
//     if (number1 < number2) {    return -1;}
//     else if (number1 > number2) { return 1;}
//     else {return 0; }
// }
// console.log(compareNumbers());


// 2. Write a function that calculates the factorial of the number passed to it.

// function findFactorial()
// {
//     var number=prompt("Enter Number");
//     var factorial=1;
//     for(var a=1;a<=number;a++)
//     {
//         factorial=factorial*a;
//     }
//     return factorial;
// }
// console.log(findFactorial());

// 3. Write a function that takes three separate
// numbers and turns them into one number. For example: numbers
// 1, 4, 9 will turn into the number 149.

// function concatanateNumbers()
// {
//     var number1=prompt("Enter First Number");
//     var number2=prompt("Enter Second Number")
//     var number3=prompt("Enter Three Number")

//     var concatNumber=number1+number2+number3;
//     concatNumber=parseInt(concatNumber);
//     return concatNumber;
// } 
// console.log(concatanateNumbers());

// 4. Write a function that takes length and width
// rectangle and calculates its area. If in the function
// passed 1 parameter, then it calculates the area of the square.

// function calculateArea(length, width) 
// {
//     if (width === undefined) {
//         return length * length;
//     } else {
//         return length * width;
//     }
// }
// console.log(calculateArea(10,10));
// console.log(calculateArea(4));

// 5. Write a function that checks whether the number passed to it is perfect. A perfect number is
// a number equal to the sum of all its own divisors.

// function isPerfectNumber(number) {
//     let summ = 0;

//     for (let i = 1; i <= Math.floor(number / 2); i++) 
//     {
//         if (number % i === 0) {
//             summ += i;
//         }
//     }
//     return summ === number;
// }

// console.log(isPerfectNumber(28));
// console.log(isPerfectNumber(22));



// 6. Write a function that takes the minimum and
// maximum value for the range, and only outputs
// those numbers from the range that are perfect.
// Use the function you wrote earlier to find out
// perfect number or not.

// Bundan Evvel Yazdigim Hazir Funksiyadan Istifade Etmisem
// function perfectNumbersInRange(min, max) {

//     var perfectNumbers = [];

//     for (var i = min; i <= max; i++) 
//     {
//         if (isPerfectNumber(i)) {
//             perfectNumbers.push(i);
//         }
//     }

//     return perfectNumbers;
// }
// console.log(perfectNumbersInRange(1,100));


// 7. Write a function that takes the time (hours, minutes, seconds) and displays it on the screen in the format “hh:mm:ss”.
// If the minutes and/or seconds were not present when calling the function
// transmitted, then output them as 00.

// function formatTime(hours, minutes = 0, seconds = 0) // Default Deyer 
// {
//     if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60 || seconds < 0 || seconds >= 60) {
//         return "Wrong Value";
//     }

//     const formattedHours = hours < 10 ? `0${hours}` : hours;
//     const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//     const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

//     const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

//     return formattedTime;
// }

// console.log(formatTime(4, 20, 15));




// 8. Write a function that takes hours, minutes and
// seconds and returns that time in seconds.
// function timeToSeconds(hours, minutes, seconds) {

//     if (hours < 0 || minutes < 0 || seconds < 0) {
//         return "Wrong Value";
//     }
//     const totalSeconds = hours * 3600 + minutes * 60 + seconds;
//     return totalSeconds;
// }
// console.log(timeToSeconds(1,10,3));

// 9. Write a function that takes the number of seconds,
// converts them to hours, minutes and seconds and returns them to
// as the string "hh:mm:ss".

// function secondsToTime(seconds) {
//     if (isNaN(seconds) || seconds < 0) 
//     {
//         return "Wrong Input";
//     }

//     var hours = Math.floor(seconds / 3600);
//     var minutes = Math.floor((seconds % 3600) / 60);
//     var remainingSeconds = seconds % 60;

//     // Bu Hissede Ternary Operatordan Istifade etmishem
//     var formattedHours = hours < 10 ? `0${hours}` : hours;
//     var formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//     var formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds; 
//     //////////////////////////////////////////////////

//     const formattedTime = formattedHours+":"+formattedMinutes+":"+formattedSeconds;

//     return formattedTime;
// }

// console.log(secondsToTime(5000));



// 10. Write a function that calculates the difference between dates.
// The function takes 6 parameters that describe 2
// dates, and returns the result as the string “hh:mm:ss”. At
// to complete the task, use the functions from the previous 2 tasks: first convert both dates to seconds,
// find out the difference in seconds, and then convert the difference
// back to "hh:mm:ss".


// function timeDifference() {
//     var date1Hours=prompt("Enter First Date Hours")
//     var date1Minutes=prompt("Enter First Date Minutes")
//     var date1Seconds=prompt("Enter First Date Seconds")
//     var date2Hours=prompt("Enter Second Date Hours")
//     var date2Minutes=prompt("Enter Second Date Minutes")
//     var date2Seconds=prompt("Enter Second Date Seconds")
//     const date1InSeconds = timeToSeconds(date1Hours, date1Minutes, date1Seconds);
//     const date2InSeconds = timeToSeconds(date2Hours, date2Minutes, date2Seconds);
//     const differenceInSeconds = Math.abs(date1InSeconds - date2InSeconds);
//     const timeDifferenceString = secondsToTime(differenceInSeconds);
//     return timeDifferenceString;
// }


// console.log(timeDifference());



// 11.Create an array "Shopping list". Each element of the array
// is an object that contains the product name, quantity required and purchased or not. Write several functions to work with such an array.
// 1) Display the entire list on the screen in such a way that first
// There were unpurchased products, and then purchased ones.
// 2) Adding a purchase to the list. Please note that when adding
// purchases with a product already existing in the list, it is necessary to increase the quantity in the existing purchase,
// rather than adding a new one.
// 3) Purchasing a product. The function takes the product name
// and marks it as purchased.


// // Task 1
// let shoppingList = [
//     { productName: "Bread", quantity: 2, purchased: false },
//     { productName: "Cola", quantity: 1, purchased: true },
//     { productName: "Doritos", quantity: 3, purchased: false },
// ];

// // Task 2
// function displayProducts() {
//     const unpurchasedItems = shoppingList.filter(item => !item.purchased);
//     const purchasedItems = shoppingList.filter(item => item.purchased);
//     const combined = [...unpurchasedItems, ...purchasedItems];
//     combined.forEach(item => {
//         console.log("Product:" + item.productName + "Quantity:" + item.quantity + "Purchsed:" + item.purchased);
//     });
// }

// // Task 3
// function addPurchase(productName, quantity) {
//     const existingItem = shoppingList.find(item => item.productName === productName);
//     if (existingItem) {
//         existingItem.quantity += quantity;
//     } else {
//         // Eyer Bu mehsul yoxdursa ora elave edir
//         shoppingList.push({ productName, quantity, purchased: false });
//     }
// }

// // Task 4
// function purchaseProduct(productName) {
//     const itemToPurchase = shoppingList.find(item => item.productName === productName);
//     if (itemToPurchase) {
//         itemToPurchase.purchased = true;
//     } else {
//         console.log("Wrong Product Name");
//     }
// }


// displayProducts();
// addPurchase("Bread", 2); // Var Olani Artiririq
// addPurchase("Ice-Cream", 2); // Yenisi Yaradilir
// purchaseProduct("Bread");
// displayProducts();







// 12.Create an array describing a receipt in a store. Each element of the array consists of the product name, quantity and price for
// unit of goods. Write the following functions.
// 1) Print out the receipt on the screen.
// 2) Calculation of the total purchase amount.
// 3) Receiving the most expensive purchase in the receipt.
// 4) Calculation of the average cost of one product in a receipt.

// let receipt = [
//     { productName: "Bread", quantity: 3, pricePerUnit: 1.5 },
//     { productName: "Cola", quantity: 2, pricePerUnit: 0.8 },
//     { productName: "Doritos", quantity: 1, pricePerUnit: 2.0 },
//   ];
  
//   // Task 1
//   function printReceipt() {
//     receipt.forEach(item => {
//       console.log("Product:"+item.productName+"Product Quantity:"+item.quantity+"Price Per Unit:"+item.pricePerUnit);
//     });
//   }
  
//   // Task 2
//   function calculateTotalAmount() 
//   {
//     return receipt.reduce((total, item) => total + item.quantity * item.pricePerUnit, 0);
//   }
  
//   // Task 3
//   function findMostExpensivePurchase() {
//     let mostExpensiveItem;
//     let maxPrice = 0;
  
//     receipt.forEach(item => 
//     {
//       const totalPrice = item.quantity * item.pricePerUnit;
//       if (totalPrice > maxPrice) {
//         maxPrice = totalPrice;
//         mostExpensiveItem = item;
//       }
//     });

//     return mostExpensiveItem;
//   }
  
//   // Tas 4
//   function calculateAverageCost() 
//   {
//     const totalAmount = calculateTotalAmount();
//     const totalQuantity = receipt.reduce((total, item) => total + item.quantity, 0);
//     return totalAmount / totalQuantity;
//   }
  

//   printReceipt();
//   console.log(calculateTotalAmount());
//   const mostExpensive = findMostExpensivePurchase();
//   console.log(mostExpensive.productName);
//   console.log( calculateAverageCost());
  

// 13.Create an array of academy audiences. The audience object consists of a name, number of seats (from 10 to 20) and
// the name of the faculty for which it is intended.
// Write several functions to work with it.
// 1) Display all audiences.
// 2) Display the audiences for the specified faculty.
// 3) Display only those audiences that are suitable for
// transferred group. A group object consists of a name,
// number of students and name of faculty.
// 4) Function of sorting audiences by number of seats.
// 5) Function of sorting audiences by name (alphabetically)


// let audiences = [
//     { name: "Class A", seats: 15, faculty: "Computer Science" },
//     { name: "Class B", seats: 20, faculty: "Mathematics" },
//     { name: "Class C", seats: 18, faculty: "Programming" },
//   ];
  
//   // Task 1
//   function displayAllAudiences() {
//     audiences.forEach(audience => {
//       console.log("Audiences:"+audience.name +"Seats:"+audience.seats +"Faculty:"+audience.faculty);
//     });
//   }
  
//   // Task 2
//   function displayAudiencesByFaculty(faculty) {
//     const facultyAudiences = audiences.filter(audience => audience.faculty === faculty);
//     facultyAudiences.forEach(audience => {
//       console.log("Audiences:"+audience.name+"Seats:"+audience.name);
//     });
//   }
  
//   // Task 3
//   function displaySuitableAudiences(group) {
//     const suitableAudiences = audiences.filter(audience => {
//       return (
//         audience.faculty === group.faculty &&
//         audience.seats >= group.number_of_students &&
//         audience.seats <= group.number_of_students + 10
//       );
//     });
  
//     suitableAudiences.forEach(audience => {
//       console.log("Audiences:"+audience.name+"Seats:"+audience.name);
//     });
//   }
  
//   // Task 4
//   function sortAudiencesBySeats() {
//     audiences.sort((a, b) => a.seats - b.seats);
//   }
  
//   // Task 5
//   function sortAudiencesByName() {
//     audiences.sort((a, b) => a.name.localeCompare(b.name));
//   }
  

//   displayAllAudiences();
//   displayAudiencesByFaculty("Computer Science");
//   const group = { name: "Class F", number_of_students: 15, faculty: "Mathematics" };
//   displaySuitableAudiences(group);
//   sortAudiencesBySeats();
//   displayAllAudiences();
//   sortAudiencesByName();
//   displayAllAudiences();
  



