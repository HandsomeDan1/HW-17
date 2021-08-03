'use strict';

// 1) Выполните деструктуризацию обьекта let obj = {year: 2025, month: 12,day: 31,};
// Выведите на консоль все полученные переменные.
// Дайте переменным другое именование, задайте значения по умолчанию.
// let obj = {
//     year: 2025,
//     month: 12,
//     day: 31
// };
// const {year:YEAR, month:MONTH, day:DAY} = obj;
// console.log(obj);


// 2) Выполните деструктуризацию массива let arr = [2025, 12, 31];
// Выведите на консоль все полученные переменные.
// let arr = [2025, 12, 31];
//
// const [...newArr] = arr;
//
// for(let i = 0;i < newArr.length;i++){
//     console.log(newArr[i])
// }


// 3) Дан обьект const myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
// Удалите свойство wheels;
// Добавьте свойство year: 2010;
// Измените значение red на yellow;
// Выведите на консоль все ключи и значения myHonda  (подобное делали на занятии);
// Напишите метод для myHonda который выводит console.log(`Hello ${name}`)
// const myMercedes = {
//     color: 'Red',
//     wheels: 4,
//     engine: {
//         cylinders: 6,
//         size: 4.5
//     }
// };
//
// delete myMercedes.wheels;
//
// myMercedes.year = 2010;
//
// myMercedes.color = 'Yellow';
//
// for(let key in myMercedes){
//     if(typeof myMercedes[key] !== 'object'){
//         console.log(`${key} - ${myMercedes[key]}`)
//     }
//     else{
//         for(let newKey in myMercedes[key]){
//             console.log(`${newKey} - ${myMercedes[key][newKey]}`)
//         }
//     }
// }
//
// myMercedes.func = function(name){
//     console.log(`Hello ${name}`)
// };
// myMercedes.func('Dani');