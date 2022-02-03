"use strict";
let title = "ed-project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = 6;
let fullPrice = 20000;
let adaptive = true;

console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект?");
console.log(title);
screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);
screenPrice = prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);
adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(adaptive);
let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2);

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

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
