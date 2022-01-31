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
