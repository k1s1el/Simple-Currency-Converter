{
    const welcomeFunction = () => {
        console.log("hello world")
    };

    welcomeFunction();

    const calculateResult = (amount, currency) => {

        const rateEUR = 4.45;
        const rateUSD = 3.95;
        const rateGBP = 4.94;
        const ratePLN = 1;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "PLN":
                return amount / ratePLN;
        };
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");
            const exchangeElement = document.querySelector(".js-exchangeValue");
            const amount = +amountElement.value;
            const currency = currencyElement.value;

            const result = calculateResult(amount, currency);

            exchangeElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;

        });
    };

    init();
}