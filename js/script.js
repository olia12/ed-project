'use strict';

const title = document.getElementsByTagName('h1')[0];
const startButton = document.getElementsByClassName('handler_btn')[0];
const resetButton = document.getElementsByClassName('handler_btn')[1];
const screenButton = document.querySelector('.screen-btn');
const additionallyPercent = document.querySelectorAll('.other-items.percent');
const additionallyNumber = document.querySelectorAll('.other-items.number');
const rangeInput = document.querySelector('.rollback input[type=range]');
const rangeValue = document.querySelector('.rollback span.range-value');
const totalInputLayout = document.getElementsByClassName('total-input')[0];
const totalInputScreens = document.getElementsByClassName('total-input')[1];
const totalInputAdditionally = document.getElementsByClassName('total-input')[2];
const totalInput = document.getElementsByClassName('total-input')[3];
const totalInputRollback = document.getElementsByClassName('total-input')[4];
let screenBlock = document.querySelectorAll('.screen');

console.log(title);
console.log(startButton);
console.log(resetButton);
console.log(screenButton);
console.log(additionallyPercent);
console.log(additionallyNumber);
console.log(rangeInput);
console.log(rangeValue);
console.log(totalInputLayout);
console.log(totalInputScreens);
console.log(totalInputAdditionally);
console.log(totalInput);
console.log(totalInputRollback);
console.log(screenBlock);


// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 10,
//     fullPrice: 0,
//     allServicePrices: 0,
//     services: {},
//     servicePercentPrice: 0, 

//     start: function() {
//         appData.asking();
//         appData.addPrices();
//         appData.getTitle();
//         appData.getFullPrice();
//         appData.getServicePercentPrices();
//         appData.getRollbackMessage(appData.fullPrice);
//         appData.logger();
//     },

//     isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//     },

//     asking: function() {
//         do {
//         appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
//         } while (appData.isNumber(appData.title) || appData.title === ""); 
        
//         for (let i = 0; i < 2; i++) {
//             let name;
//             do {
//                 name = prompt("Какие типы экранов нужно разработать?", "простые");
//             }
//             while (appData.isNumber(name) || name === "");

//             let price = 0;
//             do {
//                 price = prompt("Сколько будет стоить данная работа?", "1000");
//             } 
//             while (!appData.isNumber(price)); 

//             appData.screens.push({ id: i, name: name, price: price });
//         }

//         for (let i = 0; i < 2; i++) {
//             let name;
//             do {
//                 name = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
//             }
//             while (appData.isNumber(name) || name === "");

//             let price = 0;
//             do{
//                 price = prompt("Сколько это будет стоить?");
//             } while(!appData.isNumber(price));
            
//             appData.services[name + i] = +price;

//         }

//         appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//     },

//     addPrices: function() {
//         // appData.screenPrice = appData.screens.reduce(function(sum, item) {
//         //     return sum + appData.item.price;
//         // }, 0);
//         for (let screen of appData.screens) {
//             appData.screenPrice += +screen.price;
//         }

//         for (let key in appData.services) {
//             appData.allServicePrices += appData.services[key];
//         }
//     },

//     getFullPrice: function() {
//         appData.fullPrice = Number(appData.screenPrice) + Number(appData.allServicePrices);
//     },

//     getTitle: function() {
//         appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
//     },

//     getServicePercentPrices: function() {
//         appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
//     },

//     getRollbackMessage: function(price) {
//         switch (true) {
//             case price >= 30000:
//                 return "Даем скидку в 10%";
//             case price >= 15000 && price < 30000:
//                 return "Даем скидку в 5%";
//             case price < 15000 && price >= 0:
//                 return "Скидка не предусмотрена";
//             case price < 0:
//                 return "Что то пошло не так";
//         }
//     },

//     logger: function() {
//         console.log(appData.fullPrice);
//         console.log(appData.servicePercentPrice);
//         console.log(appData.screens);
//         // for (let key in appData) {
//         //     console.log("Ключ: " + key + " " + "Значение: " + appData[key]);
//         // }
//     }
// };

// appData.start();