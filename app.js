//1
function square(num) {
 
  return num ** 2;
}

console.log(square(5));


//2
function calculateDiscountedPrice(price, discountPercentage) {
  
  const discountAmount = price * (discountPercentage / 100);
  
  return price - discountAmount;
}

console.log(calculateDiscountedPrice(1000, 10));


//3
function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

console.log(generateRandomNumber())


//4
function stringLength(str) {
  return str.length;
}

console.log(stringLength('Hello, World!'));


//5
const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];

function getSmallestRateCurrency(currencies) {
  let smallestRate = currencies[0];
  for (let i = 1; i < currencies.length; i++) {
    if (currencies[i].rate < smallestRate.rate) {
      smallestRate = currencies[i];
    }
  }
  return smallestRate;
}

const smallestRateCurrency = getSmallestRateCurrency(currencies);
console.log(smallestRateCurrency.name, smallestRateCurrency.rate);