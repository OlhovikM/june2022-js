//Task 1
let x = +prompt("Enter your number");
if (x !== 0){
    console.log("Вірно");
} else{
    console.log("Невірно");
}
//Task 2
let time = prompt("Enter the time of hour");
if( time >=1 && time <= 15 ){
    console.log("First part of the hour");
} else if(time >15 && time <=30){
    console.log("Second part of the hour");
} else if(time >30 && time <=45){
    console.log("Third part of the hour");
} else if(time >45 && time <=60){
    console.log("Fourth part of the hour");
} else {
    console.log("This number is out of time range");
}
//Task 2.1
let day = prompt("Enter the day of month");
if(day >=1 && day <=10){
    console.log("First decade of the month");
} else if( day >10 && day <=20){
    console.log("Second decade of the month");
} else if( day >20 && day <=31){
    console.log("Third decade of the month");
} else{
    console.log("This number isn't the number of the month");
}
//Task 3
let weekday = prompt("Enter the day of the week");
switch (weekday){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("It's not a day of the week");
}
//Task 4
let number_1 = +prompt("Enter first number");
let number_2 = +prompt("Enter second number");
if(number_1 > number_2){
    console.log(number_1);
} else if(number_1 < number_2){
    console.log(number_2);
} else if (number_1 === number_2){
    console.log("Numbers are equal");
}
//Task 5
let y = prompt("Enter") || "default";
console.log(y);