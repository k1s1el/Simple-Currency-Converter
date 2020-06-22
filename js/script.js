let currencyValue = document.querySelector(".js-eurValue");
let currencyExchangeRate = document.querySelector(".js-exchangeRate");
let formElement = document.querySelector(".js-form")
let exchangeValue = document.querySelector(".js-exchangeValue")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyValue.value;
    let exchange = currencyExchangeRate.value;

    let exchangeResult = (currency * exchange)

    exchangeValue.innerText = exchangeResult.toFixed(2);
});