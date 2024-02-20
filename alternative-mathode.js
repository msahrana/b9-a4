function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number";
  }
  const dailyEarning = ticketSale * 120 - (500 + 8 * 50);
  return dailyEarning;
}
console.log(calculateMoney(1055));
function checkName(name) {
  const checkChar = "ayieouw";
  if (typeof name !== "string") {
    return "invalid";
  }
  if (checkChar.includes(name.toLowerCase().charAt(name.length - 1))) {
    return "Good Name";
  }
  return "Bad Name";
}
console.log(checkName(["Rashed"]));
function deleteInvalids(array) {
  const numArr = [];
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  for (const arrElem of array) {
    if (typeof arrElem === "number" && !isNaN(arrElem)) {
      numArr.push(arrElem);
    }
  }
  return numArr;
}
console.log(
  deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], {ob: "lala"}])
);
function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  }
  const siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  const passStructure = `${siteName}#${obj.name}@${obj.birthYear}`;
  return passStructure;
}
console.log(
  password({name: "kolimuddin", birthYear: 1999, siteName: "google"})
);
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) && typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalEarning = 0;
  for (let arrElem of arr) {
    if (arrElem >= 3000) {
      arrElem = arrElem - (3000 * 20) / 100;
    }
    totalEarning += arrElem;
  }
  const totalSavings = totalEarning - livingCost;
  if (totalSavings < 0) {
    return "earn more";
  }
  return totalSavings;
}
console.log(monthlySavings([1000, 2000, 3000], 5400));
