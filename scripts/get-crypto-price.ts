const cryptocurrency = process.argv[2];
const realCurrency = process.argv[3];

if (!cryptocurrency) {
  console.error('Please provide a cryptocurrency');
  process.exit(1);
}

const acceptableCurrencies = ['usd', 'eur'];
if (!acceptableCurrencies.includes(realCurrency)) {
  console.error('Unsupported currency provided, pelase use "usd" or "eur"');
  process.exit(1);
}

try {
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrency}&vs_currencies=${realCurrency}`)
  const data = await response.json();
  console.log(`Price for 1 ${cryptocurrency} is ${data[cryptocurrency][realCurrency]} ${realCurrency.toUpperCase()}`);
} catch (error) {
  console.error('There was an error processing your request');
}
