


/*
let operation = prompt (`Please select the items you would like to get:
1. chair
2. table
3. item
4. spoon`);

function operation (chair, table, item, spoon){


switch (operation){
    case "chair":
        alert(`the cost of your product is 45`);
    break;
    case "table": 
        console.log(`the cost of your product is 60`);
    break;
    case "item": 
        console.log(`the cost of your product is 25`);
    break;
    case "spoon": 
        console.log(`the cost of your product is 110`);
    break;
    default:
        alert(`Option not valid, press f5 and try again`);
    break;
}}; 
 */


let operation = prompt (`Please select the items you would like to get:
1. chair
2. table
3. item
4. spoon`)

let suma = " "
let total = 0

while (pedido != "ESC" && pedido != "esc")
    switch (pedido){
        case"1":
            suma=500
            break;
        case"2":
            suma=250
            break;
        case "3":
            suma=180;
            break;
        case"4":
            suma=200;
            break;     
    }
    total += suma