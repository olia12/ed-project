'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 6;
let fullPrice;
let allServicePrices;
let service1;
let service2;
let servicePercentPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
    screenPrice = prompt("Сколько будет стоить данная работа?");

    while (!isNumber(screenPrice)) {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    }

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

// function expression
const getAllServicePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        sum += +prompt("Сколько это будет стоить?");
    }

    return sum;
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
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices ' + allServicePrices);
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


