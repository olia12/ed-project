'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let fullPrice;
let allServicePrices;
let service1;
let service2;
let servicePercentPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

// const asking = function() {
//     title = prompt("Как называется ваш проект?", "Калькулятор верстки");
//     screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
//     do {
//         screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
//     }
//     while (!isNumber(screenPrice)); 
    
//     adaptive = confirm("Нужен ли адаптив на сайте?");
// };

const asking = function() {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
    }
    while (!isNumber(screenPrice) || screenPrice === 0); 
    
    adaptive = confirm("Нужен ли адаптив на сайте?");
};

// function expression
const getAllServicePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let cost;
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
        }
        do{
            cost = prompt("Сколько это будет стоить?", "1000");
        }
        while(!isNumber(cost));   
        sum += +cost;
    }

    return sum;
};

// function declaration
function getFullPrice() {
    return Number(screenPrice) + Number(allServicePrices);
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
title = getTitle();
allServicePrices = getAllServicePrices(); 
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);

showTypeOf(adaptive); 
showTypeOf(fullPrice); 
showTypeOf(servicePercentPrice);
showTypeOf(allServicePrices);

getRollbackMessage(fullPrice);

console.log(screenPrice.toString().length);
console.log('allServicePrices ' + allServicePrices);
console.log('fullPrice ' + fullPrice);
console.log(screens.toLowerCase().split(", "));
console.log('servicePercentPrice ' + servicePercentPrice);



