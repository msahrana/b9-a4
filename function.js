// function calculateMoney(ticketSale) {
//   if (ticketSale < 0) {
//     return "Please provide a positive number.";
//   }
//   const result = ticketSale * 120 - (500 + 8 * 50);
//   return result;
// }
// console.log(calculateMoney(1055));

// function checkName(name) {
//   if (typeof name !== "string") {
//     return "Please provide a string.";
//   }
//   if (
//     name.substr(-1).toLowerCase().includes("a") ||
//     name.substr(-1).toLowerCase().includes("e") ||
//     name.substr(-1).toLowerCase().includes("i") ||
//     name.substr(-1).toLowerCase().includes("o") ||
//     name.substr(-1).toLowerCase().includes("u") ||
//     name.substr(-1).toLowerCase().includes("y") ||
//     name.substr(-1).toLowerCase().includes("w")
//   ) {
//     return "Good Name";
//   } else {
//     return "Bad Name";
//   }
// }
// console.log(checkName(["Rashed"]));

// function deleteInvalids(array) {
//   if (Array.isArray(array) === false) {
//     return "Please provide an array.";
//   }
//   const newArray = [];
//   for (const item of array) {
//     if (typeof item === "number" && !isNaN(item)) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }
// console.log(
//   deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], {ob: "lala"}])
// );

// function password(obj) {
//   if (
//     !obj.hasOwnProperty("name") ||
//     !obj.hasOwnProperty("birthYear") ||
//     !obj.hasOwnProperty("siteName") ||
//     obj.birthYear.toString().length !== 4
//   ) {
//     return "Invalid";
//   }
//   const result = `${obj.siteName[0].toUpperCase() + obj.siteName.slice(1)}#${
//     obj.name
//   }@${obj.birthYear}`;
//   return result;
// }
// console.log(
//   password({name: "kolimuddin", birthYear: 1999, siteName: "google"})
// );

// function monthlySavings(arr, livingCost) {
//   if (Array.isArray(arr) === false) {
//     return "Invalid input";
//   } else if (typeof livingCost !== "number") {
//     return "Invalid input";
//   }
//   let sum = 0;
//   for (const item of arr) {
//     if (item >= 3000) {
//       sum = sum + (item - item * 0.2);
//     } else {
//       sum = sum + item;
//     }
//   }
//   const savings = sum - livingCost;
//   if (savings >= 0) {
//     return savings;
//   } else {
//     return "earn more";
//   }
// }
// console.log(monthlySavings([1000, 2000, 3000], 5400));
