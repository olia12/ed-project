'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    allServicePrices: 0,
    services: {},
    servicePercentPrice: 0, 

    start: function() {
        appData.asking();
        appData.addPrices();
        appData.getTitle();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getRollbackMessage(appData.fullPrice);
        appData.logger();
    },

    isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function() {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        
        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?");
            let price = 0;
            do {
                price = prompt("Сколько будет стоить данная работа?");
            } 
            while (!appData.isNumber(price)); 

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
            let price = 0;
            
            do{
                price = prompt("Сколько это будет стоить?");
            } while(!appData.isNumber(price));

            appData.services[name] = +price;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function() {
        appData.fullPrice = Number(appData.screenPrice) + Number(appData.allServicePrices);
    },

    getTitle: function() {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    },

    getServicePercentPrices: function() {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
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
        console.log(appData.screens);
        // for (let key in appData) {
        //     console.log("Ключ: " + key + " " + "Значение: " + appData[key]);
        // }
    }
};

appData.start();
