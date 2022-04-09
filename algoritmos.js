//1.Un productor de leche lleva el registro de los que produce en litros, pero cuando entrega le pagan en galones. Realice un algoritmo y representelo en JS, ayude al producto a saber cuanto recibira por la entrega de su producto  de un día (1 galón = 3.785 litros).

let l;
let pg = 3.785;
let tg; 
let ga;

function calcular(l,pg)
{
    tg = Math.round(l/3.785)
    ga = pg * tg;
    return ga
}
let resultado = calcular(20,30)
console.log ("La Ganancia es " , resultado);


