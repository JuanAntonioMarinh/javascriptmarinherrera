
/* 

TIPOS DE VARIABLES

let curso = "coderhouse"
console.log(curso)
let numeroDeAlumnos = "181"
console.log(numeroDeAlumnos)
let enCurso = "true"
console.log(enCurso)
*/


/*
SUMA DE VARIABLES


let base1 = 25;
let base2 = 10;

let base3 = base1 + base2;

console.log(base3)*/




/*

PROMPTS & ALERTS 

let name = prompt("access your name");

alert("Hello " + name)*/

/*
let last = Number(prompt("enter a number: "));

let first = Number(prompt("and other number: "));

let fullname = first + last;

alert(fullname);*/




/*

IF & ELSE IF 


const cash = 700
const total = 800
const card = false

if (cash > total) {
    console.log("okay")
} else if (card){
    console.log("you can go")
} else {
    console.log("not enough")
}*/







/*

OR


const cash = 600;
const credit = 300;
const available = cash + credit;
const total = 900;

if(cash >= total || credit >= total || available >= total ){
console.log("you can go");
} else{
    console.log("not enough to go");
}*/

/*
let data1 = Number(prompt("enter your cash available"));
let data2 = Number(prompt("enter your credit available"));
let totalAvailable = data1 + data2
let cost = 700;

if(data1 >= cost ||data2 >= cost || totalAvailable >= cost){
    alert ("you can continue");
} else {
    alert ("not enough to go");
}*/






/*
SWITCH

let drink = prompt ("favourite drink between coke and water?");

switch (drink){
    case "coke":
        alert(`not healthy, press f5 and try again`);
    break;
    case "water": 
        console.log(`Access granted to the console`);
    break;
    default:
        alert(`Option not valid, press f5 and try again`);
    break;
}
*/





/*


WHILE 



let x = 0;
while(x<=10){
    console.log(`El valor de x es: ${x}`);
    x++;
}

let entry = prompt("Enter 5 numbers and then write the word END");

let text = " ";

while (entry != "END" && entry != "end") {
    text += entry + " ";
    entry = prmpt("Enter 5 numbers and then write the word END");
}

alert(text)*/



/*


DO WHILE

let y = 0;

do {
    console.log(`el valor de y es: ${y}`);
    y++
} while (y <= 10);
*/




let numero = Number(prompt("ingrese un numero"));

for( let i = 1; i <= 10; i++){
    let resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}`);
}

