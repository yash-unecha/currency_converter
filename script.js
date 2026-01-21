const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultDiv = document.getElementById("result");

// Your API key from apilayer
const API_KEY = "YOUR_API_KEY";

convertBtn.addEventListener("click", () => {
  const amount = amountInput.value.trim();
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount) {
    alert("Please enter an amount");
    return;
  }

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      "apikey": API_KEY
    }
  };

fetch("https://api.apilayer.com/exchangerates_data/convert?to="+ to +"&from="+ from +"&amount="+ amount, requestOptions)
    .then(response => response.json())
    .then(data => {
      if(data.result !== undefined){
        resultDiv.innerHTML = `<h2>${amount} ${from} = ${data.result.toFixed(2)} ${to}</h2>`;
      } else {
        resultDiv.innerHTML = `<p>Conversion failed. Try again.</p>`;
      }
    })
    .catch(error => {
      console.error(error);
      resultDiv.innerHTML = `<p>Error fetching data!</p>`;
    });
});

