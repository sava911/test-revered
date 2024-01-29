
document.addEventListener("DOMContentLoaded", function () {
  const tariffs = document.querySelectorAll(".pricing__item"); // Получаем все блоки с тарифами

  // Устанавливаем начальное состояние блоков с тарифами (невидимые)
  tariffs.forEach(function (tariff) {
    tariff.style.opacity = 0;

  });

  // Плавное появление блоков с тарифами
  let delay = 0;
  tariffs.forEach(function (tariff) {
    setTimeout(function () {
      tariff.style.opacity = 1;
    }, delay); // Устанавливаем задержку для каждого блока
    delay += 1000; // Увеличиваем задержку для следующего блока
  });
});

// Получаем все блоки с тарифами
const tariffs = document.querySelectorAll(".pricing__item");

// Добавляем обработчик события при клике на значок валюты
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("currency")) {
    let newCurrency = "";
    if (target.textContent === "$") {
      newCurrency = "₽";
    } else if (target.textContent === "₽") {
      newCurrency = "€";
    } else if (target.textContent === "€") {
      newCurrency = "$";
    }
    updatePrices(target.textContent, newCurrency);
  }
});

function updatePrices(oldCurrency, newCurrency) {
  tariffs.forEach(function (tariff) {
    const tariffPrice = tariff.querySelector(".price");
    const tariffCurrency = tariff.querySelector(".currency");
    if (tariffCurrency.textContent === oldCurrency) {
      if (newCurrency === "₽") {
        tariffPrice.textContent = Math.round(parseInt(tariffPrice.textContent) * 80);
      } else if (newCurrency === "€") {
        tariffPrice.textContent = Math.round(parseInt(tariffPrice.textContent) / 80);
      } else if (newCurrency === "$") {
        tariffPrice.textContent = Math.round(parseInt(tariffPrice.textContent) * 1);
      }
      tariffCurrency.textContent = newCurrency;
    }
  });
}

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("period")) {
    const tariffs = document.querySelectorAll(".pricing__item");
    tariffs.forEach(function (tariff) {
      const tariffPrice = tariff.querySelector(".price");
      const tariffPeriod = tariff.querySelector(".period");
      if (tariffPeriod.textContent === "Months") {
        tariffPrice.textContent = Math.round(parseInt(tariffPrice.textContent) / 30);
        tariffPeriod.textContent = "Day";
      } else if (tariffPeriod.textContent === "Day") {
        tariffPrice.textContent = Math.round(parseInt(tariffPrice.textContent) * 30);
        tariffPeriod.textContent = "Months";
      }
    });
  }
});


