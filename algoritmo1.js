let tipoHamburguesas = prompt("El Naufrago Satisfecho te ofrece lo siguiente hamburguesa: \n1 Hamburgesa sensilla,  \n2 Hamburguesa doble, \n3 Hamburguesa trible  ")
let n = prompt("Cuantas hamburgesas quieres ?"); 
let tp = prompt("Como realizaras el pago: \n1 Efectivo, \n2 Con tarjeta ") ; 


    switch(tipoHamburguesas){
        case 1: 
            to = n * 20.00;
            // tot = to +(to * 0.05);
        break;
        case 2: 
            to = n * 25.00 
            // tot =to + ( to * 0.05);
        break;
        case 3:
            to = n * 28.00;
            // tot =to + ( to * 0.05);
        break;
    } 
    if(tp === "1"){
        console.log(`El monto a pagar por ${n} hamburguesas: es ${to}`);
     }else if(tp === "2"){
    tot = to + (to * 0.05);  
    console.log(`El monto a pagar por ${n} hamburguesas es $${tot}`);
    
     }

    