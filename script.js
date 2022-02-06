'use strict';

let title = prompt("Как называется ваш проект?", " калькУлятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");

let rollback = 6;
let fullPrice;
let allServicePrices;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

// function expression
const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};

// function declaration
function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function() {
    title = title.trimStart();
    return title.charAt(0).toUpperCase() + title.substring(1).toLowerCase();
};

const getServicePercentPrices = function() {
    return fullPrice - servicePercentPrice;
};

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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


