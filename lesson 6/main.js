// Task 1 - Знайти та вивести довжину настyпних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let str_0 = "hello world";
let str_1 = "lorem ipsum";
let str_2 = "javascript is cool";
console.log(str_0.length);
console.log(str_1.length);
console.log(str_2.length);
// Task 2 - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let str_3 = "hello world";
let str_4 = "lorem ipsum";
let str_5 = "javascript is cool";
console.log(str_3.toUpperCase());
console.log(str_4.toUpperCase());
console.log(str_5.toUpperCase());
//Task 3 - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str_6 = "HELLO WORLD";
let str_7 = "LOREM IPSUM";
let str_8 = "JAVASCRIPT IS COOL";
console.log(str_6.toLowerCase());
console.log(str_7.toLowerCase());
console.log(str_8.toLowerCase());
//Task 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str_9 = ' dirty string   ';
console.log(str_9.replace(/ /g, " "));
// Task 5 - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
function stringToArray(str){
    return str.split(' ');
}
let array = stringToArray(str);
console.log(array);
//Task 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array_1 = [10,8,-7,55,987,-1011,0,1050,0];
let arArray = array_1.map(arItem => {
    return arItem;
})
let may = arArray.toString();
console.log(may);
//Task 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numb = [1, 5, 14, 12, 29];
function sortNums(number, direction){
    if (direction === 'less'){
        number.sort((num1,num2)=>num1-num2)
    }
    if (direction === 'more'){
        number.sort((num1,num2)=>num2-num1)
    }
}
sortNums(numb, 'less')
console.log(numb);
sortNums(numb, 'more');
console.log(numb);
//Task 8- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((x, y) => x.monthDuration - y.monthDuration);
console.log(coursesAndDurationArray);
let asd = function (course){
    if(course.monthDuration>5){
        console.log(course);
    }
}
coursesAndDurationArray.forEach(asd);
//Task 9  - описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
let cards = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'diamond', value:'queen', color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'red'},
    {cardSuit: 'spade', value: 'ace', color: 'black'}
];
let colors = function (col){
    if(col.color === 'black' && col.value === 'ace'){
        console.log(col);
    }
    if (col.value === 6){
        console.log(col);
    }
    if (col.color === 'red'){
        console.log(col);
    }
    if (col.cardSuit === 'diamond'){
        console.log(col);
    }
    if (col.cardSuit === 'clubs' && col.value>9){
        console.log(col);
    }
}
cards.forEach(colors);
let arr_ay = cards.reduce((suit, card) =>{
        if (card.cardSuit === 'clubs'){
            suit.clubs.push(card);
        }
        if (card.cardSuit === 'diamond'){
            suit.diamond.push(card);
        }
        if (card.cardSuit === 'heart'){
            suit.heart.push(card);
        }
        if (card.cardSuit === 'spade'){
            suit.spade.push(card);
        }
        return suit;
    },
    {clubs :[], diamond:[], heart:[], spade:[]});
console.log(arr_ay);
