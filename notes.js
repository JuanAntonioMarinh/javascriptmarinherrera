

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
const cash = 700
const total = 800
const card = false

if (cash > total) {
    console.log("okay")
} else if (card){
    console.log("you can go")
} else {
    console.log("not enough")
}
*/






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


/*
FOR

for( let i = 1; i <= 20; i+2){
    let resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}`);
}


for ( let i = 1; i <= 10; i++){
    console.log(`el valor de I es: ${i}`);
}*/


/*

FUNCTIONS

function operation (name, secondName, lastName){
console.log(`hola ${name} ${secondName} ${lastName}`);
}

operation ("juan", "antonio", "marin")



function sumar (primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
    return resultado;
}

console.log(sumar(5,6));

*/











/*
//BOOKLET ACTIVITIES//

//1. 

let name = "homero";
let lastName = "simpson";
let age = 55;


// 2.

const firstcity = "manizales";
const secondcity = "pereira";
const thirdcity = "medellin";
const fourthcity = "bogota";
const fifthcity = "armenia";


// 3.

let person = "Juan Marin";
let country = "col";
let birth = "Nov 3rd";
let address = "123 pinar";
const code = "124563443bdhqvfqey7";

let license ="Name: " + person +  
            "Country: " + country + 
            "Birthdate: " + birth +  
            "Main Address: " + address +  
            "Driver License No: " + code;
console.log(license);




// 4.

let person1 = prompt(`Access the name of a member of your family:`);
let person2 = prompt(`Access the name of another member of your family:`);
let person3 = prompt(`Access the name of another member of your family again: `);
let person4 = prompt(`Access the name of another member of your family for the last time: `);
let family =  "1). " + person1+" " + "2). "+person2 + "3). " +person3+ " " +"4). "+person4;

console.log(family);



//5. 

let item1 = Number(prompt(`Enter amount to apply discounts: `));

let discount20 = item1 - (item1 * 0.2);
let discount30 = item1 - (item1 * 0.3);

alert( `after 20% off: ` +  discount20);
alert( `after 30% off: ` + discount30);



// 6.

let user = prompt(`Who was?`);
let alias = "juan" && "jhorman";


if (user == alias) {
    alert("It was me!")
} else {
    alert("It was not me")
};


// 7. 

let letra = prompt("Ingrese una letra");

if ((letra == "Y") || (letra == "y")) {
    alert("correcto")
} else {
    alert("incorrecto")
};



// 8. 

let option = prompt(" Ingrese un numero del 1 al 4 para seleccionar personaje")

if (option == 1) {
    alert("seleccionaste a Homero")
} else if( option == 2){
    alert("Seleccionaste a Bart")
} else if ( option == 3){
    alert("seleccionaste a Lisa")
} else if (option == 4){
    alert ("seleccionaste a Marge")
} else {
    alert("press f5")
};



// 9. 

let number = Number(prompt("Which is your budget?"))

if (( number >= 0) && (number <= 1000)){
    alert("Low budget!")
}
else if (( number >= 1001 ) && (number <=3000)){
    alert ("medium budget!")
}
else if (number > 3000){
    alert ("high budget")
};




// 10. 

let song1 = prompt("Enter 1st song")
let song2 = prompt("enter song 2")
let song3 = prompt("Enter song 3")
let song4 = prompt("enter last song")

if ((song1 != "") && (song2 != "") && (song3 != "") && (song4 != "")){
    let playlist = "1) " + song1 + " " + " 2) " + song2 + " " + "3) " + song3 + " " + "4) " + song4 + " "
    alert( " Your playlist is: " + playlist)
} else {
    alert ("you need to access 4 songs");
}



// 11. 

let reps = Number(prompt("How many times do you want to repeat text?"))
let text = prompt("Write the text")

for (let i= 1; i <= reps; i++){
    alert(text)
};



// 12. 

let reps = Number (prompt("How many sides does a box have?"))

for ( i = 0; i < reps; i++){
    if (i > 4){
    break
    };
}

alert(`${reps}sides`);



// 13.

let students = " ";

for (i = 0; i < 10; i++){
    students += prompt("Students name") + "and";
}

alert(students);




// 14. 

let entry = prompt("access names");
let list = ``;

while (entry != `Voldemort` || entry != `voldemort`){
    list += entry + "/n";
    entry = prompt("access name again");
}

alert(list);



// 15. Revisar

let entry = prompt("Pick your favorite food randomly from 1-4, then enter ESC.")
while ( entry != `ESC` || entry != `esc`) {
    switch ( entry ) {
        case "1":
            alert("tomatoe");
            break;
        case "2":
            alert("Potatoe");
            break;
        case "3":
            alert("Meat");
            break;
        case "4":
            alert("chicken");
            break;
        default:
            alert("select a number from 1 to 4 or write esc to close");
            break;
    }
    let entry = prompt("Pick again please");
}



// 16. Revisar

function entry (){
    return prompt("Access info");
}

function process (value){
    return "entry is " + value
}

function exit (value){
    alert(value);
};



// 17. 

function rounding (value){
    return Math.round (value)
}

for (let i=0; i<5; i++){
    let entry = prompt("access a decimal number to round up to the closes whole");
    alert(rounding(entry));
};




// 18. 

function tax (price, percentage){
    return price + ((price + percentage) / 100 )
}

for(i=0; i<5; i++){
    let result = tax (parseFloat(prompt("Enter your item value")), parseFloat(prompt("enter tax %")));
    alert(result);
}



// Incorporando arrays, la idea es agregarle una descripción a cada elemento del array pero se me estaba complicando un poco, quise dejarlo simple para cumplir con la consigna pero vamos mejorando.


const selection = [`zenGardens`, `suculents`, `indoors`, `outdoors`];
for (let index = 0; index < selection.length; index++) {
    alert("Our main products are " + index + " " + selection[index]);
};

*/











