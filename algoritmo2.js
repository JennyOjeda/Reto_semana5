let total = Number(prompt("Ingrese cantidad total de Productos"));
let CToner = +prompt("Ingrese la cantidad de toner");
let CCabezal = +prompt("Ingrese la cantidad de cabezales");
let CTinta = +prompt("Ingrese la cantidad de tinta");


        CIngresada = [CToner, CCabezal, CTinta];
        console.log(CIngresada)


        if (total === CIngresada){
            console.log("Todo el invesntario esta completo");
        }else if(CIngresada < total){
            total= total-CIngresada;
            console.log(`falta ${total} productos`);
        }else{
            total=CIngresada - total; 
            console.log(`Sobran ${total} materiales`); 
        }
    