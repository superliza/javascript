//ingresos
var income = prompt("dime el ingreso");
//costo
var costs = prompt("dime el costo");
//porcentaje impuestos
var taxPercent = prompt("dime el porcentaje(%) de impuestos");
//ganancia bruta
var grossProfit = income-costs;
//cantidad de impuestos
var tax = grossProfit*taxPercent/100;
//ganancia neta
var netIncome = grossProfit-tax;
//la ganancia neta es
document.write("tu ganancia neta es $" + netIncome);
