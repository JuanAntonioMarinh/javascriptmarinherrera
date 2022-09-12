// Simulador interactivo, esta funcion me es util para aplicacion de cupones de descuento en un e-commerce

/*

function finalprice (price, discount){
    return price - ((price - discount) / 100 )
}

for(i=0; i<5; i++){
    let result = finalprice (parseFloat(prompt("Enter your item value")), parseFloat(prompt("enter discount %")));
    alert(result);
}

*/

// Incorporando arrays, la idea es agregarle una descripción a cada elemento del array pero se me estaba complicando un poco, quise dejarlo simple para cumplir con la consigna pero vamos mejorando.

const selection = [`zenGardens`, `suculents`, `indoors`, `outdoors`];
for (let index = 0; index < selection.length; index++) {
    alert("Our main products are " + index + " " + selection[index]);
};