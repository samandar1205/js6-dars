/*let round = Math.round(8,5);
let pow = Math.pow(4,4);
let sqrt = Math.sqrt(81);
let abs = Math.abs(-12.8);
let ceil = Math.ceil(4.5);
let floor = Math.floor(8.9);
let min = Math.min(12,1,31,18,12847,54187);
let max = Math.max(12,1,31,18,12847,54187);
let trunc = Math.trunc(4.5)
document.write(trunc)*/

/*localStorage.setItem('ism','Olov');
localStorage.setItem('familiya','sayfullayev');

localStorage['ism'] = "Olovuddin";
localStorage['Familiyasi'] = "sayfullayev"*/

/*localStorage.removeItem('ism')
localStorage.removeItem('familiya')*/

/*localStorage.clear()

let uningIsmi = localStorage.getItem('ism');
let uningFamiliyasi = localStorage.getItem('familiyasi');*/

/*console.log(uningIsmi,uningFamiliyasi);*/

/*
let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');   /!* get , post *!/
*/

/*let object = {ism:"Olov",yoshi:14};

let json = '{"ism":"Olov","yoshi":13}';

/!*console.log(JSON.parse(json));*!/

console.log(JSON.stringify(object));*/

let sorov = new XMLHttpRequest();
sorov.open('get' ,'jsonFayl.json')
sorov.send();
sorov.onload = function (){
    console.log(JSON.stringify(sorov));
}






