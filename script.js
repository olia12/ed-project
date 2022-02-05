'use strict';

let title = prompt("Как называется ваш проект?", " калькУлятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 6;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
let allServicePrices;

// function expression
const getAllServicePrices = function(servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// function declaration
function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function(title) {
    title = title.trimStart();
    return title.charAt(0).toUpperCase() + title.substring(1).toLowerCase();
};
console.log(getTitle(title));

switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break;
  case fullPrice < 0:
    console.log("Что то пошло не так");
    break;
}



