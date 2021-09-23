let currency_str = '3000';

const ChangeCurrency = () => {
  currency_str = Number(document.getElementById('initial').value);
  updateCurrencyBoard();
}

const updateCurrencyBoard = () => {
  document.getElementById('currency').innerHTML= zeroPad(currency_str, 2);
}

const zeroPad = (num, places) => String(num).padStart(places, '0');

const Subtract = () => {
  const value = Number(document.getElementById('subtracted_value').value);
  currency_str = currency_str - value;
  updateCurrencyBoard();
};

const ValidateValue = (event) => {
  event.value = event.value.replace(/[^\d]/g,'');
}

document.addEventListener("DOMContentLoaded", ChangeCurrency);