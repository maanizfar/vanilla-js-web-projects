const apiURL = "https://api.exchangerate-api.com/v4/latest/";

const currencyOneSelect = document.getElementById("currency-1"),
  currencyTwoSelect = document.getElementById("currency-2"),
  currencyOneInput = document.getElementById("currency-input-1"),
  currencyTwoInput = document.getElementById("currency-input-2"),
  rate = document.getElementById("rate"),
  swapButton = document.getElementById("swap-btn");

swapButton.addEventListener("click", () => {
  const temp = currencyOneSelect.value;
  currencyOneSelect.value = currencyTwoSelect.value;
  currencyTwoSelect.value = temp;

  convertCurrency();
});

function convertCurrency() {
  fetch(apiURL + currencyOneSelect.value)
    .then(res => res.json())
    .then(data => {
      const exRate = data.rates[currencyTwoSelect.value];

      currencyTwoInput.value = (currencyOneInput.value * exRate).toFixed(2);

      rate.innerText = `1 ${currencyOneSelect.value} = ${exRate.toFixed(2)} ${
        currencyTwoSelect.value
      }`;
    })
    .catch(err => {
      console.error(err);
    });
}

currencyOneInput.addEventListener("input", convertCurrency);
currencyTwoInput.addEventListener("input", convertCurrency);
currencyOneSelect.addEventListener("change", convertCurrency);
currencyTwoSelect.addEventListener("change", convertCurrency);

convertCurrency();
