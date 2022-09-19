// Calculadora donde podemos realizar operaciones básicas. Simulador interactivo 



let first = Number(prompt("enter first number please"));
let operation = prompt("which operation would you like to do: \n 1. ADD. \n 2. MINUS. \n 3. DIVIDE. \n 4. MULTIPLY ");
let second = Number(prompt("enter second number please"));
let calculate;

    if (operation == "ADD" || operation == "1") {
        calculate = first + second;
    } else if (operation == "MINUS" || operation == "2") {
        calculate = first - second;
    } else if ( operation == "DIVIDE" || operation == "3"){
        calculate = first / second;
    } else if (operation == "MULTIPLY" || operation == "4"){
        calculate = first * second;
    }

    alert (calculate);
