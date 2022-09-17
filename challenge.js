// Simulador interactivo, esta funcion me es util para aplicacion de cupones de descuento en un e-commerce



function finalprice (price, discount){
    return price - ((price * discount) / 100 )
}

for(i=0; i<5; i++){
    let result = finalprice (parseFloat(prompt("Enter your item value")), parseFloat(prompt("enter discount %")));
    alert(result);
}