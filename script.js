'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    allServicePrices: 0,
    service1: '',
    service2: '',
    servicePercentPrice: 0, 

    asking: function() {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
    do {
        appData.screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
    }
    while (!isNumber(appData.screenPrice)); 
    
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices: function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let cost = 0;
        if (i === 0) {
            appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
        } else if (i === 1) {
            appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
        }
        do{
            cost = prompt("Сколько это будет стоить?", "1000");
        } while(!isNumber(cost));

        sum += +cost;
    }
    return sum;
    },

    getFullPrice: function() {
    return Number(appData.screenPrice) + Number(appData.allServicePrices);
    },

    getTitle: function() {
    appData.title = appData.title.trimStart();
    return appData.title.charAt(0).toUpperCase() + appData.title.substring(1).toLowerCase();
    },

    getServicePercentPrices: function() {
    return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },

    getRollbackMessage: function(price) {
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
    },
    
    logger: function() {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    },

    start: function() {
        appData.asking();
        appData.title = appData.getTitle();
        appData.allServicePrices = appData.getAllServicePrices(); 
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.getRollbackMessage(appData.fullPrice);
        appData.logger();
    }

};

appData.start();






