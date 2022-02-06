'use strict';

let title = prompt("Как называется ваш проект?", " калькУлятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
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
getTitle(title);

const getServicePercentPrices = function(fullPrice, servicePercentPrice) {
    return fullPrice - servicePercentPrice;
};
servicePercentPrice = getServicePercentPrices(fullPrice, servicePercentPrice);

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function(price) {
    switch (true) {
        case price >= 30000:
            return "Даем скидку в 10%";
        case price >= 15000 && price < 30000:
            return "Даем скидку в 5%";
        case price < 15000 && price >= 0:
            return "Скидка не предусмотрена";
        case price < 0:
            return "Что то пошло не так";
    }
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));

console.log(getRollbackMessage(fullPrice));

console.log(getServicePercentPrices(fullPrice, servicePercentPrice));


